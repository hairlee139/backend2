const DanhMucCapBac = require("../models/DanhMucCapBacModel")

const createDanhMucCapBac = (newDanhMucCapBac) => {
    return new Promise(async (resolve, reject) => {
        const { DanhMucCapBacId, TenDanhMucCapBac,HienThi,GhiChu } = newDanhMucCapBac
        try {
            const checkDanhMucCapBac = await DanhMucCapBac.findOne({
                TenDanhMucCapBac: TenDanhMucCapBac
            })
            if (checkDanhMucCapBac !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDanhMucCapBac is already'
                })
            }
            const newDanhMucCapBac = await DanhMucCapBac.create({
                DanhMucCapBacId,
                TenDanhMucCapBac,
                HienThi,
                GhiChu
            })
            if (newDanhMucCapBac) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDanhMucCapBac
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDanhMucCapBac = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucCapBac = await DanhMucCapBac.findOne({
                _id: id
            })
            if (checkDanhMucCapBac === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucCapBac is not defined'
                })
            }

            const updatedDanhMucCapBac = await DanhMucCapBac.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDanhMucCapBac
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDanhMucCapBac = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDanhMucCapBac = await DanhMucCapBac.findOne({
                _id: id
            })
            if (checkDanhMucCapBac === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucCapBac is not defined'
                })
            }

            await DanhMucCapBac.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DanhMucCapBac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDanhMucCapBac = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DanhMucCapBac.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DanhMucCapBac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDanhMucCapBac = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const danhmuccapbac = await DanhMucCapBac.findOne({
                _id: id
            })
            if (danhmuccapbac === null) {
                resolve({
                    status: 'ERR',
                    message: 'DanhMucCapBac is not defined'
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

const getAllDanhMucCapBac = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDanhMucCapBac = await DanhMucCapBac.count()
            let allDanhMucCapBac = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DanhMucCapBac.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDanhMucCapBac,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucCapBac / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDanhMucCapBacSort = await DanhMucCapBac.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDanhMucCapBacSort,
                    total: totalDanhMucCapBac,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDanhMucCapBac / limit)
                })
            }
            if(!limit) {
                allDanhMucCapBac = await DanhMucCapBac.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allDanhMucCapBac = await DanhMucCapBac.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDanhMucCapBac,
                total: totalDanhMucCapBac,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDanhMucCapBac / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DanhMucCapBac.distinct('GhiChu')
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
    createDanhMucCapBac,
    updateDanhMucCapBac,
    getDetailsDanhMucCapBac,
    deleteDanhMucCapBac,
    getAllDanhMucCapBac,
    deleteManyDanhMucCapBac,
    getAllType
}