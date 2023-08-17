const PhamViNhom = require("../models/PhamViNhomModel")

const createPhamViNhom = (newPhamViNhom) => {
    return new Promise(async (resolve, reject) => {
        const { PhamViNhomId, TenPhamViNhom,ChiTiet,GhiChu } = newPhamViNhom
        try {
            const checkPhamViNhom = await PhamViNhom.findOne({
                TenPhamViNhom: TenPhamViNhom
            })
            if (checkPhamViNhom !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenPhamViNhom is already'
                })
            }
            const newPhamViNhom = await PhamViNhom.create({
                PhamViNhomId,
                TenPhamViNhom,
                ChiTiet,
                GhiChu
            })
            if (newPhamViNhom) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newPhamViNhom
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updatePhamViNhom = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkPhamViNhom = await PhamViNhom.findOne({
                _id: id
            })
            if (checkPhamViNhom === null) {
                resolve({
                    status: 'ERR',
                    message: 'PhamViNhom is not defined'
                })
            }

            const updatedPhamViNhom = await PhamViNhom.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedPhamViNhom
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deletePhamViNhom = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkPhamViNhom = await PhamViNhom.findOne({
                _id: id
            })
            if (checkPhamViNhom === null) {
                resolve({
                    status: 'ERR',
                    message: 'PhamViNhom is not defined'
                })
            }

            await PhamViNhom.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete PhamViNhom success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyPhamViNhom = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await PhamViNhom.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete PhamViNhom success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsPhamViNhom = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const phamvinhom = await PhamViNhom.findOne({
                _id: id
            })
            if (phamvinhom === null) {
                resolve({
                    status: 'ERR',
                    message: 'PhamViNhom is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: phamvinhom
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllPhamViNhom = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalPhamViNhom = await PhamViNhom.count()
            let allPhamViNhom = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await PhamViNhom.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalPhamViNhom,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalPhamViNhom / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allPhamViNhomSort = await PhamViNhom.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allPhamViNhomSort,
                    total: totalPhamViNhom,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalPhamViNhom / limit)
                })
            }
            if(!limit) {
                allPhamViNhom = await PhamViNhom.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allPhamViNhom = await PhamViNhom.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allPhamViNhom,
                total: totalPhamViNhom,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalPhamViNhom / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await PhamViNhom.distinct('PhamViNhomId')
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
    createPhamViNhom,
    updatePhamViNhom,
    getDetailsPhamViNhom,
    deletePhamViNhom,
    getAllPhamViNhom,
    deleteManyPhamViNhom,
    getAllType
}