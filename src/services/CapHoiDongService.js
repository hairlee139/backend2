const CapHoiDong = require("../models/CapHoiDongModel")

const createCapHoiDong = (newCapHoiDong) => {
    return new Promise(async (resolve, reject) => {
        const { CapHoiDongId, TenCapHoiDong, TenLoaiHoiDong, GhiChu } = newCapHoiDong
        try {
            // const checkCapHoiDong = await CapHoiDong.findOne({
            //     CapHoiDongId: CapHoiDongId
            // })
            // if (checkCapHoiDong !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'CapHoiDong is already'
            //     })
            // }
            const newCapHoiDong = await CapHoiDong.create({
                CapHoiDongId, TenCapHoiDong, TenLoaiHoiDong, GhiChu
            })
            if (newCapHoiDong) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newCapHoiDong
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateCapHoiDong = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkCapHoiDong = await CapHoiDong.findOne({
                _id: id
            })
            if (checkCapHoiDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedCapHoiDong = await CapHoiDong.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedCapHoiDong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteCapHoiDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkCapHoiDong = await CapHoiDong.findOne({
                _id: id
            })
            if (checkCapHoiDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await CapHoiDong.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyCapHoiDong = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await CapHoiDong.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsCapHoiDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await CapHoiDong.findOne({
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

const getAllCapHoiDong = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalCapHoiDong = await CapHoiDong.count()
            let allCapHoiDong = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await CapHoiDong.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalCapHoiDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalCapHoiDong / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allCapHoiDongSort = await CapHoiDong.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allCapHoiDongSort,
                    total: totalCapHoiDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalCapHoiDong / limit)
                })
            }
            if (!limit) {
                allCapHoiDong = await CapHoiDong.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allCapHoiDong = await CapHoiDong.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allCapHoiDong,
                total: totalCapHoiDong,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalCapHoiDong / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await CapHoiDong.distinct('TenCapHoiDong')
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



const getAllTypeByLoaiHoiDong = (value) => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await CapHoiDong.distinct('TenLoaiHoiDong')
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

const getCapHoiDongByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const caphoidongList = await CapHoiDong.find({
                QuanNhanId: id
            });

            if (!caphoidongList || caphoidongList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No CapHoiDong found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: caphoidongList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createCapHoiDong,
    updateCapHoiDong,
    getDetailsCapHoiDong,
    deleteCapHoiDong,
    getAllCapHoiDong,
    deleteManyCapHoiDong,
    getAllType,
    getAllTypeByLoaiHoiDong,
    getCapHoiDongByQuanNhanId
}