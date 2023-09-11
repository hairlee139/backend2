const AdminGroup = require("../models/AdminGroupModel")

const createAdminGroup = (newAdminGroup) => {
    return new Promise(async (resolve, reject) => {
        const { code, codeview, name,  note,  edituser,edittime, lock, lockdate,  whois, unitcode, departmentlist, leveltitlelist, allunit, admin, staff} = newAdminGroup
        try {
            const checkAdminGroup = await AdminGroup.findOne({
                code: code
            })
            if (checkAdminGroup !== null) {
                resolve({
                    status: 'ERR',
                    message: 'Quan nhan is already'
                })
            }
            else{
            const newAdminGroup = await AdminGroup.create({
                code, codeview, name,  note,  edituser,edittime, lock, lockdate,  whois, unitcode, departmentlist, leveltitlelist, allunit, admin, staff
            })
            if (newAdminGroup) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newAdminGroup
                })
            }}
        } catch (e) {
            reject(e)
        }
    })
}

const updateAdminGroup = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAdminGroup = await AdminGroup.findOne({
                _id: id
            })
            if (checkAdminGroup === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            const updatedAdminGroup = await AdminGroup.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedAdminGroup
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteAdminGroup = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkAdminGroup = await AdminGroup.findOne({
                _id: id
            })
            if (checkAdminGroup === null) {
                resolve({
                    status: 'ERR',
                    message: 'Admingroup is not defined'
                })
            }

            await AdminGroup.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Admingroup success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyAdminGroup = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await AdminGroup.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Admingroup success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsAdminGroup = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const admingroup = await AdminGroup.findOne({
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

const getAllAdminGroup = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalAdminGroup = await AdminGroup.count()
            let allAdminGroup = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await AdminGroup.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalAdminGroup,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalAdminGroup / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allAdminGroupSort = await AdminGroup.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allAdminGroupSort,
                    total: totalAdminGroup,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalAdminGroup / limit)
                })
            }
            if(!limit) {
                allAdminGroup = await AdminGroup.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allAdminGroup = await AdminGroup.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allAdminGroup,
                total: totalAdminGroup,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalAdminGroup / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await AdminGroup.distinct('objectcode')
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
const updateAdminGroupLists = async (id, departmentlist, leveltitlelist) => {
    try {
      const adminGroup = await AdminGroup.findById(id);
  
      if (!adminGroup) {
        return {
          status: 'ERR',
          message: 'AdminGroup not found',
        };
      }
  
      if (departmentlist) {
        adminGroup.departmentlist.push(departmentlist);
      }
  
      if (leveltitlelist) {
        adminGroup.leveltitlelist.push(leveltitlelist);
      }
  
      await adminGroup.save();
  
      return {
        status: 'OK',
        message: 'Data updated successfully',
      };
    } catch (error) {
      return {
        status: 'ERR',
        message: error.message,
      };
    }
  };
  const update2ListsAdminGroup = async (_id, index, newLevelTitle, newDepartment) => {
    try {
      const adminGroup = await AdminGroup.findById(_id);
  
      if (!adminGroup) {
        return {
          status: 'ERR',
          message: 'AdminGroup not found',
        };
      }
      console.log(adminGroup.leveltitlelist[index]);
      console.log(newLevelTitle);
      if (newLevelTitle) {
        adminGroup.leveltitlelist[index] = newLevelTitle;
      }
  
      if (newDepartment) {
        adminGroup.departmentlist[index] = newDepartment;
      }
  
      await adminGroup.save();
  
      return {
        status: 'OK',
        message: 'Data updated successfully',
      };
    } catch (error) {
      return {
        status: 'ERR',
        message: error.message,
      };
    }
  };
  const delete2ListsAdminGroup = async (_id, index) => {
    try {
        const adminGroup = await AdminGroup.findById(_id);

        if (!adminGroup) {
            return {
                status: 'ERR',
                message: 'AdminGroup not found',
            };
        }

        adminGroup.leveltitlelist.splice(index, 1);
        adminGroup.departmentlist.splice(index, 1);

        await adminGroup.save();

        return {
            status: 'OK',
            message: 'Data deleted successfully',
        };
    } catch (error) {
        return {
            status: 'ERR',
            message: error.message,
        };
    }
};
module.exports = {
    createAdminGroup,
    updateAdminGroup,
    getDetailsAdminGroup,
    deleteAdminGroup,
    getAllAdminGroup,
    deleteManyAdminGroup,
    getAllType,
    updateAdminGroupLists,
    update2ListsAdminGroup,
    delete2ListsAdminGroup
}