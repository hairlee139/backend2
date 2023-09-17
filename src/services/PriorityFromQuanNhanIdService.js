const AdminGroupPriority = require("../models/AdminGroupPriorityModel")
const StaffAdminGroup = require("../models/StaffAdminGroupModel")
const QuanNhan = require("../models/QuanNhanModel")
const AdminGroup = require("../models/AdminGroupModel")
const AdminGroupService = require("../services/AdminGroupService")
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
                _id: item.prioritycode._id,
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
const getAdminGroupIdFromUser = async (id) => {
    try {
        
        const chucVuDonViResponse = await getChucVuDonViFromUser(id);
        if (chucVuDonViResponse.status !== 'OK' || !chucVuDonViResponse.data || !chucVuDonViResponse.data.length) {
            return {
                status: 'ERR',
                message: 'No chucVuDonVi found'
            };
        }
        const chucVuList = chucVuDonViResponse.data[0].HoatDong || [];
        const adminGroupCodeList = [];
        for (const chucVu of chucVuList) {
            // console.log(chucVu);
            const adminGroupResponse = await getAdminGroupFromChucVu(chucVu);
            if (adminGroupResponse) {
                const objectIdList = adminGroupResponse.map(item => item.ObjectId);      
                adminGroupCodeList.push(...objectIdList); 
            }
        }
        
        return {
            status: 'OK',
            message: 'SUCCESS',
            data: adminGroupCodeList
        };    
    } catch (error) {
        throw error;
    }
};

 const getChucVuDonViFromUser = (id)  => {
    return new Promise(async (resolve, reject) => {
         try {
            
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
//  const getAdminGroupFromChucVu = (reqLevelTitleList)  => {
//     return new Promise(async (resolve, reject) => {
//          try {
            
             
//             //  const admingroupList = await AdminGroup.find({
//             //     leveltitlelist: { $elemMatch: { $in: reqLevelTitleList } }
//             //  });
//             // const admingroupList = await AdminGroup.find({
//             //     leveltitlelist: {
//             //         $elemMatch: {
//             //             type: String,
//             //             $in: reqLevelTitleList
//             //         }
//             //     }
//             // });
//             // const admingroupList = await AdminGroup.find({
//             //     leveltitlelist: {
//             //         $elemMatch: {
//             //             $regex: new RegExp(`^${reqLevelTitleList}`)
//             //         }
//             //     }
//             // });
//             console.log(reqLevelTitleList)
//             const response = await AdminGroupService.getAllTypeList();
//             const leveltitlelist = response.data;
//             const matchingElements = leveltitlelist.filter(element => reqLevelTitleList.includes(element));
//             const admingroupList = await AdminGroup.find({})
//             resolve(matchingElements);

//             // const admingroupList = await AdminGroup.find({
                
//             // });
            
            
            
            
            
//             //  if (!admingroupList || admingroupList.length === 0) {
//             //      resolve({
//             //          status: 'ERR',
//             //          message: 'No admingroupList found for the given chuc vu don vi'
//             //      });
//             //  }
//             //  const simplifiedList = admingroupList.map(item => {
//             //     return {
//             //         ObjectId: item._id,
//             //     };
//             // });

//             //  resolve({
//             //      status: 'OK',
//             //      message: 'SUCCESS',
//             //      data:  simplifiedList
//             //  });
//          } catch (error) {
//              reject(error);
//          }
//      });
//  };
const getAdminGroupFromChucVu = async (reqLevelTitleList) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await AdminGroupService.getAllTypeList();
            const leveltitlelist = response.data;
            const matchingElements = leveltitlelist.filter(element => reqLevelTitleList.includes(element));
            
            const adminGroupsMatching = [];

            for (const element of matchingElements) {
                // console.log(element);
                const admingroupList = await AdminGroup.find({
                    leveltitlelist: {
                        $elemMatch: { $in: element }
                    }
                });
                const simplifiedList = admingroupList.map(item => {
                    return {
                        ObjectId: item._id,
                            };
                    });
                adminGroupsMatching.push(simplifiedList);
            }
            const combinedList = adminGroupsMatching.reduce((acc, curr) => acc.concat(curr), []);
            resolve(combinedList);
            
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
    getPriorityFromUser,
    getAdminGroupFromChucVu,
    getAdminGroupIdFromUser
}