const StaffAdminGroup = require("../models/StaffAdminGroupModel")

const createStaffAdminGroup = (newStaffAdminGroup) => {
    return new Promise(async (resolve, reject) => {
        const { objectcode ,
            thetype ,
            admingroupcode ,
            edituser ,
            edittime,
            lock,
            whois} = newStaffAdminGroup
        try {
            const checkStaffAdminGroup = await StaffAdminGroup.findOne({
                objectcode: objectcode,
                admingroupcode: admingroupcode
            })
            if (checkStaffAdminGroup !== null) {
                resolve({
                    status: 'ERR',
                    message: 'Quyen is already'
                })
            }
            else{
            const newStaffAdminGroup = await StaffAdminGroup.create({
                objectcode ,
            thetype ,
            admingroupcode ,
            edituser ,
            edittime,
            lock,
            whois
            })
            if (newStaffAdminGroup) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newStaffAdminGroup
                })
            }
        }
        } catch (e) {
            reject(e)
        }
    })
}

const updateStaffAdminGroup = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkStaffAdminGroup = await StaffAdminGroup.findOne({
                _id: id
            })
            if (checkStaffAdminGroup === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            const updatedStaffAdminGroup = await StaffAdminGroup.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedStaffAdminGroup
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteStaffAdminGroup = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkStaffAdminGroup = await StaffAdminGroup.findOne({
                _id: id
            })
            if (checkStaffAdminGroup === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            await StaffAdminGroup.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Admingroup success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyStaffAdminGroup = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await StaffAdminGroup.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Admingroup success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsStaffAdminGroup = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const staffadmingroup = await StaffAdminGroup.findOne({
                _id: id
            })
            if (staffadmingroup === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: staffadmingroup
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllStaffAdminGroup = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalStaffAdminGroup = await StaffAdminGroup.count()
            let allStaffAdminGroup = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await StaffAdminGroup.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalStaffAdminGroup,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalStaffAdminGroup / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allStaffAdminGroupSort = await StaffAdminGroup.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allStaffAdminGroupSort,
                    total: totalStaffAdminGroup,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalStaffAdminGroup / limit)
                })
            }
            if(!limit) {
                allStaffAdminGroup = await StaffAdminGroup.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allStaffAdminGroup = await StaffAdminGroup.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allStaffAdminGroup,
                total: totalStaffAdminGroup,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalStaffAdminGroup / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await StaffAdminGroup.distinct('objectcode')
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
    createStaffAdminGroup,
    updateStaffAdminGroup,
    getDetailsStaffAdminGroup,
    deleteStaffAdminGroup,
    getAllStaffAdminGroup,
    deleteManyStaffAdminGroup,
    getAllType
}