const TaiHoiDong = require("../models/TaiHoiDongModel")

const createTaiHoiDong = (newTaiHoiDong) => {
    return new Promise(async (resolve, reject) => {
        const { TaiHoiDongId, QuanNhanId, CapHoiDong, LoaiHoiDong, VaiTro, ThoiDiem, Quy, Nam, KhoiLuongCongViec, FileCM, SoGioQuyDoi, TrangThai, edituser, edittime, GhiChu } = newTaiHoiDong
        try {
            // const checkTaiHoiDong = await TaiHoiDong.findOne({
            //     TaiHoiDongId: TaiHoiDongId
            // })
            // if (checkTaiHoiDong !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'TaiHoiDong is already'
            //     })
            // }
            const newTaiHoiDong = await TaiHoiDong.create({
                TaiHoiDongId, QuanNhanId, CapHoiDong, LoaiHoiDong, VaiTro, ThoiDiem, Quy, Nam, KhoiLuongCongViec, FileCM, SoGioQuyDoi, TrangThai, edituser, edittime, GhiChu
            })
            if (newTaiHoiDong) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newTaiHoiDong
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateTaiHoiDong = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTaiHoiDong = await TaiHoiDong.findOne({
                _id: id
            })
            if (checkTaiHoiDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai HoiDong is not defined'
                })
            }

            const updatedTaiHoiDong = await TaiHoiDong.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedTaiHoiDong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteTaiHoiDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTaiHoiDong = await TaiHoiDong.findOne({
                _id: id
            })
            if (checkTaiHoiDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await TaiHoiDong.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyTaiHoiDong = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await TaiHoiDong.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsTaiHoiDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const taihoidong = await TaiHoiDong.findOne({
                _id: id
            })
            if (taihoidong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: taihoidong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllTaiHoiDong = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalTaiHoiDong = await TaiHoiDong.count()
            let allTaiHoiDong = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await TaiHoiDong.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalTaiHoiDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalTaiHoiDong / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allTaiHoiDongSort = await TaiHoiDong.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allTaiHoiDongSort,
                    total: totalTaiHoiDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalTaiHoiDong / limit)
                })
            }
            if (!limit) {
                allTaiHoiDong = await TaiHoiDong.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allTaiHoiDong = await TaiHoiDong.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allTaiHoiDong,
                total: totalTaiHoiDong,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalTaiHoiDong / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await TaiHoiDong.distinct('QuanNhanId')
            resolve({
                status: 'OK',
                message: 'Success',
                data: allType,
            })
        } catch (e) {
            reject(e)
        }
    })
}
const getTaiHoiDongByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhCongTacList = await TaiHoiDong.find({
                QuanNhanId: id
            });

            if (!quaTrinhCongTacList || quaTrinhCongTacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No TaiHoiDong found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quaTrinhCongTacList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createTaiHoiDong,
    updateTaiHoiDong,
    getDetailsTaiHoiDong,
    deleteTaiHoiDong,
    getAllTaiHoiDong,
    deleteManyTaiHoiDong,
    getAllType,
    getTaiHoiDongByQuanNhanId
}