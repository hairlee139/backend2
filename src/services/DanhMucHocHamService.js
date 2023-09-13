const DanhMucHocHam = require("../models/DanhMucHocHamModel")

const createDanhMucHocHam = (newDanhMucHocHam) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucHocHamId, TenDanhMucHocHam, HienThi, GhiChu, edituser, edittime, lock, lockdate } = newDanhMucHocHam
        try {
            const checkDanhMucHocHam = await DanhMucHocHam.findOne({
                TenDanhMucHocHam: TenDanhMucHocHam
            })
            if (checkDanhMucHocHam !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucHocHam is already'
                })
            }
            const newDanhMucHocHam = await DanhMucHocHam.create({
                DanhMucHocHamId,
                TenDanhMucHocHam,
                HienThi,
                GhiChu, edituser, edittime, lock, lockdate
            })
            if (newDanhMucHocHam) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucHocHam
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucHocHam = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucHocHam = await DanhMucHocHam.findOne({
                _id: id
            })
            if (checkDanhMucHocHam === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucHocHam is not defined'
                })
            }

            const updatedDanhMucHocHam = await DanhMucHocHam.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucHocHam
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucHocHam = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucHocHam = await DanhMucHocHam.findOne({
                _id: id
            })
            if (checkDanhMucHocHam === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucHocHam is not defined'
                })
            }

            await DanhMucHocHam.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucHocHam success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucHocHam = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucHocHam.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucHocHam success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucHocHam = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmuccapbac = await DanhMucHocHam.findOne({
                _id: id
            })
            if (danhmuccapbac === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucHocHam is not defined'
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

const getAllDanhMucHocHam = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucHocHam = await DanhMucHocHam.count()
            let allDanhMucHocHam = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucHocHam.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucHocHam,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucHocHam / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucHocHamSort = await DanhMucHocHam.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucHocHamSort,
                    total: totalDanhMucHocHam,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucHocHam / limit)
                })
            }
            if (!limit) {
                allDanhMucHocHam = await DanhMucHocHam.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDanhMucHocHam = await DanhMucHocHam.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucHocHam,
                total: totalDanhMucHocHam,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucHocHam / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucHocHam.distinct('TenDanhMucHocHam')
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
    createDanhMucHocHam,
    updateDanhMucHocHam,
    getDetailsDanhMucHocHam,
    deleteDanhMucHocHam,
    getAllDanhMucHocHam,
    deleteManyDanhMucHocHam,
    getAllType
}