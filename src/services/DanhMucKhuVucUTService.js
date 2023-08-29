const DanhMucKhuVucUT = require("../models/DanhMucKhuVucUTModel")

const createDanhMucKhuVucUT = (newDanhMucKhuVucUT) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucKhuVucUTId, TenDanhMucKhuVucUT, HienThi, GhiChu } = newDanhMucKhuVucUT
        try {
            const checkDanhMucKhuVucUT = await DanhMucKhuVucUT.findOne({
                TenDanhMucKhuVucUT: TenDanhMucKhuVucUT
            })
            if (checkDanhMucKhuVucUT !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucKhuVucUT is already'
                })
            }
            const newDanhMucKhuVucUT = await DanhMucKhuVucUT.create({
                DanhMucKhuVucUTId,
                TenDanhMucKhuVucUT,
                HienThi,
                GhiChu
            })
            if (newDanhMucKhuVucUT) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucKhuVucUT
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucKhuVucUT = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucKhuVucUT = await DanhMucKhuVucUT.findOne({
                _id: id
            })
            if (checkDanhMucKhuVucUT === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucKhuVucUT is not defined'
                })
            }

            const updatedDanhMucKhuVucUT = await DanhMucKhuVucUT.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucKhuVucUT
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucKhuVucUT = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucKhuVucUT = await DanhMucKhuVucUT.findOne({
                _id: id
            })
            if (checkDanhMucKhuVucUT === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucKhuVucUT is not defined'
                })
            }

            await DanhMucKhuVucUT.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucKhuVucUT success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucKhuVucUT = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucKhuVucUT.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucKhuVucUT success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucKhuVucUT = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmuckhuvucut = await DanhMucKhuVucUT.findOne({
                _id: id
            })
            if (danhmuckhuvucut === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucKhuVucUT is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: danhmuckhuvucut
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDanhMucKhuVucUT = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucKhuVucUT = await DanhMucKhuVucUT.count()
            let allDanhMucKhuVucUT = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucKhuVucUT.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucKhuVucUT,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucKhuVucUT / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucKhuVucUTSort = await DanhMucKhuVucUT.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucKhuVucUTSort,
                    total: totalDanhMucKhuVucUT,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucKhuVucUT / limit)
                })
            }
            if (!limit) {
                allDanhMucKhuVucUT = await DanhMucKhuVucUT.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucKhuVucUT = await DanhMucKhuVucUT.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucKhuVucUT,
                total: totalDanhMucKhuVucUT,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucKhuVucUT / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucKhuVucUT.distinct('GhiChu')
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
    createDanhMucKhuVucUT,
    updateDanhMucKhuVucUT,
    getDetailsDanhMucKhuVucUT,
    deleteDanhMucKhuVucUT,
    getAllDanhMucKhuVucUT,
    deleteManyDanhMucKhuVucUT,
    getAllType
}