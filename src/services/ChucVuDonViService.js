const ChucVuDonVi = require("../models/ChucVuDonViModel")

const createChucVuDonVi = (newChucVuDonVi) => {
    return new Promise(async (resolve, reject) => {
        const { chucvucode, donvicode,name, GhiChu } = newChucVuDonVi
        try {
            const checkChucVuDonVi = await ChucVuDonVi.findOne({
                chucvucode: chucvucode,
                donvicode:donvicode
            })
            if (checkChucVuDonVi !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenChucVuDonVi is already'
                })
            }
            else{
            const newChucVuDonVi = await ChucVuDonVi.create({
                chucvucode, donvicode,name, GhiChu
            })
            if (newChucVuDonVi) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newChucVuDonVi
                })
            }
        }
        } catch (e) {
            reject(e)
        }
    })
}

const updateChucVuDonVi = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkChucVuDonVi = await ChucVuDonVi.findOne({
                _id: id
            })
            if (checkChucVuDonVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'ChucVuDonVi is not defined'
                })
            }

            const updatedChucVuDonVi = await ChucVuDonVi.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedChucVuDonVi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteChucVuDonVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkChucVuDonVi = await ChucVuDonVi.findOne({
                _id: id
            })
            if (checkChucVuDonVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'ChucVuDonVi is not defined'
                })
            }

            await ChucVuDonVi.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete ChucVuDonVi success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyChucVuDonVi = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await ChucVuDonVi.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete ChucVuDonVi success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsChucVuDonVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const chucvudonvi = await ChucVuDonVi.findOne({
                _id: id
            })
            if (chucvudonvi === null) {
                resolve({
                    status: 'ERR',
                    message: 'ChucVuDonVi is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: chucvudonvi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllChucVuDonVi = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalChucVuDonVi = await ChucVuDonVi.count()
            let allChucVuDonVi = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await ChucVuDonVi.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalChucVuDonVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalChucVuDonVi / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allChucVuDonViSort = await ChucVuDonVi.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allChucVuDonViSort,
                    total: totalChucVuDonVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalChucVuDonVi / limit)
                })
            }
            if(!limit) {
                allChucVuDonVi = await ChucVuDonVi.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allChucVuDonVi = await ChucVuDonVi.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allChucVuDonVi,
                total: totalChucVuDonVi,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalChucVuDonVi / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await ChucVuDonVi.distinct('ChucVuDonViId')
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
    createChucVuDonVi,
    updateChucVuDonVi,
    getDetailsChucVuDonVi,
    deleteChucVuDonVi,
    getAllChucVuDonVi,
    deleteManyChucVuDonVi,
    getAllType
}