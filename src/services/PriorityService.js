const Priority = require("../models/PriorityModel")

const createPriority = (newPriority) => {
    return new Promise(async (resolve, reject) => {
        const { code,description,showauth,name,lock,whois,groupcode,syscomponentcode,unitcode,addn,edit,dele} = newPriority
        try {
            const checkPriority = await Priority.findOne({
                code: code
            })
            if (checkPriority !== null) {
                resolve({
                    status: 'ERR',
                    message: 'Quan nhan is already'
                })
            }
            const newPriority = await Priority.create({
                code,description,showauth,name,lock,whois,groupcode,syscomponentcode,unitcode,addn,edit,dele
            })
            if (newPriority) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newPriority
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updatePriority = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkPriority = await Priority.findOne({
                _id: id
            })
            if (checkPriority === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            const updatedPriority = await Priority.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedPriority
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deletePriority = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkPriority = await Priority.findOne({
                _id: id
            })
            if (checkPriority === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            await Priority.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Admingroup success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyPriority = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await Priority.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Admingroup success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsPriority = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const admingroup = await Priority.findOne({
                _id: id
            })
            if (admingroup === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: admingroup
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllPriority = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalPriority = await Priority.count()
            let allPriority = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await Priority.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalPriority,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalPriority / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allPrioritySort = await Priority.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allPrioritySort,
                    total: totalPriority,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalPriority / limit)
                })
            }
            if(!limit) {
                allPriority = await Priority.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allPriority = await Priority.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allPriority,
                total: totalPriority,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalPriority / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await Priority.distinct('objectcode')
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
    createPriority,
    updatePriority,
    getDetailsPriority,
    deletePriority,
    getAllPriority,
    deleteManyPriority,
    getAllType
}