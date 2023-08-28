const QuanHam = require("../models/QuanHamModel")

const createQuanHam = (newQuanHam) => {
    return new Promise(async (resolve, reject) => {
        const { QuanHamId, TenQuanHam, NgayNhan,  NgayKT,  MaQN } = newQuanHam
        try {
            const checkQuanHam = await QuanHam.findOne({
                MaQN: MaQN
            })
            if (checkQuanHam !== null) {
                resolve({
                    status: 'ERR',
                    message: 'Quan nhan is already'
                })
            }
            else{
            const newQuanHam = await QuanHam.create({
                QuanHamId, 
                TenQuanHam, 
                NgayNhan,  
                NgayKT,  
                MaQN
            })
            if (newQuanHam) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newQuanHam
                })
            }}
        } catch (e) {
            reject(e)
        }
    })
}

const updateQuanHam = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuanHam = await QuanHam.findOne({
                _id: id
            })
            if (checkQuanHam === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quanham is not defined'
                })
            }

            const updatedQuanHam = await QuanHam.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedQuanHam
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteQuanHam = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuanHam = await QuanHam.findOne({
                _id: id
            })
            if (checkQuanHam === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quanham is not defined'
                })
            }

            await QuanHam.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Quanham success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyQuanHam = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await QuanHam.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Quanham success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsQuanHam = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quanham = await QuanHam.findOne({
                _id: id
            })
            if (quanham === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quanham is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quanham
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllQuanHam = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalQuanHam = await QuanHam.count()
            let allQuanHam = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await QuanHam.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalQuanHam,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuanHam / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allQuanHamSort = await QuanHam.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allQuanHamSort,
                    total: totalQuanHam,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuanHam / limit)
                })
            }
            if(!limit) {
                allQuanHam = await QuanHam.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allQuanHam = await QuanHam.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allQuanHam,
                total: totalQuanHam,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalQuanHam / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await QuanHam.distinct('TenQuanHam')
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
    createQuanHam,
    updateQuanHam,
    getDetailsQuanHam,
    deleteQuanHam,
    getAllQuanHam,
    deleteManyQuanHam,
    getAllType
}