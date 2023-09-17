const DanhMucKhenThuong = require("../models/DanhMucHinhThucKhenThuongModel")

const createDanhMucKhenThuong = (newDanhMucKhenThuong) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucKhenThuongId, TenDanhMucKhenThuong, HienThi, GhiChu } = newDanhMucKhenThuong
        try {
            const checkDanhMucKhenThuong = await DanhMucKhenThuong.findOne({
                TenDanhMucKhenThuong: TenDanhMucKhenThuong
            })
            if (checkDanhMucKhenThuong !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucKhenThuong is already'
                })
            }
            const newDanhMucKhenThuong = await DanhMucKhenThuong.create({
                DanhMucKhenThuongId,
                TenDanhMucKhenThuong,
                HienThi,
                GhiChu
            })
            if (newDanhMucKhenThuong) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucKhenThuong
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucKhenThuong = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucKhenThuong = await DanhMucKhenThuong.findOne({
                _id: id
            })
            if (checkDanhMucKhenThuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucKhenThuong is not defined'
                })
            }

            const updatedDanhMucKhenThuong = await DanhMucKhenThuong.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucKhenThuong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucKhenThuong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucKhenThuong = await DanhMucKhenThuong.findOne({
                _id: id
            })
            if (checkDanhMucKhenThuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucKhenThuong is not defined'
                })
            }

            await DanhMucKhenThuong.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucKhenThuong success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucKhenThuong = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucKhenThuong.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucKhenThuong success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucKhenThuong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const DanhMucKhenThuongId = await DanhMucKhenThuong.findOne({
                _id: id
            })
            if (DanhMucKhenThuongId === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucKhenThuong is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: DanhMucKhenThuongId
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDanhMucKhenThuong = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucKhenThuong = await DanhMucKhenThuong.count()
            let allDanhMucKhenThuong = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucKhenThuong.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucKhenThuong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucKhenThuong / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucKhenThuongSort = await DanhMucKhenThuong.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucKhenThuongSort,
                    total: totalDanhMucKhenThuong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucKhenThuong / limit)
                })
            }
            if (!limit) {
                allDanhMucKhenThuong = await DanhMucKhenThuong.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucKhenThuong = await DanhMucKhenThuong.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucKhenThuong,
                total: totalDanhMucKhenThuong,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucKhenThuong / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucKhenThuong.distinct('TenDanhMucKhenThuong')
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
    createDanhMucKhenThuong,
    updateDanhMucKhenThuong,
    getDetailsDanhMucKhenThuong,
    deleteDanhMucKhenThuong,
    getAllDanhMucKhenThuong,
    deleteManyDanhMucKhenThuong,
    getAllType
}