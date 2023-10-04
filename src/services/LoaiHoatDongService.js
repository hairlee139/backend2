const LoaiHoatDong = require("../models/LoaiHoatDongModel")

const createLoaiHoatDong = (newLoaiHoatDong) => {
    return new Promise(async (resolve, reject) => {
        const { LoaiHoatDongId, TenLoaiHoatDong, lock, lockdate, edituser, edittime, GhiChu } = newLoaiHoatDong
        try {
            // const checkLoaiHoatDong = await LoaiHoatDong.findOne({
            //     LoaiHoatDongId: LoaiHoatDongId
            // })
            // if (checkLoaiHoatDong !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'LoaiHoatDong is already'
            //     })
            // }
            const newLoaiHoatDong = await LoaiHoatDong.create({
                LoaiHoatDongId, TenLoaiHoatDong, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newLoaiHoatDong) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newLoaiHoatDong
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateLoaiHoatDong = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiHoatDong = await LoaiHoatDong.findOne({
                _id: id
            })
            if (checkLoaiHoatDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedLoaiHoatDong = await LoaiHoatDong.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLoaiHoatDong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteLoaiHoatDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiHoatDong = await LoaiHoatDong.findOne({
                _id: id
            })
            if (checkLoaiHoatDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await LoaiHoatDong.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyLoaiHoatDong = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await LoaiHoatDong.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsLoaiHoatDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await LoaiHoatDong.findOne({
                _id: id
            })
            if (ngoaingu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: ngoaingu
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllLoaiHoatDong = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalLoaiHoatDong = await LoaiHoatDong.count()
            let allLoaiHoatDong = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await LoaiHoatDong.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalLoaiHoatDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiHoatDong / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allLoaiHoatDongSort = await LoaiHoatDong.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allLoaiHoatDongSort,
                    total: totalLoaiHoatDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiHoatDong / limit)
                })
            }
            if (!limit) {
                allLoaiHoatDong = await LoaiHoatDong.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allLoaiHoatDong = await LoaiHoatDong.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLoaiHoatDong,
                total: totalLoaiHoatDong,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalLoaiHoatDong / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await LoaiHoatDong.distinct('TenLoaiHoatDong')
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
const getLoaiHoatDongByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaihoatdongList = await LoaiHoatDong.find({
                QuanNhanId: id
            });

            if (!loaihoatdongList || loaihoatdongList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No LoaiHoatDong found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaihoatdongList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createLoaiHoatDong,
    updateLoaiHoatDong,
    getDetailsLoaiHoatDong,
    deleteLoaiHoatDong,
    getAllLoaiHoatDong,
    deleteManyLoaiHoatDong,
    getAllType,
    getLoaiHoatDongByQuanNhanId
}