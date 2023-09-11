const TaiHuongDan = require("../models/TaiHuongDanModel")

const createTaiHuongDan = (newTaiHuongDan) => {
    return new Promise(async (resolve, reject) => {
        const { TaiHuongDanId, QuanNhanId, HinhThucHuongDan, HocVien, Lop, DeTai, NgayBatDau, Quy, Nam, SoCBHuongDan, DinhMuc, SoGioChuan, TrangThai, edituser, edittime, GhiChu } = newTaiHuongDan
        try {
            // const checkTaiHuongDan = await TaiHuongDan.findOne({
            //     TaiHuongDanId: TaiHuongDanId
            // })
            // if (checkTaiHuongDan !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'TaiHuongDan is already'
            //     })
            // }
            const newTaiHuongDan = await TaiHuongDan.create({
                TaiHuongDanId,
                QuanNhanId,
                HinhThucHuongDan,
                HocVien,
                Lop,
                DeTai,
                NgayBatDau,
                Quy,
                Nam,
                SoCBHuongDan,
                DinhMuc,
                SoGioChuan,
                TrangThai,
                edituser,
                edittime,
                GhiChu
            })
            if (newTaiHuongDan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newTaiHuongDan
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateTaiHuongDan = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTaiHuongDan = await TaiHuongDan.findOne({
                _id: id
            })
            if (checkTaiHuongDan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            const updatedTaiHuongDan = await TaiHuongDan.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedTaiHuongDan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteTaiHuongDan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTaiHuongDan = await TaiHuongDan.findOne({
                _id: id
            })
            if (checkTaiHuongDan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await TaiHuongDan.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyTaiHuongDan = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await TaiHuongDan.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsTaiHuongDan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const taihuongdan = await TaiHuongDan.findOne({
                _id: id
            })
            if (taihuongdan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: taihuongdan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllTaiHuongDan = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalTaiHuongDan = await TaiHuongDan.count()
            let allTaiHuongDan = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await TaiHuongDan.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalTaiHuongDan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalTaiHuongDan / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allTaiHuongDanSort = await TaiHuongDan.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allTaiHuongDanSort,
                    total: totalTaiHuongDan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalTaiHuongDan / limit)
                })
            }
            if (!limit) {
                allTaiHuongDan = await TaiHuongDan.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allTaiHuongDan = await TaiHuongDan.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allTaiHuongDan,
                total: totalTaiHuongDan,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalTaiHuongDan / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await TaiHuongDan.distinct('QuanNhanId')
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
const getTaiHuongDanByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhCongTacList = await TaiHuongDan.find({
                QuanNhanId: id
            });

            if (!quaTrinhCongTacList || quaTrinhCongTacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No TaiHuongDan found for the given QuanNhanId'
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
    createTaiHuongDan,
    updateTaiHuongDan,
    getDetailsTaiHuongDan,
    deleteTaiHuongDan,
    getAllTaiHuongDan,
    deleteManyTaiHuongDan,
    getAllType,
    getTaiHuongDanByQuanNhanId
}