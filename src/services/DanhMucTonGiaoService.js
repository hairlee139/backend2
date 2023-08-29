const DanhMucTonGiao = require("../models/DanhMucTonGiaoModel")

const createDanhMucTonGiao = (newDanhMucTonGiao) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucTonGiaoId, TenDanhMucTonGiao, HienThi, GhiChu } = newDanhMucTonGiao
        try {
            const checkDanhMucTonGiao = await DanhMucTonGiao.findOne({
                TenDanhMucTonGiao: TenDanhMucTonGiao
            })
            if (checkDanhMucTonGiao !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucTonGiao is already'
                })
            }
            const newDanhMucTonGiao = await DanhMucTonGiao.create({
                DanhMucTonGiaoId,
                TenDanhMucTonGiao,
                HienThi,
                GhiChu
            })
            if (newDanhMucTonGiao) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucTonGiao
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucTonGiao = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucTonGiao = await DanhMucTonGiao.findOne({
                _id: id
            })
            if (checkDanhMucTonGiao === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucTonGiao is not defined'
                })
            }

            const updatedDanhMucTonGiao = await DanhMucTonGiao.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucTonGiao
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucTonGiao = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucTonGiao = await DanhMucTonGiao.findOne({
                _id: id
            })
            if (checkDanhMucTonGiao === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucTonGiao is not defined'
                })
            }

            await DanhMucTonGiao.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucTonGiao success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucTonGiao = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucTonGiao.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucTonGiao success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucTonGiao = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmuctongiao = await DanhMucTonGiao.findOne({
                _id: id
            })
            if (danhmuctongiao === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucTonGiao is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: danhmuctongiao
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDanhMucTonGiao = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucTonGiao = await DanhMucTonGiao.count()
            let allDanhMucTonGiao = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucTonGiao.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucTonGiao,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucTonGiao / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucTonGiaoSort = await DanhMucTonGiao.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucTonGiaoSort,
                    total: totalDanhMucTonGiao,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucTonGiao / limit)
                })
            }
            if (!limit) {
                allDanhMucTonGiao = await DanhMucTonGiao.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucTonGiao = await DanhMucTonGiao.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucTonGiao,
                total: totalDanhMucTonGiao,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucTonGiao / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucTonGiao.distinct('GhiChu')
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
    createDanhMucTonGiao,
    updateDanhMucTonGiao,
    getDetailsDanhMucTonGiao,
    deleteDanhMucTonGiao,
    getAllDanhMucTonGiao,
    deleteManyDanhMucTonGiao,
    getAllType
}