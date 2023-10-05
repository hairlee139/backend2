const DinhMucMienGiam = require("../models/DinhMucMienGiamModel")

const createDinhMucMienGiam = (newDinhMucMienGiam) => {
    return new Promise(async (resolve, reject) => {
        const { DinhMucMienGiamId, DoiTuong, TyLeMienGiam, GhiChu, edituser, edittime, lock, lockdate } = newDinhMucMienGiam
        try {
            const checkDinhMucMienGiam = await DinhMucMienGiam.findOne({
                DinhMucMienGiamId: DinhMucMienGiamId
            })
            if (checkDinhMucMienGiam !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenDinhMucMienGiam is already'
                })
            }
            const newDinhMucMienGiam = await DinhMucMienGiam.create({
                DinhMucMienGiamId, DoiTuong, TyLeMienGiam, GhiChu, edituser, edittime, lock, lockdate
            })
            if (newDinhMucMienGiam) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDinhMucMienGiam
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDinhMucMienGiam = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDinhMucMienGiam = await DinhMucMienGiam.findOne({
                _id: id
            })
            if (checkDinhMucMienGiam === null) {
                resolve({
                    status: 'ERR',
                    message: 'DinhMucMienGiam is not defined'
                })
            }

            const updatedDinhMucMienGiam = await DinhMucMienGiam.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDinhMucMienGiam
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDinhMucMienGiam = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDinhMucMienGiam = await DinhMucMienGiam.findOne({
                _id: id
            })
            if (checkDinhMucMienGiam === null) {
                resolve({
                    status: 'ERR',
                    message: 'DinhMucMienGiam is not defined'
                })
            }

            await DinhMucMienGiam.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete DinhMucMienGiam success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDinhMucMienGiam = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DinhMucMienGiam.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete DinhMucMienGiam success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDinhMucMienGiam = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const dinhmucmiengiam = await DinhMucMienGiam.findOne({
                _id: id
            })
            if (dinhmucmiengiam === null) {
                resolve({
                    status: 'ERR',
                    message: 'DinhMucMienGiam is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: dinhmucmiengiam
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDinhMucMienGiam = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDinhMucMienGiam = await DinhMucMienGiam.count()
            let allDinhMucMienGiam = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DinhMucMienGiam.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDinhMucMienGiam,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDinhMucMienGiam / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDinhMucMienGiamSort = await DinhMucMienGiam.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDinhMucMienGiamSort,
                    total: totalDinhMucMienGiam,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDinhMucMienGiam / limit)
                })
            }
            if (!limit) {
                allDinhMucMienGiam = await DinhMucMienGiam.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDinhMucMienGiam = await DinhMucMienGiam.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDinhMucMienGiam,
                total: totalDinhMucMienGiam,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDinhMucMienGiam / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DinhMucMienGiam.distinct('GhiChu')
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
    createDinhMucMienGiam,
    updateDinhMucMienGiam,
    getDetailsDinhMucMienGiam,
    deleteDinhMucMienGiam,
    getAllDinhMucMienGiam,
    deleteManyDinhMucMienGiam,
    getAllType
}