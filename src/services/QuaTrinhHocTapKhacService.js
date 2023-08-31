const QuaTrinhHocTapKhac = require("../models/QuaTrinhHocTapKhacModel")

const createQuaTrinhHocTapKhac = (newQuaTrinhHocTapKhac) => {
    return new Promise(async (resolve, reject) => {
        const {code,QuanNhanId,Ten,Loai,Truong,NamNhan,edituser,edittime,GhiChu} = newQuaTrinhHocTapKhac
        try {
            // const checkQuaTrinhHocTapKhac = await QuaTrinhHocTapKhac.findOne({
            //     QuaTrinhHocTapKhacId: QuaTrinhHocTapKhacId
            // })
            // if (checkQuaTrinhHocTapKhac !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'QuaTrinhHocTapKhac is already'
            //     })
            // }
            const newQuaTrinhHocTapKhac = await QuaTrinhHocTapKhac.create({
                code,QuanNhanId,Ten,Loai,Truong,NamNhan,edituser,edittime,GhiChu
            })
            if (newQuaTrinhHocTapKhac) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newQuaTrinhHocTapKhac
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateQuaTrinhHocTapKhac = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhHocTapKhac = await QuaTrinhHocTapKhac.findOne({
                _id: id
            })
            if (checkQuaTrinhHocTapKhac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedQuaTrinhHocTapKhac = await QuaTrinhHocTapKhac.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedQuaTrinhHocTapKhac
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteQuaTrinhHocTapKhac = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhHocTapKhac = await QuaTrinhHocTapKhac.findOne({
                _id: id
            })
            if (checkQuaTrinhHocTapKhac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await QuaTrinhHocTapKhac.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyQuaTrinhHocTapKhac = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await QuaTrinhHocTapKhac.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsQuaTrinhHocTapKhac = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quatrinhhoctapkhac = await QuaTrinhHocTapKhac.findOne({
                _id: id
            })
            if (quatrinhhoctapkhac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quatrinhhoctapkhac
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllQuaTrinhHocTapKhac = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalQuaTrinhHocTapKhac = await QuaTrinhHocTapKhac.count()
            let allQuaTrinhHocTapKhac = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await QuaTrinhHocTapKhac.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalQuaTrinhHocTapKhac,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhHocTapKhac / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allQuaTrinhHocTapKhacSort = await QuaTrinhHocTapKhac.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allQuaTrinhHocTapKhacSort,
                    total: totalQuaTrinhHocTapKhac,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhHocTapKhac / limit)
                })
            }
            if(!limit) {
                allQuaTrinhHocTapKhac = await QuaTrinhHocTapKhac.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allQuaTrinhHocTapKhac = await QuaTrinhHocTapKhac.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allQuaTrinhHocTapKhac,
                total: totalQuaTrinhHocTapKhac,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalQuaTrinhHocTapKhac / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await QuaTrinhHocTapKhac.distinct('QuanNhanId')
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
const getQuaTrinhHocTapKhacByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhHocTapKhacList = await QuaTrinhHocTapKhac.find({
                QuanNhanId: id
            });
            
            if (!quaTrinhHocTapKhacList || quaTrinhHocTapKhacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No QuaTrinhHocTapKhac found for the given QuanNhanId'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data:  quaTrinhHocTapKhacList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createQuaTrinhHocTapKhac,
    updateQuaTrinhHocTapKhac,
    getDetailsQuaTrinhHocTapKhac,
    deleteQuaTrinhHocTapKhac,
    getAllQuaTrinhHocTapKhac,
    deleteManyQuaTrinhHocTapKhac,
    getAllType,
    getQuaTrinhHocTapKhacByQuanNhanId
}