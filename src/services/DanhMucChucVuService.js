const DanhMucChucVu = require("../models/DanhMucChucVuModel")

const createDanhMucChucVu = (newDanhMucChucVu) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucChucVuId, TenDanhMucChucVu, HienThi, GhiChu } = newDanhMucChucVu
        try {
            const checkDanhMucChucVu = await DanhMucChucVu.findOne({
                TenDanhMucChucVu: TenDanhMucChucVu
            })
            if (checkDanhMucChucVu !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucChucVu is already'
                })
            }
            const newDanhMucChucVu = await DanhMucChucVu.create({
                DanhMucChucVuId,
                TenDanhMucChucVu,
                HienThi,
                GhiChu
            })
            if (newDanhMucChucVu) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucChucVu
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucChucVu = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucChucVu = await DanhMucChucVu.findOne({
                _id: id
            })
            if (checkDanhMucChucVu === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucChucVu is not defined'
                })
            }

            const updatedDanhMucChucVu = await DanhMucChucVu.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucChucVu
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucChucVu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucChucVu = await DanhMucChucVu.findOne({
                _id: id
            })
            if (checkDanhMucChucVu === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucChucVu is not defined'
                })
            }

            await DanhMucChucVu.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucChucVu success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucChucVu = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucChucVu.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucChucVu success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucChucVu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmucchucvu = await DanhMucChucVu.findOne({
                _id: id
            })
            if (danhmucchucvu === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucChucVu is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: danhmucchucvu
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDanhMucChucVu = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucChucVu = await DanhMucChucVu.count()
            let allDanhMucChucVu = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucChucVu.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucChucVu,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucChucVu / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucChucVuSort = await DanhMucChucVu.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucChucVuSort,
                    total: totalDanhMucChucVu,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucChucVu / limit)
                })
            }
            if (!limit) {
                allDanhMucChucVu = await DanhMucChucVu.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucChucVu = await DanhMucChucVu.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucChucVu,
                total: totalDanhMucChucVu,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucChucVu / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucChucVu.distinct('TenDanhMucChucVu')
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
    createDanhMucChucVu,
    updateDanhMucChucVu,
    getDetailsDanhMucChucVu,
    deleteDanhMucChucVu,
    getAllDanhMucChucVu,
    deleteManyDanhMucChucVu,
    getAllType
}