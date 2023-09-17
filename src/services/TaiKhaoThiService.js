const TaiKhaoThi = require("../models/TaiKhaoThiModel")

const createTaiKhaoThi = (newTaiKhaoThi) => {
    return new Promise(async (resolve, reject) => {
        const { TaiKhaoThiId, QuanNhanId, ThoiDiem, Quy, Nam, HocKy, HinhThucKhaoThi, MaLopHocPhan, MonHoc, KhoiLuongCongViec, FileCM, SoGioQuyDoi, TrangThai, edituser, edittime, GhiChu } = newTaiKhaoThi
        try {
            // const checkTaiKhaoThi = await TaiKhaoThi.findOne({
            //     TaiKhaoThiId: TaiKhaoThiId
            // })
            // if (checkTaiKhaoThi !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'TaiKhaoThi is already'
            //     })
            // }
            const newTaiKhaoThi = await TaiKhaoThi.create({
                TaiKhaoThiId, QuanNhanId, ThoiDiem, Quy, Nam, HocKy, HinhThucKhaoThi, MaLopHocPhan, MonHoc, KhoiLuongCongViec, FileCM, SoGioQuyDoi, TrangThai, edituser, edittime, GhiChu
            })
            if (newTaiKhaoThi) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newTaiKhaoThi
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateTaiKhaoThi = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTaiKhaoThi = await TaiKhaoThi.findOne({
                _id: id
            })
            if (checkTaiKhaoThi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            const updatedTaiKhaoThi = await TaiKhaoThi.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedTaiKhaoThi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteTaiKhaoThi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTaiKhaoThi = await TaiKhaoThi.findOne({
                _id: id
            })
            if (checkTaiKhaoThi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await TaiKhaoThi.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyTaiKhaoThi = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await TaiKhaoThi.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsTaiKhaoThi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const taikhaothi = await TaiKhaoThi.findOne({
                _id: id
            })
            if (taikhaothi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: taikhaothi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllTaiKhaoThi = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalTaiKhaoThi = await TaiKhaoThi.count()
            let allTaiKhaoThi = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await TaiKhaoThi.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalTaiKhaoThi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalTaiKhaoThi / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allTaiKhaoThiSort = await TaiKhaoThi.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allTaiKhaoThiSort,
                    total: totalTaiKhaoThi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalTaiKhaoThi / limit)
                })
            }
            if (!limit) {
                allTaiKhaoThi = await TaiKhaoThi.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allTaiKhaoThi = await TaiKhaoThi.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allTaiKhaoThi,
                total: totalTaiKhaoThi,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalTaiKhaoThi / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await TaiKhaoThi.distinct('QuanNhanId')
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
const getTaiKhaoThiByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const TaiKhaoThiList = await TaiKhaoThi.find({
                QuanNhanId: id
            });

            if (!TaiKhaoThiList || TaiKhaoThiList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No TaiKhaoThi found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: TaiKhaoThiList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createTaiKhaoThi,
    updateTaiKhaoThi,
    getDetailsTaiKhaoThi,
    deleteTaiKhaoThi,
    getAllTaiKhaoThi,
    deleteManyTaiKhaoThi,
    getAllType,
    getTaiKhaoThiByQuanNhanId
}