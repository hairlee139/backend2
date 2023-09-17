const QuaTrinhKhenThuong = require("../models/QuaTrinhKhenThuongModel")

const createQuaTrinhKhenThuong = (newQuaTrinhKhenThuong) => {
    return new Promise(async (resolve, reject) => {
        const { QuaTrinhKhenThuongId, QuanNhanId, SoQuyetDinh, NgayQuyetDinh, TenQuyetDinh, LoaiKhenThuong, CapKhenThuong, TrangThai, edituser, edittime, GhiChu } = newQuaTrinhKhenThuong
        try {
            // const checkQuaTrinhKhenThuong = await QuaTrinhKhenThuong.findOne({
            //     QuaTrinhKhenThuongId: QuaTrinhKhenThuongId
            // })
            // if (checkQuaTrinhKhenThuong !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'QuaTrinhKhenThuong is already'
            //     })
            // }
            const newQuaTrinhKhenThuong = await QuaTrinhKhenThuong.create({
                QuaTrinhKhenThuongId, QuanNhanId, SoQuyetDinh, NgayQuyetDinh, TenQuyetDinh, LoaiKhenThuong, CapKhenThuong, TrangThai, edituser, edittime, GhiChu
            })
            if (newQuaTrinhKhenThuong) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newQuaTrinhKhenThuong
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateQuaTrinhKhenThuong = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhKhenThuong = await QuaTrinhKhenThuong.findOne({
                _id: id
            })
            if (checkQuaTrinhKhenThuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedQuaTrinhKhenThuong = await QuaTrinhKhenThuong.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedQuaTrinhKhenThuong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteQuaTrinhKhenThuong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuaTrinhKhenThuong = await QuaTrinhKhenThuong.findOne({
                _id: id
            })
            if (checkQuaTrinhKhenThuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await QuaTrinhKhenThuong.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyQuaTrinhKhenThuong = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await QuaTrinhKhenThuong.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsQuaTrinhKhenThuong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quatrinhkhenthuong = await QuaTrinhKhenThuong.findOne({
                _id: id
            })
            if (quatrinhkhenthuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quatrinhkhenthuong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllQuaTrinhKhenThuong = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalQuaTrinhKhenThuong = await QuaTrinhKhenThuong.count()
            let allQuaTrinhKhenThuong = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await QuaTrinhKhenThuong.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalQuaTrinhKhenThuong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhKhenThuong / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allQuaTrinhKhenThuongSort = await QuaTrinhKhenThuong.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allQuaTrinhKhenThuongSort,
                    total: totalQuaTrinhKhenThuong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuaTrinhKhenThuong / limit)
                })
            }
            if (!limit) {
                allQuaTrinhKhenThuong = await QuaTrinhKhenThuong.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allQuaTrinhKhenThuong = await QuaTrinhKhenThuong.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allQuaTrinhKhenThuong,
                total: totalQuaTrinhKhenThuong,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalQuaTrinhKhenThuong / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await QuaTrinhKhenThuong.distinct('QuanNhanId')
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
const getQuaTrinhKhenThuongByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhCongTacList = await QuaTrinhKhenThuong.find({
                QuanNhanId: id
            });

            if (!quaTrinhCongTacList || quaTrinhCongTacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No QuaTrinhKhenThuong found for the given QuanNhanId'
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
    createQuaTrinhKhenThuong,
    updateQuaTrinhKhenThuong,
    getDetailsQuaTrinhKhenThuong,
    deleteQuaTrinhKhenThuong,
    getAllQuaTrinhKhenThuong,
    deleteManyQuaTrinhKhenThuong,
    getAllType,
    getQuaTrinhKhenThuongByQuanNhanId
}