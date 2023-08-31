const QuaTrinhSinhHoatDang = require("../models/QuaTrinhSinhHoatDangModel")

const createQuaTrinhSinhHoatDang = (newQuaTrinhSinhHoatDang) => {
    return new Promise(async (resolve, reject) => {
        const { code,QuanNhanId,QuyetDinh,NgayQuyetDinh,ChucVu,DonVi,KetThuc,TrangThai,edituser,edittime,GhiChu} = newQuaTrinhSinhHoatDang
        try {
            // const checkQuaTrinhSinhHoatDang = await QuaTrinhSinhHoatDang.findOne({
            //     QuaTrinhSinhHoatDangId: QuaTrinhSinhHoatDangId
            // })
            // if (checkQuaTrinhSinhHoatDang !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'QuaTrinhSinhHoatDang is already'
            //     })
            // }
            const newQuaTrinhSinhHoatDang = await QuaTrinhSinhHoatDang.create({
                code,QuanNhanId,QuyetDinh,NgayQuyetDinh,ChucVu,DonVi,KetThuc,TrangThai,edituser,edittime,GhiChu
            })
            if (newQuaTrinhSinhHoatDang) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newQuaTrinhSinhHoatDang
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateQuaTrinhSinhHoatDang = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhSinhHoatDang = await QuaTrinhSinhHoatDang.findOne({
                _id: id
            })
            if (checkQuaTrinhSinhHoatDang === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedQuaTrinhSinhHoatDang = await QuaTrinhSinhHoatDang.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedQuaTrinhSinhHoatDang
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteQuaTrinhSinhHoatDang = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhSinhHoatDang = await QuaTrinhSinhHoatDang.findOne({
                _id: id
            })
            if (checkQuaTrinhSinhHoatDang === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await QuaTrinhSinhHoatDang.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyQuaTrinhSinhHoatDang = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await QuaTrinhSinhHoatDang.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsQuaTrinhSinhHoatDang = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quatrinhsinhhoatdang = await QuaTrinhSinhHoatDang.findOne({
                _id: id
            })
            if (quatrinhsinhhoatdang === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quatrinhsinhhoatdang
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllQuaTrinhSinhHoatDang = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalQuaTrinhSinhHoatDang = await QuaTrinhSinhHoatDang.count()
            let allQuaTrinhSinhHoatDang = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await QuaTrinhSinhHoatDang.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalQuaTrinhSinhHoatDang,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhSinhHoatDang / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allQuaTrinhSinhHoatDangSort = await QuaTrinhSinhHoatDang.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allQuaTrinhSinhHoatDangSort,
                    total: totalQuaTrinhSinhHoatDang,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhSinhHoatDang / limit)
                })
            }
            if(!limit) {
                allQuaTrinhSinhHoatDang = await QuaTrinhSinhHoatDang.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allQuaTrinhSinhHoatDang = await QuaTrinhSinhHoatDang.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allQuaTrinhSinhHoatDang,
                total: totalQuaTrinhSinhHoatDang,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalQuaTrinhSinhHoatDang / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await QuaTrinhSinhHoatDang.distinct('QuanNhanId')
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
const getQuaTrinhSinhHoatDangByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhSinhHoatDangList = await QuaTrinhSinhHoatDang.find({
                QuanNhanId: id
            });
            
            if (!quaTrinhSinhHoatDangList || quaTrinhSinhHoatDangList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No QuaTrinhSinhHoatDang found for the given QuanNhanId'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data:  quaTrinhSinhHoatDangList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createQuaTrinhSinhHoatDang,
    updateQuaTrinhSinhHoatDang,
    getDetailsQuaTrinhSinhHoatDang,
    deleteQuaTrinhSinhHoatDang,
    getAllQuaTrinhSinhHoatDang,
    deleteManyQuaTrinhSinhHoatDang,
    getAllType,
    getQuaTrinhSinhHoatDangByQuanNhanId
}