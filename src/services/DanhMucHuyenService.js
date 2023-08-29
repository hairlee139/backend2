const DanhMucHuyen = require("../models/DanhMucHuyenModel")

const createDanhMucHuyen = (newDanhMucHuyen) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucHuyenId, TenDanhMucHuyen, TenDanhMucTinh, HienThi, GhiChu } = newDanhMucHuyen
        try {
            const checkDanhMucHuyen = await DanhMucHuyen.findOne({
                TenDanhMucHuyen: TenDanhMucHuyen
            })
            if (checkDanhMucHuyen !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucHuyen is already'
                })
            }
            const newDanhMucHuyen = await DanhMucHuyen.create({
                DanhMucHuyenId,
                TenDanhMucHuyen,
                TenDanhMucTinh,
                HienThi,
                GhiChu
            })
            if (newDanhMucHuyen) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucHuyen
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucHuyen = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucHuyen = await DanhMucHuyen.findOne({
                _id: id
            })
            if (checkDanhMucHuyen === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucHuyen is not defined'
                })
            }

            const updatedDanhMucHuyen = await DanhMucHuyen.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucHuyen
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucHuyen = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucHuyen = await DanhMucHuyen.findOne({
                _id: id
            })
            if (checkDanhMucHuyen === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucHuyen is not defined'
                })
            }

            await DanhMucHuyen.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucHuyen success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucHuyen = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucHuyen.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucHuyen success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucHuyen = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmuchuyen = await DanhMucHuyen.findOne({
                _id: id
            })
            if (danhmuchuyen === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucHuyen is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: danhmuchuyen
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDanhMucHuyen = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucHuyen = await DanhMucHuyen.count()
            let allDanhMucHuyen = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucHuyen.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucHuyen,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucHuyen / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucHuyenSort = await DanhMucHuyen.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucHuyenSort,
                    total: totalDanhMucHuyen,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucHuyen / limit)
                })
            }
            if (!limit) {
                allDanhMucHuyen = await DanhMucHuyen.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucHuyen = await DanhMucHuyen.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucHuyen,
                total: totalDanhMucHuyen,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucHuyen / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucHuyen.distinct('TenDanhMucTinh')
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
    createDanhMucHuyen,
    updateDanhMucHuyen,
    getDetailsDanhMucHuyen,
    deleteDanhMucHuyen,
    getAllDanhMucHuyen,
    deleteManyDanhMucHuyen,
    getAllType
}