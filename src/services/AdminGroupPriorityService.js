const AdminGroupPriority = require("../models/AdminGroupPriorityModel")

const createAdminGroupPriority = (newAdminGroupPriority) => {
    return new Promise(async (resolve, reject) => {
        const { objectcode ,
            thetype ,
            prioritycode ,
            forman,
            func,
            inherit,
            edituser ,
            edittime,
            lock,
            whois ,
            unitcode ,
            thecode ,
            extensioncode ,
            tablename ,
            syscomponentcode ,
            addn,
            edit,
            dele } = newAdminGroupPriority
        try {
            const checkAdminGroupPriority = await AdminGroupPriority.findOne({
                objectcode: objectcode,
                prioritycode: prioritycode
            })
            if (checkAdminGroupPriority !== null) {
                resolve({
                    status: 'ERR',
                    message: 'Admin Group Priority is already'
                })
            }
            else{
            const newAdminGroupPriority = await AdminGroupPriority.create({
                objectcode ,
                thetype ,
                prioritycode ,
                forman,
                func,
                inherit,
                edituser ,
                edittime,
                lock,
                whois ,
                unitcode ,
                thecode ,
                extensioncode ,
                tablename ,
                syscomponentcode ,
                addn,
                edit,
                dele
            })
            if (newAdminGroupPriority) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newAdminGroupPriority
                })
            }}
        } catch (e) {
            reject(e)
        }
    })
}
const getAllPriorityFromAdminGroup = (id)  => {
    return new Promise(async (resolve, reject) => {
         try {
             console.log(id)
             const priorityList = await AdminGroupPriority.find({
                 objectcode: id
             }).populate("objectcode").populate("prioritycode");
             console.log(id)
             if (!priorityList || priorityList.length === 0) {
                 resolve({
                     status: 'ERR',
                     message: 'No priorityList found for the given PriorityId'
                 });
             }

             resolve({
                 status: 'OK',
                 message: 'SUCCESS',
                 data:  priorityList
             });
         } catch (error) {
             reject(error);
         }
     });
 };
const updateAdminGroupPriority = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAdminGroupPriority = await AdminGroupPriority.findOne({
                _id: id
            })
            if (checkAdminGroupPriority === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            const updatedAdminGroupPriority = await AdminGroupPriority.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedAdminGroupPriority
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteAdminGroupPriority = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAdminGroupPriority = await AdminGroupPriority.findOne({
                _id: id
            })
            if (checkAdminGroupPriority === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            await AdminGroupPriority.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Admingroup success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyAdminGroupPriority = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await AdminGroupPriority.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Admingroup success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsAdminGroupPriority = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const admingrouppriority = await AdminGroupPriority.findOne({
                _id: id
            })
            if (admingrouppriority === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: admingrouppriority
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllAdminGroupPriority = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalAdminGroupPriority = await AdminGroupPriority.count()
            let allAdminGroupPriority = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await AdminGroupPriority.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalAdminGroupPriority,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalAdminGroupPriority / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allAdminGroupPrioritySort = await AdminGroupPriority.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allAdminGroupPrioritySort,
                    total: totalAdminGroupPriority,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalAdminGroupPriority / limit)
                })
            }
            if(!limit) {
                allAdminGroupPriority = await AdminGroupPriority.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allAdminGroupPriority = await AdminGroupPriority.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allAdminGroupPriority,
                total: totalAdminGroupPriority,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalAdminGroupPriority / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await AdminGroupPriority.distinct('objectcode')
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
    createAdminGroupPriority,
    updateAdminGroupPriority,
    getDetailsAdminGroupPriority,
    deleteAdminGroupPriority,
    getAllAdminGroupPriority,
    deleteManyAdminGroupPriority,
    getAllType,
    getAllPriorityFromAdminGroup
}