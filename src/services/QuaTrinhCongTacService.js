const QuaTrinhCongTac = require("../models/QuaTrinhCongTacModel")

const createQuaTrinhCongTac = (newQuaTrinhCongTac) => {
    return new Promise(async (resolve, reject) => {
        const { QuaTrinhCongTacId, QuanNhanId, SoQuyetDinh, NgayQuyetDinh, ChucVu, DonVi, KetThuc, DonViSinhHoatHocThuat, TrangThai, edituser, edittime, GhiChu } = newQuaTrinhCongTac
        try {
            // const checkQuaTrinhCongTac = await QuaTrinhCongTac.findOne({
            //     QuaTrinhCongTacId: QuaTrinhCongTacId
            // })
            // if (checkQuaTrinhCongTac !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'QuaTrinhCongTac is already'
            //     })
            // }
            const newQuaTrinhCongTac = await QuaTrinhCongTac.create({
                QuaTrinhCongTacId,
                QuanNhanId,
                SoQuyetDinh,
                NgayQuyetDinh,
                ChucVu,
                DonVi,
                KetThuc,
                DonViSinhHoatHocThuat,
                TrangThai,
                edituser,
                edittime,
                GhiChu
            })
            if (newQuaTrinhCongTac) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newQuaTrinhCongTac
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateQuaTrinhCongTac = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhCongTac = await QuaTrinhCongTac.findOne({
                _id: id
            })
            if (checkQuaTrinhCongTac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedQuaTrinhCongTac = await QuaTrinhCongTac.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedQuaTrinhCongTac
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteQuaTrinhCongTac = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhCongTac = await QuaTrinhCongTac.findOne({
                _id: id
            })
            if (checkQuaTrinhCongTac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await QuaTrinhCongTac.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyQuaTrinhCongTac = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await QuaTrinhCongTac.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsQuaTrinhCongTac = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quatrinhcongtac = await QuaTrinhCongTac.findOne({
                _id: id
            })
            if (quatrinhcongtac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quatrinhcongtac
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllQuaTrinhCongTac = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalQuaTrinhCongTac = await QuaTrinhCongTac.count()
            let allQuaTrinhCongTac = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await QuaTrinhCongTac.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalQuaTrinhCongTac,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhCongTac / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allQuaTrinhCongTacSort = await QuaTrinhCongTac.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allQuaTrinhCongTacSort,
                    total: totalQuaTrinhCongTac,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhCongTac / limit)
                })
            }
            if (!limit) {
                allQuaTrinhCongTac = await QuaTrinhCongTac.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allQuaTrinhCongTac = await QuaTrinhCongTac.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allQuaTrinhCongTac,
                total: totalQuaTrinhCongTac,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalQuaTrinhCongTac / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await QuaTrinhCongTac.distinct('QuanNhanId')
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
const getQuaTrinhCongTacByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhCongTacList = await QuaTrinhCongTac.find({
                QuanNhanId: id
            });

            if (!quaTrinhCongTacList || quaTrinhCongTacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No QuaTrinhCongTac found for the given QuanNhanId'
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
    createQuaTrinhCongTac,
    updateQuaTrinhCongTac,
    getDetailsQuaTrinhCongTac,
    deleteQuaTrinhCongTac,
    getAllQuaTrinhCongTac,
    deleteManyQuaTrinhCongTac,
    getAllType,
    getQuaTrinhCongTacByQuanNhanId
}