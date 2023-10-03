const QuaTrinhHocVi = require("../models/QuaTrinhHocViModel")

const createQuaTrinhHocVi = (newQuaTrinhHocVi) => {
    return new Promise(async (resolve, reject) => {
        const { code, QuanNhanId, QuyetDinh, NgayQuyetDinh, HocVi, CaoNhat, edituser, edittime, GhiChu } = newQuaTrinhHocVi
        try {
            // const checkQuaTrinhHocVi = await QuaTrinhHocVi.findOne({
            //     QuaTrinhHocViId: QuaTrinhHocViId
            // })
            // if (checkQuaTrinhHocVi !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'QuaTrinhHocVi is already'
            //     })
            // }
            const newQuaTrinhHocVi = await QuaTrinhHocVi.create({
                code, QuanNhanId, QuyetDinh, NgayQuyetDinh, HocVi, CaoNhat, edituser, edittime, GhiChu
            })
            if (newQuaTrinhHocVi) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newQuaTrinhHocVi
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateQuaTrinhHocVi = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhHocVi = await QuaTrinhHocVi.findOne({
                _id: id
            })
            if (checkQuaTrinhHocVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedQuaTrinhHocVi = await QuaTrinhHocVi.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedQuaTrinhHocVi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteQuaTrinhHocVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhHocVi = await QuaTrinhHocVi.findOne({
                _id: id
            })
            if (checkQuaTrinhHocVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await QuaTrinhHocVi.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyQuaTrinhHocVi = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await QuaTrinhHocVi.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsQuaTrinhHocVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quatrinhHocVi = await QuaTrinhHocVi.findOne({
                _id: id
            })
            if (quatrinhHocVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quatrinhHocVi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllQuaTrinhHocVi = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalQuaTrinhHocVi = await QuaTrinhHocVi.count()
            let allQuaTrinhHocVi = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await QuaTrinhHocVi.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalQuaTrinhHocVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhHocVi / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allQuaTrinhHocViSort = await QuaTrinhHocVi.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allQuaTrinhHocViSort,
                    total: totalQuaTrinhHocVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhHocVi / limit)
                })
            }
            if (!limit) {
                allQuaTrinhHocVi = await QuaTrinhHocVi.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allQuaTrinhHocVi = await QuaTrinhHocVi.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allQuaTrinhHocVi,
                total: totalQuaTrinhHocVi,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalQuaTrinhHocVi / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await QuaTrinhHocVi.distinct('QuanNhanId')
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
const getQuaTrinhHocViByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quatrinhHocViList = await QuaTrinhHocVi.find({
                QuanNhanId: id
            });

            if (!quatrinhHocViList || quatrinhHocViList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No QuaTrinhHocVi found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quatrinhHocViList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createQuaTrinhHocVi,
    updateQuaTrinhHocVi,
    getDetailsQuaTrinhHocVi,
    deleteQuaTrinhHocVi,
    getAllQuaTrinhHocVi,
    deleteManyQuaTrinhHocVi,
    getAllType,
    getQuaTrinhHocViByQuanNhanId
}