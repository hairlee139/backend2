const QuaTrinhQuanHam = require("../models/QuaTrinhQuanHamModel")

const createQuaTrinhQuanHam = (newQuaTrinhQuanHam) => {
    return new Promise(async (resolve, reject) => {
        const { code,QuanNhanId,QuyetDinh,NgayQuyetDinh,QuanHam,edituser,edittime,GhiChu} = newQuaTrinhQuanHam
        try {
            // const checkQuaTrinhQuanHam = await QuaTrinhQuanHam.findOne({
            //     QuaTrinhQuanHamId: QuaTrinhQuanHamId
            // })
            // if (checkQuaTrinhQuanHam !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'QuaTrinhQuanHam is already'
            //     })
            // }
            const newQuaTrinhQuanHam = await QuaTrinhQuanHam.create({
                code,QuanNhanId,QuyetDinh,NgayQuyetDinh,QuanHam,edituser,edittime,GhiChu
            })
            if (newQuaTrinhQuanHam) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newQuaTrinhQuanHam
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateQuaTrinhQuanHam = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhQuanHam = await QuaTrinhQuanHam.findOne({
                _id: id
            })
            if (checkQuaTrinhQuanHam === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedQuaTrinhQuanHam = await QuaTrinhQuanHam.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedQuaTrinhQuanHam
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteQuaTrinhQuanHam = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhQuanHam = await QuaTrinhQuanHam.findOne({
                _id: id
            })
            if (checkQuaTrinhQuanHam === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await QuaTrinhQuanHam.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyQuaTrinhQuanHam = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await QuaTrinhQuanHam.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsQuaTrinhQuanHam = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quatrinhquanham = await QuaTrinhQuanHam.findOne({
                _id: id
            })
            if (quatrinhquanham === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quatrinhquanham
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllQuaTrinhQuanHam = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalQuaTrinhQuanHam = await QuaTrinhQuanHam.count()
            let allQuaTrinhQuanHam = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await QuaTrinhQuanHam.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalQuaTrinhQuanHam,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhQuanHam / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allQuaTrinhQuanHamSort = await QuaTrinhQuanHam.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allQuaTrinhQuanHamSort,
                    total: totalQuaTrinhQuanHam,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhQuanHam / limit)
                })
            }
            if(!limit) {
                allQuaTrinhQuanHam = await QuaTrinhQuanHam.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allQuaTrinhQuanHam = await QuaTrinhQuanHam.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allQuaTrinhQuanHam,
                total: totalQuaTrinhQuanHam,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalQuaTrinhQuanHam / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await QuaTrinhQuanHam.distinct('QuanNhanId')
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
const getQuaTrinhQuanHamByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhQuanHamList = await QuaTrinhQuanHam.find({
                QuanNhanId: id
            });
            
            if (!quaTrinhQuanHamList || quaTrinhQuanHamList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No QuaTrinhQuanHam found for the given QuanNhanId'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data:  quaTrinhQuanHamList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createQuaTrinhQuanHam,
    updateQuaTrinhQuanHam,
    getDetailsQuaTrinhQuanHam,
    deleteQuaTrinhQuanHam,
    getAllQuaTrinhQuanHam,
    deleteManyQuaTrinhQuanHam,
    getAllType,
    getQuaTrinhQuanHamByQuanNhanId
}