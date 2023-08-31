const ChucVu = require("../models/ChucVuModel")

const createChucVu = (newChucVu) => {
    return new Promise(async (resolve, reject) => {
        const { code, name, GhiChu } = newChucVu
        try {
            const checkChucVu = await ChucVu.findOne({
                code: code
            })
            if (checkChucVu !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenChucVu is already'
                })
            }
            else{
            const newChucVu = await ChucVu.create({
                code, name, GhiChu
            })
            if (newChucVu) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newChucVu
                })
            }
        }
        } catch (e) {
            reject(e)
        }
    })
}

const updateChucVu = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkChucVu = await ChucVu.findOne({
                _id: id
            })
            if (checkChucVu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                })
            }

            const updatedChucVu = await ChucVu.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedChucVu
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteChucVu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkChucVu = await ChucVu.findOne({
                _id: id
            })
            if (checkChucVu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                })
            }

            await ChucVu.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Quannhan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyChucVu = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await ChucVu.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Quannhan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsChucVu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const chucvu = await ChucVu.findOne({
                _id: id
            })
            if (chucvu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: chucvu
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllChucVu = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalChucVu = await ChucVu.count()
            let allChucVu = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await ChucVu.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalChucVu,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalChucVu / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allChucVuSort = await ChucVu.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allChucVuSort,
                    total: totalChucVu,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalChucVu / limit)
                })
            }
            if(!limit) {
                allChucVu = await ChucVu.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allChucVu = await ChucVu.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allChucVu,
                total: totalChucVu,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalChucVu / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await ChucVu.distinct('TenLoaiQN')
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
    createChucVu,
    updateChucVu,
    getDetailsChucVu,
    deleteChucVu,
    getAllChucVu,
    deleteManyChucVu,
    getAllType
}