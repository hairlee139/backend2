const DanhMucKyLuat = require("../models/DanhMucHinhThucKyLuatModel")

const createDanhMucKyLuat = (newDanhMucKyLuat) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucKyLuatId, TenDanhMucKyLuat, HienThi, GhiChu } = newDanhMucKyLuat
        try {
            const checkDanhMucKyLuat = await DanhMucKyLuat.findOne({
                TenDanhMucKyLuat: TenDanhMucKyLuat
            })
            if (checkDanhMucKyLuat !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucKyLuat is already'
                })
            }
            const newDanhMucKyLuat = await DanhMucKyLuat.create({
                DanhMucKyLuatId,
                TenDanhMucKyLuat,
                HienThi,
                GhiChu
            })
            if (newDanhMucKyLuat) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucKyLuat
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucKyLuat = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucKyLuat = await DanhMucKyLuat.findOne({
                _id: id
            })
            if (checkDanhMucKyLuat === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucKyLuat is not defined'
                })
            }

            const updatedDanhMucKyLuat = await DanhMucKyLuat.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucKyLuat
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucKyLuat = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucKyLuat = await DanhMucKyLuat.findOne({
                _id: id
            })
            if (checkDanhMucKyLuat === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucKyLuat is not defined'
                })
            }

            await DanhMucKyLuat.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucKyLuat success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucKyLuat = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucKyLuat.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucKyLuat success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucKyLuat = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmuccapbac = await DanhMucKyLuat.findOne({
                _id: id
            })
            if (danhmuccapbac === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucKyLuat is not defined'
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

const getAllDanhMucKyLuat = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucKyLuat = await DanhMucKyLuat.count()
            let allDanhMucKyLuat = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucKyLuat.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucKyLuat,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucKyLuat / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucKyLuatSort = await DanhMucKyLuat.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucKyLuatSort,
                    total: totalDanhMucKyLuat,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucKyLuat / limit)
                })
            }
            if (!limit) {
                allDanhMucKyLuat = await DanhMucKyLuat.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucKyLuat = await DanhMucKyLuat.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucKyLuat,
                total: totalDanhMucKyLuat,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucKyLuat / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucKyLuat.distinct('GhiChu')
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
    createDanhMucKyLuat,
    updateDanhMucKyLuat,
    getDetailsDanhMucKyLuat,
    deleteDanhMucKyLuat,
    getAllDanhMucKyLuat,
    deleteManyDanhMucKyLuat,
    getAllType
}