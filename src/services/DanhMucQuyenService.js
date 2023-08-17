const DanhMucQuyen = require("../models/DanhMucQuyenModel")

const createDanhMucQuyen = (newDanhMucQuyen) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucQuyenId, TenDanhMucQuyen,ChiTiet,GhiChu } = newDanhMucQuyen
        try {
            const checkDanhMucQuyen = await DanhMucQuyen.findOne({
                TenDanhMucQuyen: TenDanhMucQuyen
            })
            if (checkDanhMucQuyen !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucQuyen is already'
                })
            }
            const newDanhMucQuyen = await DanhMucQuyen.create({
                DanhMucQuyenId,
                TenDanhMucQuyen,
                ChiTiet,
                GhiChu
            })
            if (newDanhMucQuyen) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucQuyen
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucQuyen = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucQuyen = await DanhMucQuyen.findOne({
                _id: id
            })
            if (checkDanhMucQuyen === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucQuyen is not defined'
                })
            }

            const updatedDanhMucQuyen = await DanhMucQuyen.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucQuyen
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucQuyen = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucQuyen = await DanhMucQuyen.findOne({
                _id: id
            })
            if (checkDanhMucQuyen === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucQuyen is not defined'
                })
            }

            await DanhMucQuyen.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucQuyen success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucQuyen = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucQuyen.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucQuyen success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucQuyen = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmucquyen = await DanhMucQuyen.findOne({
                _id: id
            })
            if (danhmucquyen === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucQuyen is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: danhmucquyen
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDanhMucQuyen = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucQuyen = await DanhMucQuyen.count()
            let allDanhMucQuyen = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucQuyen.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucQuyen,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucQuyen / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucQuyenSort = await DanhMucQuyen.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucQuyenSort,
                    total: totalDanhMucQuyen,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucQuyen / limit)
                })
            }
            if(!limit) {
                allDanhMucQuyen = await DanhMucQuyen.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allDanhMucQuyen = await DanhMucQuyen.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucQuyen,
                total: totalDanhMucQuyen,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucQuyen / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucQuyen.distinct('GhiChu')
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
    createDanhMucQuyen,
    updateDanhMucQuyen,
    getDetailsDanhMucQuyen,
    deleteDanhMucQuyen,
    getAllDanhMucQuyen,
    deleteManyDanhMucQuyen,
    getAllType
}