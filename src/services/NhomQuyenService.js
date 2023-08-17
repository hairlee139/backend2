const NhomQuyen = require("../models/NhomQuyenModel")

const createNhomQuyen = (newNhomQuyen) => {
    return new Promise(async (resolve, reject) => {
        const { NhomQuyenId, TenNhomQuyen,HienThi,Quyen,GhiChu } = newNhomQuyen
        try {
            const checkNhomQuyen = await NhomQuyen.findOne({
                TenNhomQuyen: TenNhomQuyen
            })
            if (checkNhomQuyen !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenNhomQuyen is already'
                })
            }
            const newNhomQuyen = await NhomQuyen.create({
                NhomQuyenId,
                TenNhomQuyen,
                HienThi,
                Quyen,
                GhiChu
            })
            if (newNhomQuyen) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newNhomQuyen
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateNhomQuyen = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNhomQuyen = await NhomQuyen.findOne({
                _id: id
            })
            if (checkNhomQuyen === null) {
                resolve({
                    status: 'ERR',
                    message: 'NhomQuyen is not defined'
                })
            }

            const updatedNhomQuyen = await NhomQuyen.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedNhomQuyen
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteNhomQuyen = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNhomQuyen = await NhomQuyen.findOne({
                _id: id
            })
            if (checkNhomQuyen === null) {
                resolve({
                    status: 'ERR',
                    message: 'NhomQuyen is not defined'
                })
            }

            await NhomQuyen.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete NhomQuyen success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyNhomQuyen = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await NhomQuyen.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete NhomQuyen success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsNhomQuyen = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const nhomquyen = await NhomQuyen.findOne({
                _id: id
            })
            if (nhomquyen === null) {
                resolve({
                    status: 'ERR',
                    message: 'NhomQuyen is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: nhomquyen
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllNhomQuyen = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalNhomQuyen = await NhomQuyen.count()
            let allNhomQuyen = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await NhomQuyen.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalNhomQuyen,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalNhomQuyen / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allNhomQuyenSort = await NhomQuyen.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allNhomQuyenSort,
                    total: totalNhomQuyen,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalNhomQuyen / limit)
                })
            }
            if(!limit) {
                allNhomQuyen = await NhomQuyen.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allNhomQuyen = await NhomQuyen.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allNhomQuyen,
                total: totalNhomQuyen,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalNhomQuyen / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await NhomQuyen.distinct('NhomQuyenId')
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
    createNhomQuyen,
    updateNhomQuyen,
    getDetailsNhomQuyen,
    deleteNhomQuyen,
    getAllNhomQuyen,
    deleteManyNhomQuyen,
    getAllType
}