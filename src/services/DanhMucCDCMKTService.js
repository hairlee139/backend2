const DanhMucCDCMKT = require("../models/DanhMucCDCMKTModel")

const createDanhMucCDCMKT = (newDanhMucCDCMKT) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucCDCMKTId, TenDanhMucCDCMKT, HienThi, GhiChu } = newDanhMucCDCMKT
        try {
            const checkDanhMucCDCMKT = await DanhMucCDCMKT.findOne({
                TenDanhMucCDCMKT: TenDanhMucCDCMKT
            })
            if (checkDanhMucCDCMKT !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucCDCMKT is already'
                })
            }
            const newDanhMucCDCMKT = await DanhMucCDCMKT.create({
                DanhMucCDCMKTId,
                TenDanhMucCDCMKT,
                HienThi,
                GhiChu
            })
            if (newDanhMucCDCMKT) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucCDCMKT
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucCDCMKT = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucCDCMKT = await DanhMucCDCMKT.findOne({
                _id: id
            })
            if (checkDanhMucCDCMKT === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucCDCMKT is not defined'
                })
            }

            const updatedDanhMucCDCMKT = await DanhMucCDCMKT.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucCDCMKT
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucCDCMKT = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucCDCMKT = await DanhMucCDCMKT.findOne({
                _id: id
            })
            if (checkDanhMucCDCMKT === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucCDCMKT is not defined'
                })
            }

            await DanhMucCDCMKT.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucCDCMKT success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucCDCMKT = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucCDCMKT.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucCDCMKT success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucCDCMKT = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmuccapbac = await DanhMucCDCMKT.findOne({
                _id: id
            })
            if (danhmuccapbac === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucCDCMKT is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: danhmuccapbac
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDanhMucCDCMKT = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucCDCMKT = await DanhMucCDCMKT.count()
            let allDanhMucCDCMKT = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucCDCMKT.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucCDCMKT,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucCDCMKT / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucCDCMKTSort = await DanhMucCDCMKT.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucCDCMKTSort,
                    total: totalDanhMucCDCMKT,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucCDCMKT / limit)
                })
            }
            if (!limit) {
                allDanhMucCDCMKT = await DanhMucCDCMKT.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucCDCMKT = await DanhMucCDCMKT.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucCDCMKT,
                total: totalDanhMucCDCMKT,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucCDCMKT / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucCDCMKT.distinct('GhiChu')
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
    createDanhMucCDCMKT,
    updateDanhMucCDCMKT,
    getDetailsDanhMucCDCMKT,
    deleteDanhMucCDCMKT,
    getAllDanhMucCDCMKT,
    deleteManyDanhMucCDCMKT,
    getAllType
}