const DinhMucCMKT = require("../models/DinhMucCMKTModel")

const createDinhMucCMKT = (newDinhMucCMKT) => {
    return new Promise(async (resolve, reject) => {
        const { DinhMucCMKTId, ChucDanh, QuyDinhChung, GiaoDucTheChat, GhiChu, edituser, edittime, lock, lockdate } = newDinhMucCMKT
        try {
            const checkDinhMucCMKT = await DinhMucCMKT.findOne({
                DinhMucCMKTId: DinhMucCMKTId
            })
            if (checkDinhMucCMKT !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDinhMucCMKT is already'
                })
            }
            const newDinhMucCMKT = await DinhMucCMKT.create({
                DinhMucCMKTId, ChucDanh, QuyDinhChung, GiaoDucTheChat, GhiChu, edituser, edittime, lock, lockdate
            })
            if (newDinhMucCMKT) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDinhMucCMKT
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDinhMucCMKT = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDinhMucCMKT = await DinhMucCMKT.findOne({
                _id: id
            })
            if (checkDinhMucCMKT === null) {
                resolve({
                    status: 'ERR',
                    message: 'DinhMucCMKT is not defined'
                })
            }

            const updatedDinhMucCMKT = await DinhMucCMKT.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDinhMucCMKT
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDinhMucCMKT = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDinhMucCMKT = await DinhMucCMKT.findOne({
                _id: id
            })
            if (checkDinhMucCMKT === null) {
                resolve({
                    status: 'ERR',
                    message: 'DinhMucCMKT is not defined'
                })
            }

            await DinhMucCMKT.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DinhMucCMKT success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDinhMucCMKT = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DinhMucCMKT.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DinhMucCMKT success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDinhMucCMKT = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const dinhmuccmkt = await DinhMucCMKT.findOne({
                _id: id
            })
            if (dinhmuccmkt === null) {
                resolve({
                    status: 'ERR',
                    message: 'DinhMucCMKT is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: dinhmuccmkt
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDinhMucCMKT = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDinhMucCMKT = await DinhMucCMKT.count()
            let allDinhMucCMKT = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DinhMucCMKT.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDinhMucCMKT,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDinhMucCMKT / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDinhMucCMKTSort = await DinhMucCMKT.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDinhMucCMKTSort,
                    total: totalDinhMucCMKT,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDinhMucCMKT / limit)
                })
            }
            if (!limit) {
                allDinhMucCMKT = await DinhMucCMKT.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDinhMucCMKT = await DinhMucCMKT.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDinhMucCMKT,
                total: totalDinhMucCMKT,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDinhMucCMKT / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DinhMucCMKT.distinct('ChucDanh')
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

module.exports = {
    createDinhMucCMKT,
    updateDinhMucCMKT,
    getDetailsDinhMucCMKT,
    deleteDinhMucCMKT,
    getAllDinhMucCMKT,
    deleteManyDinhMucCMKT,
    getAllType
}