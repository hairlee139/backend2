const DaiHoc = require("../models/DaiHocModel")

const createDaiHoc = (newDaiHoc) => {
    return new Promise(async (resolve, reject) => {
        const { code,QuanNhanId,He,Nganh,Truong,QuocGia,NamNhan,TrangThai,edituser,edittime,GhiChu} = newDaiHoc
        try {
            // const checkDaiHoc = await DaiHoc.findOne({
            //     DaiHocId: DaiHocId
            // })
            // if (checkDaiHoc !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'DaiHoc is already'
            //     })
            // }
            const newDaiHoc = await DaiHoc.create({
                code,QuanNhanId,He,Nganh,Truong,QuocGia,NamNhan,TrangThai,edituser,edittime,GhiChu
            })
            if (newDaiHoc) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDaiHoc
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDaiHoc = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDaiHoc = await DaiHoc.findOne({
                _id: id
            })
            if (checkDaiHoc === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedDaiHoc = await DaiHoc.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDaiHoc
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDaiHoc = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDaiHoc = await DaiHoc.findOne({
                _id: id
            })
            if (checkDaiHoc === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await DaiHoc.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDaiHoc = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DaiHoc.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDaiHoc = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const daihoc = await DaiHoc.findOne({
                _id: id
            })
            if (daihoc === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: daihoc
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDaiHoc = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDaiHoc = await DaiHoc.count()
            let allDaiHoc = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DaiHoc.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDaiHoc,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDaiHoc / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDaiHocSort = await DaiHoc.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDaiHocSort,
                    total: totalDaiHoc,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDaiHoc / limit)
                })
            }
            if(!limit) {
                allDaiHoc = await DaiHoc.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allDaiHoc = await DaiHoc.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDaiHoc,
                total: totalDaiHoc,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDaiHoc / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DaiHoc.distinct('QuanNhanId')
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
const getDaiHocByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const daiHocList = await DaiHoc.find({
                QuanNhanId: id
            });
            
            if (!daiHocList || daiHocList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No DaiHoc found for the given QuanNhanId'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data:  daiHocList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createDaiHoc,
    updateDaiHoc,
    getDetailsDaiHoc,
    deleteDaiHoc,
    getAllDaiHoc,
    deleteManyDaiHoc,
    getAllType,
    getDaiHocByQuanNhanId
}