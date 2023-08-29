const DanhMucDanToc = require("../models/DanhMucDanTocModel")

const createDanhMucDanToc = (newDanhMucDanToc) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucDanTocId, TenDanhMucDanToc, HienThi, GhiChu } = newDanhMucDanToc
        try {
            const checkDanhMucDanToc = await DanhMucDanToc.findOne({
                TenDanhMucDanToc: TenDanhMucDanToc
            })
            if (checkDanhMucDanToc !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucDanToc is already'
                })
            }
            const newDanhMucDanToc = await DanhMucDanToc.create({
                DanhMucDanTocId,
                TenDanhMucDanToc,
                HienThi,
                GhiChu
            })
            if (newDanhMucDanToc) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucDanToc
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucDanToc = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucDanToc = await DanhMucDanToc.findOne({
                _id: id
            })
            if (checkDanhMucDanToc === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucDanToc is not defined'
                })
            }

            const updatedDanhMucDanToc = await DanhMucDanToc.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucDanToc
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucDanToc = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucDanToc = await DanhMucDanToc.findOne({
                _id: id
            })
            if (checkDanhMucDanToc === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucDanToc is not defined'
                })
            }

            await DanhMucDanToc.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucDanToc success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucDanToc = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucDanToc.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucDanToc success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucDanToc = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmucdantoc = await DanhMucDanToc.findOne({
                _id: id
            })
            if (danhmucdantoc === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucDanToc is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: danhmucdantoc
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDanhMucDanToc = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucDanToc = await DanhMucDanToc.count()
            let allDanhMucDanToc = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucDanToc.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucDanToc,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucDanToc / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucDanTocSort = await DanhMucDanToc.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucDanTocSort,
                    total: totalDanhMucDanToc,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucDanToc / limit)
                })
            }
            if (!limit) {
                allDanhMucDanToc = await DanhMucDanToc.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucDanToc = await DanhMucDanToc.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucDanToc,
                total: totalDanhMucDanToc,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucDanToc / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucDanToc.distinct('GhiChu')
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
    createDanhMucDanToc,
    updateDanhMucDanToc,
    getDetailsDanhMucDanToc,
    deleteDanhMucDanToc,
    getAllDanhMucDanToc,
    deleteManyDanhMucDanToc,
    getAllType
}