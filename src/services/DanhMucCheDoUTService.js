const DanhMucCheDoUT = require("../models/DanhMucCheDoUTModel")

const createDanhMucCheDoUT = (newDanhMucCheDoUT) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucCheDoUTId, TenDanhMucCheDoUT, HienThi, GhiChu } = newDanhMucCheDoUT
        try {
            const checkDanhMucCheDoUT = await DanhMucCheDoUT.findOne({
                TenDanhMucCheDoUT: TenDanhMucCheDoUT
            })
            if (checkDanhMucCheDoUT !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucCheDoUT is already'
                })
            }
            const newDanhMucCheDoUT = await DanhMucCheDoUT.create({
                DanhMucCheDoUTId,
                TenDanhMucCheDoUT,
                HienThi,
                GhiChu
            })
            if (newDanhMucCheDoUT) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucCheDoUT
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucCheDoUT = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucCheDoUT = await DanhMucCheDoUT.findOne({
                _id: id
            })
            if (checkDanhMucCheDoUT === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucCheDoUT is not defined'
                })
            }

            const updatedDanhMucCheDoUT = await DanhMucCheDoUT.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucCheDoUT
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucCheDoUT = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucCheDoUT = await DanhMucCheDoUT.findOne({
                _id: id
            })
            if (checkDanhMucCheDoUT === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucCheDoUT is not defined'
                })
            }

            await DanhMucCheDoUT.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucCheDoUT success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucCheDoUT = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucCheDoUT.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucCheDoUT success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucCheDoUT = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmucchedout = await DanhMucCheDoUT.findOne({
                _id: id
            })
            if (danhmucchedout === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucCheDoUT is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: danhmucchedout
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDanhMucCheDoUT = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucCheDoUT = await DanhMucCheDoUT.count()
            let allDanhMucCheDoUT = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucCheDoUT.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucCheDoUT,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucCheDoUT / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucCheDoUTSort = await DanhMucCheDoUT.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucCheDoUTSort,
                    total: totalDanhMucCheDoUT,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucCheDoUT / limit)
                })
            }
            if (!limit) {
                allDanhMucCheDoUT = await DanhMucCheDoUT.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucCheDoUT = await DanhMucCheDoUT.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucCheDoUT,
                total: totalDanhMucCheDoUT,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucCheDoUT / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucCheDoUT.distinct('GhiChu')
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
    createDanhMucCheDoUT,
    updateDanhMucCheDoUT,
    getDetailsDanhMucCheDoUT,
    deleteDanhMucCheDoUT,
    getAllDanhMucCheDoUT,
    deleteManyDanhMucCheDoUT,
    getAllType
}