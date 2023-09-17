const TaiSan = require("../models/TaiSanModel")

const createTaiSan = (newTaiSan) => {
    return new Promise(async (resolve, reject) => {
        const { TaiSanId, QuanNhanId, TenTaiSan, LoaiTaiSan, GiaTri, DienTich, HoatDongKinhTe, TrangThai, edituser, edittime, GhiChu } = newTaiSan
        try {
            // const checkTaiSan = await TaiSan.findOne({
            //     TaiSanId: TaiSanId
            // })
            // if (checkTaiSan !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'TaiSan is already'
            //     })
            // }
            const newTaiSan = await TaiSan.create({
                TaiSanId, QuanNhanId, TenTaiSan, LoaiTaiSan, GiaTri, DienTich, HoatDongKinhTe, TrangThai, edituser, edittime, GhiChu
            })
            if (newTaiSan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newTaiSan
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateTaiSan = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTaiSan = await TaiSan.findOne({
                _id: id
            })
            if (checkTaiSan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedTaiSan = await TaiSan.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedTaiSan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteTaiSan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTaiSan = await TaiSan.findOne({
                _id: id
            })
            if (checkTaiSan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await TaiSan.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyTaiSan = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await TaiSan.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsTaiSan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const taisan = await TaiSan.findOne({
                _id: id
            })
            if (taisan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: taisan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllTaiSan = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalTaiSan = await TaiSan.count()
            let allTaiSan = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await TaiSan.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalTaiSan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalTaiSan / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allTaiSanSort = await TaiSan.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allTaiSanSort,
                    total: totalTaiSan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalTaiSan / limit)
                })
            }
            if (!limit) {
                allTaiSan = await TaiSan.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allTaiSan = await TaiSan.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allTaiSan,
                total: totalTaiSan,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalTaiSan / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await TaiSan.distinct('QuanNhanId')
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
const getTaiSanByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhCongTacList = await TaiSan.find({
                QuanNhanId: id
            });

            if (!quaTrinhCongTacList || quaTrinhCongTacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No TaiSan found for the given QuanNhanId'
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
    createTaiSan,
    updateTaiSan,
    getDetailsTaiSan,
    deleteTaiSan,
    getAllTaiSan,
    deleteManyTaiSan,
    getAllType,
    getTaiSanByQuanNhanId
}