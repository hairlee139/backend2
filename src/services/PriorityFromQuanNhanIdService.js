const AdminGroupPriority = require("../models/AdminGroupPriorityModel")
const StaffAdminGroup = require("../models/StaffAdminGroupModel")
const QuanNhan = require("../models/QuanNhanModel")
const AdminGroup = require("../models/AdminGroupModel")
// const getAllPriorityFromAdminGroup = (id)  => {
//     return new Promise(async (resolve, reject) => {
//          try {
//              console.log(id)
//              const priorityList = await AdminGroupPriority.find({
//                  objectcode: id
//              }).populate("objectcode").populate("prioritycode");
//              console.log(id)
//              if (!priorityList || priorityList.length === 0) {
//                  resolve({
//                      status: 'ERR',
//                      message: 'No priorityList found for the given PriorityId'
//                  });
//              }
             
//              resolve({
//                  status: 'OK',
//                  message: 'SUCCESS',
//                  data:  priorityList
//              });
//          } catch (error) {
//              reject(error);
//          }
//      });
//  };
 const getAllPriorityFromAdminGroup = (id)  => {
    return new Promise(async (resolve, reject) => {
         try {
             
             const priorityList = await AdminGroupPriority.find({
                 objectcode: id
             }).populate("objectcode").populate("prioritycode");
             console.log("hi"+id)
             if (!priorityList || priorityList.length === 0) {
                 resolve({
                     status: 'ERR',
                     message: 'No priorityList found for the given PriorityId'
                 });
             }
             const codeValues = priorityList.map(item => ({
                code: item.prioritycode.code,
                description: item.prioritycode.description,
                addn: item.prioritycode.addn,
                edit: item.prioritycode.edit,
                dele: item.prioritycode.dele,
            }));
             resolve({
                 status: 'OK',
                 message: 'SUCCESS',
                 data:  codeValues
             });
         } catch (error) {
             reject(error);
         }
     });
 };
 const getAdminGroupCodeFromUser = (id)  => {
    return new Promise(async (resolve, reject) => {
         try {
             console.log(id)
             const adminGroup = await StaffAdminGroup.find({
                 objectcode: id
             }).populate("objectcode").populate("admingroupcode");
             console.log(id)
             if (!adminGroup || adminGroup.length === 0) {
                 resolve({
                     status: 'ERR',
                     message: 'No adminGroup found'
                 });
             }
             
             resolve({
                 status: 'OK',
                 message: 'SUCCESS',
                 data:  adminGroup
             });
         } catch (error) {
             reject(error);
         }
     });
 };
//  const getPriorityFromUser = (id)  => {
//     return new Promise(async (resolve, reject) => {
//          try {
//              const adminGroup = await StaffAdminGroup.find({
//                  objectcode: id
//              })
//              console.log(id)
//              if (!adminGroup || adminGroup.length === 0) {
//                  resolve({
//                      status: 'ERR',
//                      message: 'No adminGroup found'
//                  });
//              }
//             //  console.log("hehe"+adminGroup)

//             //  const admingroupcodevalue = adminGroup.admingroupcode;
//             const admingroupcodes = [];
//              const simplifiedList = adminGroup.map(item => {
//                 const value = item.admingroupcode;
//                 admingroupcodes.push(value);
//                 return {
//                     admingroupcode: item.admingroupcode
//                 };
//             });
//              console.log(admingroupcodes[0].toString());
//              const admingroupcodevalue = admingroupcodes[0].toString()
//              const priorityList = await AdminGroupPriority.find({
//                 objectcode: admingroupcodevalue
//             }).populate("objectcode").populate("prioritycode");
//             console.log("hehe"+admingroupcodevalue)
//             if (!priorityList || priorityList.length === 0) {
//                 resolve({
//                     status: 'ERR',
//                     message: 'No priorityList found for the given PriorityId'
//                 });
//             }
            
//              resolve({
//                  status: 'OK',
//                  message: 'SUCCESS',
//                  data:  priorityList
//              });
//          } catch (error) {
//              reject(error);
//          }
//      });
//  };
const getPriorityFromUser = async (id) => {
    try {
        const adminGroup = await StaffAdminGroup.find({
            objectcode: id
        });

        if (!adminGroup || adminGroup.length === 0) {
            return {
                status: 'ERR',
                message: 'No adminGroup found'
            };
        }

        const admingroupcodes = adminGroup.map(item => item.admingroupcode.toString());

        const priorityPromises = admingroupcodes.map(async admingroupcodevalue => {
            const priorityList = await AdminGroupPriority.find({
                objectcode: admingroupcodevalue
            }).populate("objectcode").populate("prioritycode");
            console.log(admingroupcodevalue);
            return {
                status: priorityList && priorityList.length > 0 ? 'OK' : 'ERR',
                message: priorityList && priorityList.length > 0 ? 'SUCCESS' : 'No priorityList found',
                // data: priorityList
                data: priorityList.map(priority => priority.prioritycode.code)
            };
        });
        
        const result = await Promise.all(priorityPromises);
        return result;
    } catch (error) {
        throw error;
    }
};

 const getChucVuDonViFromUser = (id)  => {
    return new Promise(async (resolve, reject) => {
         try {
             console.log(id)
             const quannhanList = await QuanNhan.find({
                 QuanNhanId: id
             });
             console.log(id)
             if (!quannhanList || quannhanList.length === 0) {
                 resolve({
                     status: 'ERR',
                     message: 'No quannhanList found for the given QuanNhanId'
                 });
             }
             const simplifiedList = quannhanList.map(item => {
                return {
                    HoatDong: item.HoatDong,
                    DonVi: item.DonVi
                };
            });

             resolve({
                 status: 'OK',
                 message: 'SUCCESS',
                 data:  simplifiedList
             });
         } catch (error) {
             reject(error);
         }
     });
 };
 const getAdminGroupFromChucVuDonVi = (reqDepartmentList, reqLevelTitleList)  => {
    return new Promise(async (resolve, reject) => {
         try {
             console.log(reqDepartmentList)
             console.log(reqLevelTitleList)
             const admingroupList = await AdminGroup.find({
                departmentlist: { $in: reqDepartmentList },
                leveltitlelist: { $in: reqLevelTitleList }
             });
             if (!admingroupList || admingroupList.length === 0) {
                 resolve({
                     status: 'ERR',
                     message: 'No admingroupList found for the given chuc vu don vi'
                 });
             }
             const simplifiedList = admingroupList.map(item => {
                return {
                    ObjectId: item._id,
                };
            });

             resolve({
                 status: 'OK',
                 message: 'SUCCESS',
                 data:  simplifiedList
             });
         } catch (error) {
             reject(error);
         }
     });
 };
module.exports = {
    getAllPriorityFromAdminGroup,
    getChucVuDonViFromUser,
    getAdminGroupFromChucVuDonVi,
    getAdminGroupCodeFromUser,
    getPriorityFromUser
}