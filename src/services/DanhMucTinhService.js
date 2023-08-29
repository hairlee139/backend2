const DanhMucTinh = require("../models/DanhMucTinhModel")

const createDanhMucTinh = (newDanhMucTinh) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucTinhId, TenDanhMucTinh, HienThi, GhiChu } = newDanhMucTinh
        try {
            const checkDanhMucTinh = await DanhMucTinh.findOne({
                TenDanhMucTinh: TenDanhMucTinh
            })
            if (checkDanhMucTinh !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucTinh is already'
                })
            }
            const newDanhMucTinh = await DanhMucTinh.create({
                DanhMucTinhId,
                TenDanhMucTinh,
                HienThi,
                GhiChu
            })
            if (newDanhMucTinh) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucTinh
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucTinh = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucTinh = await DanhMucTinh.findOne({
                _id: id
            })
            if (checkDanhMucTinh === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucTinh is not defined'
                })
            }

            const updatedDanhMucTinh = await DanhMucTinh.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucTinh
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucTinh = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucTinh = await DanhMucTinh.findOne({
                _id: id
            })
            if (checkDanhMucTinh === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucTinh is not defined'
                })
            }

            await DanhMucTinh.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucTinh success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucTinh = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucTinh.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucTinh success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucTinh = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmuctinh = await DanhMucTinh.findOne({
                _id: id
            })
            if (danhmuctinh === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucTinh is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: danhmuctinh
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDanhMucTinh = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucTinh = await DanhMucTinh.count()
            let allDanhMucTinh = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucTinh.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucTinh,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucTinh / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucTinhSort = await DanhMucTinh.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucTinhSort,
                    total: totalDanhMucTinh,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucTinh / limit)
                })
            }
            if (!limit) {
                allDanhMucTinh = await DanhMucTinh.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucTinh = await DanhMucTinh.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucTinh,
                total: totalDanhMucTinh,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucTinh / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucTinh.distinct('GhiChu')
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
    createDanhMucTinh,
    updateDanhMucTinh,
    getDetailsDanhMucTinh,
    deleteDanhMucTinh,
    getAllDanhMucTinh,
    deleteManyDanhMucTinh,
    getAllType
}