const DinhMucChucDanh = require("../models/DinhMucChucDanhModel")

const createDinhMucChucDanh = (newDinhMucChucDanh) => {
    return new Promise(async (resolve, reject) => {
        const { DinhMucChucDanhId, ChucDanh, DinhMucThoiGian, DinhMucGioChuan, GhiChu, edituser, edittime, lock, lockdate } = newDinhMucChucDanh
        try {
            const checkDinhMucChucDanh = await DinhMucChucDanh.findOne({
                DinhMucChucDanhId: DinhMucChucDanhId
            })
            if (checkDinhMucChucDanh !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDinhMucChucDanh is already'
                })
            }
            const newDinhMucChucDanh = await DinhMucChucDanh.create({
                DinhMucChucDanhId, ChucDanh, DinhMucThoiGian, DinhMucGioChuan, GhiChu, edituser, edittime, lock, lockdate
            })
            if (newDinhMucChucDanh) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDinhMucChucDanh
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDinhMucChucDanh = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDinhMucChucDanh = await DinhMucChucDanh.findOne({
                _id: id
            })
            if (checkDinhMucChucDanh === null) {
                resolve({
                    status: 'ERR',
                    message: 'DinhMucChucDanh is not defined'
                })
            }

            const updatedDinhMucChucDanh = await DinhMucChucDanh.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDinhMucChucDanh
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDinhMucChucDanh = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDinhMucChucDanh = await DinhMucChucDanh.findOne({
                _id: id
            })
            if (checkDinhMucChucDanh === null) {
                resolve({
                    status: 'ERR',
                    message: 'DinhMucChucDanh is not defined'
                })
            }

            await DinhMucChucDanh.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DinhMucChucDanh success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDinhMucChucDanh = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DinhMucChucDanh.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DinhMucChucDanh success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDinhMucChucDanh = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const dinhmucchucdanh = await DinhMucChucDanh.findOne({
                _id: id
            })
            if (dinhmucchucdanh === null) {
                resolve({
                    status: 'ERR',
                    message: 'DinhMucChucDanh is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: dinhmucchucdanh
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDinhMucChucDanh = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDinhMucChucDanh = await DinhMucChucDanh.count()
            let allDinhMucChucDanh = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DinhMucChucDanh.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDinhMucChucDanh,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDinhMucChucDanh / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDinhMucChucDanhSort = await DinhMucChucDanh.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDinhMucChucDanhSort,
                    total: totalDinhMucChucDanh,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDinhMucChucDanh / limit)
                })
            }
            if (!limit) {
                allDinhMucChucDanh = await DinhMucChucDanh.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDinhMucChucDanh = await DinhMucChucDanh.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDinhMucChucDanh,
                total: totalDinhMucChucDanh,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDinhMucChucDanh / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DinhMucChucDanh.distinct('GhiChu')
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
    createDinhMucChucDanh,
    updateDinhMucChucDanh,
    getDetailsDinhMucChucDanh,
    deleteDinhMucChucDanh,
    getAllDinhMucChucDanh,
    deleteManyDinhMucChucDanh,
    getAllType
}