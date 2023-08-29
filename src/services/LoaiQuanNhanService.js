const LoaiQuanNhan = require("../models/LoaiQuanNhanModel")

const createLoaiQuanNhan = (newLoaiQuanNhan) => {
    return new Promise(async (resolve, reject) => {
        const { LoaiQuanNhanId, TenLoaiQuanNhan,GhiChu } = newLoaiQuanNhan
        try {
            const checkLoaiQuanNhan = await LoaiQuanNhan.findOne({
                TenLoaiQuanNhan: TenLoaiQuanNhan
            })
            if (checkLoaiQuanNhan !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TenLoaiQuanNhan is already'
                })
            }
            else{
            const newLoaiQuanNhan = await LoaiQuanNhan.create({
                LoaiQuanNhanId,
                TenLoaiQuanNhan,
                GhiChu
            })
            if (newLoaiQuanNhan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newLoaiQuanNhan
                })
            }
        }
        } catch (e) {
            reject(e)
        }
    })
}

const updateLoaiQuanNhan = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiQuanNhan = await LoaiQuanNhan.findOne({
                _id: id
            })
            if (checkLoaiQuanNhan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                })
            }

            const updatedLoaiQuanNhan = await LoaiQuanNhan.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLoaiQuanNhan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteLoaiQuanNhan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiQuanNhan = await LoaiQuanNhan.findOne({
                _id: id
            })
            if (checkLoaiQuanNhan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                })
            }

            await LoaiQuanNhan.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Quannhan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyLoaiQuanNhan = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await LoaiQuanNhan.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Quannhan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsLoaiQuanNhan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaiquannhan = await LoaiQuanNhan.findOne({
                _id: id
            })
            if (loaiquannhan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaiquannhan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllLoaiQuanNhan = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalLoaiQuanNhan = await LoaiQuanNhan.count()
            let allLoaiQuanNhan = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await LoaiQuanNhan.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalLoaiQuanNhan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiQuanNhan / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allLoaiQuanNhanSort = await LoaiQuanNhan.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allLoaiQuanNhanSort,
                    total: totalLoaiQuanNhan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiQuanNhan / limit)
                })
            }
            if(!limit) {
                allLoaiQuanNhan = await LoaiQuanNhan.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allLoaiQuanNhan = await LoaiQuanNhan.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLoaiQuanNhan,
                total: totalLoaiQuanNhan,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalLoaiQuanNhan / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await LoaiQuanNhan.distinct('TenLoaiQN')
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
    createLoaiQuanNhan,
    updateLoaiQuanNhan,
    getDetailsLoaiQuanNhan,
    deleteLoaiQuanNhan,
    getAllLoaiQuanNhan,
    deleteManyLoaiQuanNhan,
    getAllType
}