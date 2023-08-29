const DanhMucXa = require("../models/DanhMucXaModel")

const createDanhMucXa = (newDanhMucXa) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucXaId, TenDanhMucXa, TenDanhMucHuyen, TenDanhMucTinh, HienThi, GhiChu } = newDanhMucXa
        try {
            const checkDanhMucXa = await DanhMucXa.findOne({
                TenDanhMucXa: TenDanhMucXa
            })
            if (checkDanhMucXa !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucXa is already'
                })
            }
            const newDanhMucXa = await DanhMucXa.create({
                DanhMucXaId,
                TenDanhMucXa,
                TenDanhMucHuyen,
                TenDanhMucTinh,
                HienThi,
                GhiChu
            })
            if (newDanhMucXa) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucXa
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucXa = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucXa = await DanhMucXa.findOne({
                _id: id
            })
            if (checkDanhMucXa === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucXa is not defined'
                })
            }

            const updatedDanhMucXa = await DanhMucXa.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucXa
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucXa = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucXa = await DanhMucXa.findOne({
                _id: id
            })
            if (checkDanhMucXa === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucXa is not defined'
                })
            }

            await DanhMucXa.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucXa success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucXa = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucXa.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucXa success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucXa = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmucxa = await DanhMucXa.findOne({
                _id: id
            })
            if (danhmucxa === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucXa is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: danhmucxa
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDanhMucXa = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucXa = await DanhMucXa.count()
            let allDanhMucXa = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucXa.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucXa,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucXa / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucXaSort = await DanhMucXa.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucXaSort,
                    total: totalDanhMucXa,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucXa / limit)
                })
            }
            if (!limit) {
                allDanhMucXa = await DanhMucXa.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucXa = await DanhMucXa.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucXa,
                total: totalDanhMucXa,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucXa / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllTypeHuyen = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucXa.distinct('TenDanhMucHuyen')
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

const getAllTypeTinh = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucXa.distinct('TenDanhMucTinh')
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
    createDanhMucXa,
    updateDanhMucXa,
    getDetailsDanhMucXa,
    deleteDanhMucXa,
    getAllDanhMucXa,
    deleteManyDanhMucXa,
    getAllTypeHuyen,
    getAllTypeTinh
}