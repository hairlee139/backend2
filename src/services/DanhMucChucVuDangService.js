const DanhMucChucVuDang = require("../models/DanhMucChucVuDangModel")

const createDanhMucChucVuDang = (newDanhMucChucVuDang) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucChucVuDangId, TenDanhMucChucVuDang, HienThi, GhiChu } = newDanhMucChucVuDang
        try {
            const checkDanhMucChucVuDang = await DanhMucChucVuDang.findOne({
                TenDanhMucChucVuDang: TenDanhMucChucVuDang
            })
            if (checkDanhMucChucVuDang !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucChucVuDang is already'
                })
            }
            const newDanhMucChucVuDang = await DanhMucChucVuDang.create({
                DanhMucChucVuDangId,
                TenDanhMucChucVuDang,
                HienThi,
                GhiChu
            })
            if (newDanhMucChucVuDang) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucChucVuDang
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucChucVuDang = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucChucVuDang = await DanhMucChucVuDang.findOne({
                _id: id
            })
            if (checkDanhMucChucVuDang === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucChucVuDang is not defined'
                })
            }

            const updatedDanhMucChucVuDang = await DanhMucChucVuDang.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucChucVuDang
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucChucVuDang = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucChucVuDang = await DanhMucChucVuDang.findOne({
                _id: id
            })
            if (checkDanhMucChucVuDang === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucChucVuDang is not defined'
                })
            }

            await DanhMucChucVuDang.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucChucVuDang success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucChucVuDang = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucChucVuDang.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucChucVuDang success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucChucVuDang = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmucchucvudang = await DanhMucChucVuDang.findOne({
                _id: id
            })
            if (danhmucchucvudang === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucChucVuDang is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: danhmucchucvudang
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDanhMucChucVuDang = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucChucVuDang = await DanhMucChucVuDang.count()
            let allDanhMucChucVuDang = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucChucVuDang.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucChucVuDang,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucChucVuDang / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucChucVuDangSort = await DanhMucChucVuDang.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucChucVuDangSort,
                    total: totalDanhMucChucVuDang,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucChucVuDang / limit)
                })
            }
            if (!limit) {
                allDanhMucChucVuDang = await DanhMucChucVuDang.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucChucVuDang = await DanhMucChucVuDang.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucChucVuDang,
                total: totalDanhMucChucVuDang,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucChucVuDang / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucChucVuDang.distinct('TenDanhMucChucVuDang')
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
    createDanhMucChucVuDang,
    updateDanhMucChucVuDang,
    getDetailsDanhMucChucVuDang,
    deleteDanhMucChucVuDang,
    getAllDanhMucChucVuDang,
    deleteManyDanhMucChucVuDang,
    getAllType
}