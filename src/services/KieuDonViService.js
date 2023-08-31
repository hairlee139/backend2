const KieuDonVi = require("../models/KieuDonViModel")

const createKieuDonVi = (newKieuDonVi) => {
    return new Promise(async (resolve, reject) => {
        const { code, codeview, name, currentgrade, lowergrade,position, note, edituser, edittime, lock, lockdate} = newKieuDonVi
        try {
            const checkKieuDonVi = await KieuDonVi.findOne({
                currentgrade: currentgrade
            })
            if (checkKieuDonVi !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenKieuDonVi is already'
                })
            }
            else{
            const newKieuDonVi = await KieuDonVi.create({
                code, codeview, name, currentgrade, lowergrade,position, note, edituser, edittime, lock, lockdate
            })
            if (newKieuDonVi) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newKieuDonVi
                })
            }
        }
        } catch (e) {
            reject(e)
        }
    })
}

const updateKieuDonVi = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkKieuDonVi = await KieuDonVi.findOne({
                _id: id
            })
            if (checkKieuDonVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'KieuDonVi is not defined'
                })
            }

            const updatedKieuDonVi = await KieuDonVi.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedKieuDonVi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteKieuDonVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkKieuDonVi = await KieuDonVi.findOne({
                _id: id
            })
            if (checkKieuDonVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'KieuDonVi is not defined'
                })
            }

            await KieuDonVi.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete KieuDonVi success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyKieuDonVi = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await KieuDonVi.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete KieuDonVi success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsKieuDonVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const kieudonvi = await KieuDonVi.findOne({
                _id: id
            })
            if (kieudonvi === null) {
                resolve({
                    status: 'ERR',
                    message: 'KieuDonVi is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: kieudonvi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllKieuDonVi = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalKieuDonVi = await KieuDonVi.count()
            let allKieuDonVi = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await KieuDonVi.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalKieuDonVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalKieuDonVi / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allKieuDonViSort = await KieuDonVi.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allKieuDonViSort,
                    total: totalKieuDonVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalKieuDonVi / limit)
                })
            }
            if(!limit) {
                allKieuDonVi = await KieuDonVi.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allKieuDonVi = await KieuDonVi.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allKieuDonVi,
                total: totalKieuDonVi,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalKieuDonVi / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await KieuDonVi.distinct('KieuDonViId')
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
    createKieuDonVi,
    updateKieuDonVi,
    getDetailsKieuDonVi,
    deleteKieuDonVi,
    getAllKieuDonVi,
    deleteManyKieuDonVi,
    getAllType
}