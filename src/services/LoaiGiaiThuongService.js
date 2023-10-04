const LoaiGiaiThuong = require("../models/LoaiGiaiThuongModel")

const createLoaiGiaiThuong = (newLoaiGiaiThuong) => {
    return new Promise(async (resolve, reject) => {
        const { LoaiGiaiThuongId, TenLoaiGiaiThuong, lock, lockdate, edituser, edittime, GhiChu } = newLoaiGiaiThuong
        try {
            // const checkLoaiGiaiThuong = await LoaiGiaiThuong.findOne({
            //     LoaiGiaiThuongId: LoaiGiaiThuongId
            // })
            // if (checkLoaiGiaiThuong !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'LoaiGiaiThuong is already'
            //     })
            // }
            const newLoaiGiaiThuong = await LoaiGiaiThuong.create({
                LoaiGiaiThuongId, TenLoaiGiaiThuong, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newLoaiGiaiThuong) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newLoaiGiaiThuong
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateLoaiGiaiThuong = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiGiaiThuong = await LoaiGiaiThuong.findOne({
                _id: id
            })
            if (checkLoaiGiaiThuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedLoaiGiaiThuong = await LoaiGiaiThuong.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLoaiGiaiThuong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteLoaiGiaiThuong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiGiaiThuong = await LoaiGiaiThuong.findOne({
                _id: id
            })
            if (checkLoaiGiaiThuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await LoaiGiaiThuong.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyLoaiGiaiThuong = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await LoaiGiaiThuong.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsLoaiGiaiThuong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await LoaiGiaiThuong.findOne({
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

const getAllLoaiGiaiThuong = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalLoaiGiaiThuong = await LoaiGiaiThuong.count()
            let allLoaiGiaiThuong = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await LoaiGiaiThuong.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalLoaiGiaiThuong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiGiaiThuong / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allLoaiGiaiThuongSort = await LoaiGiaiThuong.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allLoaiGiaiThuongSort,
                    total: totalLoaiGiaiThuong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiGiaiThuong / limit)
                })
            }
            if (!limit) {
                allLoaiGiaiThuong = await LoaiGiaiThuong.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allLoaiGiaiThuong = await LoaiGiaiThuong.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLoaiGiaiThuong,
                total: totalLoaiGiaiThuong,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalLoaiGiaiThuong / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await LoaiGiaiThuong.distinct('TenLoaiGiaiThuong')
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
const getLoaiGiaiThuongByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaigiaithuongList = await LoaiGiaiThuong.find({
                QuanNhanId: id
            });

            if (!loaigiaithuongList || loaigiaithuongList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No LoaiGiaiThuong found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaigiaithuongList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createLoaiGiaiThuong,
    updateLoaiGiaiThuong,
    getDetailsLoaiGiaiThuong,
    deleteLoaiGiaiThuong,
    getAllLoaiGiaiThuong,
    deleteManyLoaiGiaiThuong,
    getAllType,
    getLoaiGiaiThuongByQuanNhanId
}