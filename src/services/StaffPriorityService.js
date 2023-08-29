const StaffPriority = require("../models/StaffPriorityModel")

const createStaffPriority = (newStaffPriority) => {
    return new Promise(async (resolve, reject) => {
        const { objectcode,
            thetype,
            prioritycode,
            forman,
            func,
            thecode,
            extensioncode,
            tablename,
            inherit,
            edituser,
            edittime,
            lock,
            whois,
            unitcode,
            syscomponentcode} = newStaffPriority
        try {
            const checkStaffPriority = await StaffPriority.findOne({
                objectcode: objectcode
            })
            if (checkStaffPriority !== null) {
                resolve({
                    status: 'ERR',
                    message: 'Quyen is already'
                })
            }
            else{
            const newStaffPriority = await StaffPriority.create({
                objectcode,
            thetype,
            prioritycode,
            forman,
            func,
            thecode,
            extensioncode,
            tablename,
            inherit,
            edituser,
            edittime,
            lock,
            whois,
            unitcode,
            syscomponentcode
            })
            if (newStaffPriority) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newStaffPriority
                })
            }
        }
        } catch (e) {
            reject(e)
        }
    })
}

const updateStaffPriority = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkStaffPriority = await StaffPriority.findOne({
                _id: id
            })
            if (checkStaffPriority === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            const updatedStaffPriority = await StaffPriority.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedStaffPriority
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteStaffPriority = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkStaffPriority = await StaffPriority.findOne({
                _id: id
            })
            if (checkStaffPriority === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            await StaffPriority.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Admingroup success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyStaffPriority = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await StaffPriority.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Admingroup success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsStaffPriority = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const staffpriority = await StaffPriority.findOne({
                _id: id
            })
            if (staffpriority === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: staffpriority
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllStaffPriority = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalStaffPriority = await StaffPriority.count()
            let allStaffPriority = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await StaffPriority.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalStaffPriority,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalStaffPriority / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allStaffPrioritySort = await StaffPriority.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allStaffPrioritySort,
                    total: totalStaffPriority,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalStaffPriority / limit)
                })
            }
            if(!limit) {
                allStaffPriority = await StaffPriority.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allStaffPriority = await StaffPriority.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allStaffPriority,
                total: totalStaffPriority,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalStaffPriority / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await StaffPriority.distinct('objectcode')
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
    createStaffPriority,
    updateStaffPriority,
    getDetailsStaffPriority,
    deleteStaffPriority,
    getAllStaffPriority,
    deleteManyStaffPriority,
    getAllType
}