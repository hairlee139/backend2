const LoaiHoiDong = require("../models/LoaiHoiDongModel")

const createLoaiHoiDong = (newLoaiHoiDong) => {
    return new Promise(async (resolve, reject) => {
        const { LoaiHoiDongId, TenLoaiHoiDong, GhiChu } = newLoaiHoiDong
        try {
            // const checkLoaiHoiDong = await LoaiHoiDong.findOne({
            //     LoaiHoiDongId: LoaiHoiDongId
            // })
            // if (checkLoaiHoiDong !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'LoaiHoiDong is already'
            //     })
            // }
            const newLoaiHoiDong = await LoaiHoiDong.create({
                LoaiHoiDongId, TenLoaiHoiDong, GhiChu
            })
            if (newLoaiHoiDong) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newLoaiHoiDong
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateLoaiHoiDong = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiHoiDong = await LoaiHoiDong.findOne({
                _id: id
            })
            if (checkLoaiHoiDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedLoaiHoiDong = await LoaiHoiDong.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLoaiHoiDong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteLoaiHoiDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiHoiDong = await LoaiHoiDong.findOne({
                _id: id
            })
            if (checkLoaiHoiDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await LoaiHoiDong.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyLoaiHoiDong = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await LoaiHoiDong.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsLoaiHoiDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await LoaiHoiDong.findOne({
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

const getAllLoaiHoiDong = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalLoaiHoiDong = await LoaiHoiDong.count()
            let allLoaiHoiDong = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await LoaiHoiDong.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalLoaiHoiDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiHoiDong / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allLoaiHoiDongSort = await LoaiHoiDong.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allLoaiHoiDongSort,
                    total: totalLoaiHoiDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiHoiDong / limit)
                })
            }
            if (!limit) {
                allLoaiHoiDong = await LoaiHoiDong.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allLoaiHoiDong = await LoaiHoiDong.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLoaiHoiDong,
                total: totalLoaiHoiDong,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalLoaiHoiDong / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await LoaiHoiDong.distinct('TenLoaiHoiDong')
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
const getLoaiHoiDongByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaihoidongList = await LoaiHoiDong.find({
                QuanNhanId: id
            });

            if (!loaihoidongList || loaihoidongList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No LoaiHoiDong found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaihoidongList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createLoaiHoiDong,
    updateLoaiHoiDong,
    getDetailsLoaiHoiDong,
    deleteLoaiHoiDong,
    getAllLoaiHoiDong,
    deleteManyLoaiHoiDong,
    getAllType,
    getLoaiHoiDongByQuanNhanId
}