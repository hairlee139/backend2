const DanhMucLoaiDonVi = require("../models/DanhMucLoaiDonViModel")

const createDanhMucLoaiDonVi = (newDanhMucLoaiDonVi) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucLoaiDonViId, TenDanhMucLoaiDonVi, HienThi, GhiChu } = newDanhMucLoaiDonVi
        try {
            const checkDanhMucLoaiDonVi = await DanhMucLoaiDonVi.findOne({
                TenDanhMucLoaiDonVi: TenDanhMucLoaiDonVi
            })
            if (checkDanhMucLoaiDonVi !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucLoaiDonVi is already'
                })
            }
            const newDanhMucLoaiDonVi = await DanhMucLoaiDonVi.create({
                DanhMucLoaiDonViId,
                TenDanhMucLoaiDonVi,
                HienThi,
                GhiChu
            })
            if (newDanhMucLoaiDonVi) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucLoaiDonVi
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucLoaiDonVi = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucLoaiDonVi = await DanhMucLoaiDonVi.findOne({
                _id: id
            })
            if (checkDanhMucLoaiDonVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucLoaiDonVi is not defined'
                })
            }

            const updatedDanhMucLoaiDonVi = await DanhMucLoaiDonVi.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucLoaiDonVi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucLoaiDonVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucLoaiDonVi = await DanhMucLoaiDonVi.findOne({
                _id: id
            })
            if (checkDanhMucLoaiDonVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucLoaiDonVi is not defined'
                })
            }

            await DanhMucLoaiDonVi.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucLoaiDonVi success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucLoaiDonVi = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucLoaiDonVi.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucLoaiDonVi success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucLoaiDonVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmuccapbac = await DanhMucLoaiDonVi.findOne({
                _id: id
            })
            if (danhmuccapbac === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucLoaiDonVi is not defined'
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

const getAllDanhMucLoaiDonVi = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucLoaiDonVi = await DanhMucLoaiDonVi.count()
            let allDanhMucLoaiDonVi = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucLoaiDonVi.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucLoaiDonVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucLoaiDonVi / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucLoaiDonViSort = await DanhMucLoaiDonVi.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucLoaiDonViSort,
                    total: totalDanhMucLoaiDonVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucLoaiDonVi / limit)
                })
            }
            if (!limit) {
                allDanhMucLoaiDonVi = await DanhMucLoaiDonVi.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucLoaiDonVi = await DanhMucLoaiDonVi.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucLoaiDonVi,
                total: totalDanhMucLoaiDonVi,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucLoaiDonVi / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucLoaiDonVi.distinct('GhiChu')
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
    createDanhMucLoaiDonVi,
    updateDanhMucLoaiDonVi,
    getDetailsDanhMucLoaiDonVi,
    deleteDanhMucLoaiDonVi,
    getAllDanhMucLoaiDonVi,
    deleteManyDanhMucLoaiDonVi,
    getAllType
}