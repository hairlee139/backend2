const SauDaiHoc = require("../models/SauDaiHocModel")

const createSauDaiHoc = (newSauDaiHoc) => {
    return new Promise(async (resolve, reject) => {
        const { code,QuanNhanId,LoaiBang,LinhVuc,TenLuanVan,Truong,QuocGia,NamNhan,TrangThai,edituser,edittime,GhiChu} = newSauDaiHoc
        try {
            // const checkSauDaiHoc = await SauDaiHoc.findOne({
            //     SauDaiHocId: SauDaiHocId
            // })
            // if (checkSauDaiHoc !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'SauDaiHoc is already'
            //     })
            // }
            const newSauDaiHoc = await SauDaiHoc.create({
                code,QuanNhanId,LoaiBang,LinhVuc,TenLuanVan,Truong,QuocGia,NamNhan,TrangThai,edituser,edittime,GhiChu
            })
            if (newSauDaiHoc) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newSauDaiHoc
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateSauDaiHoc = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkSauDaiHoc = await SauDaiHoc.findOne({
                _id: id
            })
            if (checkSauDaiHoc === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedSauDaiHoc = await SauDaiHoc.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedSauDaiHoc
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteSauDaiHoc = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkSauDaiHoc = await SauDaiHoc.findOne({
                _id: id
            })
            if (checkSauDaiHoc === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await SauDaiHoc.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManySauDaiHoc = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await SauDaiHoc.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsSauDaiHoc = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const saudaihoc = await SauDaiHoc.findOne({
                _id: id
            })
            if (saudaihoc === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: saudaihoc
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllSauDaiHoc = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalSauDaiHoc = await SauDaiHoc.count()
            let allSauDaiHoc = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await SauDaiHoc.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalSauDaiHoc,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalSauDaiHoc / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allSauDaiHocSort = await SauDaiHoc.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allSauDaiHocSort,
                    total: totalSauDaiHoc,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalSauDaiHoc / limit)
                })
            }
            if(!limit) {
                allSauDaiHoc = await SauDaiHoc.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allSauDaiHoc = await SauDaiHoc.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allSauDaiHoc,
                total: totalSauDaiHoc,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalSauDaiHoc / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await SauDaiHoc.distinct('QuanNhanId')
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
const getSauDaiHocByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const sauDaiHocList = await SauDaiHoc.find({
                QuanNhanId: id
            });
            
            if (!sauDaiHocList || sauDaiHocList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No SauDaiHoc found for the given QuanNhanId'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data:  sauDaiHocList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createSauDaiHoc,
    updateSauDaiHoc,
    getDetailsSauDaiHoc,
    deleteSauDaiHoc,
    getAllSauDaiHoc,
    deleteManySauDaiHoc,
    getAllType,
    getSauDaiHocByQuanNhanId
}