const QuaTrinhCDCMKT = require("../models/QuaTrinhCDCMKTModel")

const createQuaTrinhCDCMKT = (newQuaTrinhCDCMKT) => {
    return new Promise(async (resolve, reject) => {
        const { code,QuanNhanId,QuyetDinh,NgayQuyetDinh,CDCMKT,CaoNhat,edituser,edittime,GhiChu} = newQuaTrinhCDCMKT
        try {
            // const checkQuaTrinhCDCMKT = await QuaTrinhCDCMKT.findOne({
            //     QuaTrinhCDCMKTId: QuaTrinhCDCMKTId
            // })
            // if (checkQuaTrinhCDCMKT !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'QuaTrinhCDCMKT is already'
            //     })
            // }
            const newQuaTrinhCDCMKT = await QuaTrinhCDCMKT.create({
                code,QuanNhanId,QuyetDinh,NgayQuyetDinh,CDCMKT,CaoNhat,edituser,edittime,GhiChu
            })
            if (newQuaTrinhCDCMKT) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newQuaTrinhCDCMKT
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateQuaTrinhCDCMKT = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhCDCMKT = await QuaTrinhCDCMKT.findOne({
                _id: id
            })
            if (checkQuaTrinhCDCMKT === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedQuaTrinhCDCMKT = await QuaTrinhCDCMKT.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedQuaTrinhCDCMKT
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteQuaTrinhCDCMKT = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhCDCMKT = await QuaTrinhCDCMKT.findOne({
                _id: id
            })
            if (checkQuaTrinhCDCMKT === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await QuaTrinhCDCMKT.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyQuaTrinhCDCMKT = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await QuaTrinhCDCMKT.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsQuaTrinhCDCMKT = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quatrinhCDCMKT = await QuaTrinhCDCMKT.findOne({
                _id: id
            })
            if (quatrinhCDCMKT === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quatrinhCDCMKT
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllQuaTrinhCDCMKT = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalQuaTrinhCDCMKT = await QuaTrinhCDCMKT.count()
            let allQuaTrinhCDCMKT = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await QuaTrinhCDCMKT.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalQuaTrinhCDCMKT,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhCDCMKT / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allQuaTrinhCDCMKTSort = await QuaTrinhCDCMKT.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allQuaTrinhCDCMKTSort,
                    total: totalQuaTrinhCDCMKT,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhCDCMKT / limit)
                })
            }
            if(!limit) {
                allQuaTrinhCDCMKT = await QuaTrinhCDCMKT.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allQuaTrinhCDCMKT = await QuaTrinhCDCMKT.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allQuaTrinhCDCMKT,
                total: totalQuaTrinhCDCMKT,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalQuaTrinhCDCMKT / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await QuaTrinhCDCMKT.distinct('QuanNhanId')
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
const getQuaTrinhCDCMKTByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhCDCMKTList = await QuaTrinhCDCMKT.find({
                QuanNhanId: id
            });
            
            if (!quaTrinhCDCMKTList || quaTrinhCDCMKTList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No QuaTrinhCDCMKT found for the given QuanNhanId'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data:  quaTrinhCDCMKTList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createQuaTrinhCDCMKT,
    updateQuaTrinhCDCMKT,
    getDetailsQuaTrinhCDCMKT,
    deleteQuaTrinhCDCMKT,
    getAllQuaTrinhCDCMKT,
    deleteManyQuaTrinhCDCMKT,
    getAllType,
    getQuaTrinhCDCMKTByQuanNhanId
}