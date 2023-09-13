const QuaTrinhHocHam = require("../models/QuaTrinhHocHamModel")

const createQuaTrinhHocHam = (newQuaTrinhHocHam) => {
    return new Promise(async (resolve, reject) => {
        const { code, QuanNhanId, QuyetDinh, NgayQuyetDinh, HocHam, CaoNhat, edituser, edittime, GhiChu } = newQuaTrinhHocHam
        try {
            // const checkQuaTrinhHocHam = await QuaTrinhHocHam.findOne({
            //     QuaTrinhHocHamId: QuaTrinhHocHamId
            // })
            // if (checkQuaTrinhHocHam !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'QuaTrinhHocHam is already'
            //     })
            // }
            const newQuaTrinhHocHam = await QuaTrinhHocHam.create({
                code, QuanNhanId, QuyetDinh, NgayQuyetDinh, HocHam, CaoNhat, edituser, edittime, GhiChu
            })
            if (newQuaTrinhHocHam) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newQuaTrinhHocHam
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateQuaTrinhHocHam = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhHocHam = await QuaTrinhHocHam.findOne({
                _id: id
            })
            if (checkQuaTrinhHocHam === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedQuaTrinhHocHam = await QuaTrinhHocHam.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedQuaTrinhHocHam
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteQuaTrinhHocHam = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhHocHam = await QuaTrinhHocHam.findOne({
                _id: id
            })
            if (checkQuaTrinhHocHam === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await QuaTrinhHocHam.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyQuaTrinhHocHam = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await QuaTrinhHocHam.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsQuaTrinhHocHam = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quatrinhCDCMKT = await QuaTrinhHocHam.findOne({
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

const getAllQuaTrinhHocHam = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalQuaTrinhHocHam = await QuaTrinhHocHam.count()
            let allQuaTrinhHocHam = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await QuaTrinhHocHam.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalQuaTrinhHocHam,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhHocHam / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allQuaTrinhHocHamSort = await QuaTrinhHocHam.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allQuaTrinhHocHamSort,
                    total: totalQuaTrinhHocHam,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhHocHam / limit)
                })
            }
            if (!limit) {
                allQuaTrinhHocHam = await QuaTrinhHocHam.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allQuaTrinhHocHam = await QuaTrinhHocHam.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allQuaTrinhHocHam,
                total: totalQuaTrinhHocHam,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalQuaTrinhHocHam / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await QuaTrinhHocHam.distinct('QuanNhanId')
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
const getQuaTrinhHocHamByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quatrinhHocHamList = await QuaTrinhHocHam.find({
                QuanNhanId: id
            });

            if (!quatrinhHocHamList || quatrinhHocHamList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No QuaTrinhHocHam found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quatrinhHocHamList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createQuaTrinhHocHam,
    updateQuaTrinhHocHam,
    getDetailsQuaTrinhHocHam,
    deleteQuaTrinhHocHam,
    getAllQuaTrinhHocHam,
    deleteManyQuaTrinhHocHam,
    getAllType,
    getQuaTrinhHocHamByQuanNhanId
}