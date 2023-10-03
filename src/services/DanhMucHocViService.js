const DanhMucHocVi = require("../models/DanhMucHocViModel")

const createDanhMucHocVi = (newDanhMucHocVi) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucHocViId, TenDanhMucHocVi, HienThi, GhiChu } = newDanhMucHocVi
        try {
            const checkDanhMucHocVi = await DanhMucHocVi.findOne({
                TenDanhMucHocVi: TenDanhMucHocVi
            })
            if (checkDanhMucHocVi !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucHocVi is already'
                })
            }
            const newDanhMucHocVi = await DanhMucHocVi.create({
                DanhMucHocViId,
                TenDanhMucHocVi,
                HienThi,
                GhiChu
            })
            if (newDanhMucHocVi) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucHocVi
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucHocVi = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucHocVi = await DanhMucHocVi.findOne({
                _id: id
            })
            if (checkDanhMucHocVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucHocVi is not defined'
                })
            }

            const updatedDanhMucHocVi = await DanhMucHocVi.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucHocVi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucHocVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucHocVi = await DanhMucHocVi.findOne({
                _id: id
            })
            if (checkDanhMucHocVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucHocVi is not defined'
                })
            }

            await DanhMucHocVi.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucHocVi success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucHocVi = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucHocVi.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucHocVi success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucHocVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmuccapbac = await DanhMucHocVi.findOne({
                _id: id
            })
            if (danhmuccapbac === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucHocVi is not defined'
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

const getAllDanhMucHocVi = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucHocVi = await DanhMucHocVi.count()
            let allDanhMucHocVi = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucHocVi.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucHocVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucHocVi / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucHocViSort = await DanhMucHocVi.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucHocViSort,
                    total: totalDanhMucHocVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucHocVi / limit)
                })
            }
            if (!limit) {
                allDanhMucHocVi = await DanhMucHocVi.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucHocVi = await DanhMucHocVi.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucHocVi,
                total: totalDanhMucHocVi,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucHocVi / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucHocVi.distinct('TenDanhMucHocVi')
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
    createDanhMucHocVi,
    updateDanhMucHocVi,
    getDetailsDanhMucHocVi,
    deleteDanhMucHocVi,
    getAllDanhMucHocVi,
    deleteManyDanhMucHocVi,
    getAllType
}