const QuaTrinhKyLuat = require("../models/QuaTrinhKyLuatModel")

const createQuaTrinhKyLuat = (newQuaTrinhKyLuat) => {
    return new Promise(async (resolve, reject) => {
        const { QuaTrinhKyLuatId, QuanNhanId, SoQuyetDinh, NgayQuyetDinh, TenQuyetDinh, CapKyLuat, HinhThucKyLuat, TrangThai, edituser, edittime, GhiChu } = newQuaTrinhKyLuat
        try {
            // const checkQuaTrinhKyLuat = await QuaTrinhKyLuat.findOne({
            //     QuaTrinhKyLuatId: QuaTrinhKyLuatId
            // })
            // if (checkQuaTrinhKyLuat !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'QuaTrinhKyLuat is already'
            //     })
            // }
            const newQuaTrinhKyLuat = await QuaTrinhKyLuat.create({
                QuaTrinhKyLuatId, QuanNhanId, SoQuyetDinh, NgayQuyetDinh, TenQuyetDinh, CapKyLuat, HinhThucKyLuat, TrangThai, edituser, edittime, GhiChu
            })
            if (newQuaTrinhKyLuat) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newQuaTrinhKyLuat
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateQuaTrinhKyLuat = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhKyLuat = await QuaTrinhKyLuat.findOne({
                _id: id
            })
            if (checkQuaTrinhKyLuat === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedQuaTrinhKyLuat = await QuaTrinhKyLuat.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedQuaTrinhKyLuat
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteQuaTrinhKyLuat = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhKyLuat = await QuaTrinhKyLuat.findOne({
                _id: id
            })
            if (checkQuaTrinhKyLuat === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await QuaTrinhKyLuat.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyQuaTrinhKyLuat = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await QuaTrinhKyLuat.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsQuaTrinhKyLuat = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quatrinhkyluat = await QuaTrinhKyLuat.findOne({
                _id: id
            })
            if (quatrinhkyluat === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quatrinhkyluat
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllQuaTrinhKyLuat = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalQuaTrinhKyLuat = await QuaTrinhKyLuat.count()
            let allQuaTrinhKyLuat = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await QuaTrinhKyLuat.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalQuaTrinhKyLuat,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhKyLuat / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allQuaTrinhKyLuatSort = await QuaTrinhKyLuat.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allQuaTrinhKyLuatSort,
                    total: totalQuaTrinhKyLuat,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhKyLuat / limit)
                })
            }
            if (!limit) {
                allQuaTrinhKyLuat = await QuaTrinhKyLuat.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allQuaTrinhKyLuat = await QuaTrinhKyLuat.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allQuaTrinhKyLuat,
                total: totalQuaTrinhKyLuat,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalQuaTrinhKyLuat / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await QuaTrinhKyLuat.distinct('QuanNhanId')
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
const getQuaTrinhKyLuatByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhCongTacList = await QuaTrinhKyLuat.find({
                QuanNhanId: id
            });

            if (!quaTrinhCongTacList || quaTrinhCongTacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No QuaTrinhKyLuat found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quaTrinhCongTacList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createQuaTrinhKyLuat,
    updateQuaTrinhKyLuat,
    getDetailsQuaTrinhKyLuat,
    deleteQuaTrinhKyLuat,
    getAllQuaTrinhKyLuat,
    deleteManyQuaTrinhKyLuat,
    getAllType,
    getQuaTrinhKyLuatByQuanNhanId
}