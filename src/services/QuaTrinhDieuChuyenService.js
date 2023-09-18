const DieuChuyenCanBo = require("../models/QuatrinhDieuChuyenModel")

const createDieuChuyenCanBo = (newDieuChuyenCanBo) => {
    return new Promise(async (resolve, reject) => {
        const { DieuChuyenCanBoId, QuanNhanId, SoQuyetDinh, NgayQuyetDinh, DonViQuyetDinh, ChucVuHienTai, DonViHienTai, DonViDen, ChucVuDen, NgayDenNhanChuc, TrangThai, edituser, edittime, GhiChu } = newDieuChuyenCanBo
        try {
            // const checkDieuChuyenCanBo = await DieuChuyenCanBo.findOne({
            //     DieuChuyenCanBoId: DieuChuyenCanBoId
            // })
            // if (checkDieuChuyenCanBo !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'DieuChuyenCanBo is already'
            //     })
            // }
            const newDieuChuyenCanBo = await DieuChuyenCanBo.create({
                DieuChuyenCanBoId, QuanNhanId, SoQuyetDinh, NgayQuyetDinh, DonViQuyetDinh, ChucVuHienTai, DonViHienTai, DonViDen, ChucVuDen, NgayDenNhanChuc, TrangThai, edituser, edittime, GhiChu
            })
            if (newDieuChuyenCanBo) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDieuChuyenCanBo
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDieuChuyenCanBo = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDieuChuyenCanBo = await DieuChuyenCanBo.findOne({
                _id: id
            })
            if (checkDieuChuyenCanBo === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedDieuChuyenCanBo = await DieuChuyenCanBo.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDieuChuyenCanBo
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDieuChuyenCanBo = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDieuChuyenCanBo = await DieuChuyenCanBo.findOne({
                _id: id
            })
            if (checkDieuChuyenCanBo === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await DieuChuyenCanBo.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDieuChuyenCanBo = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DieuChuyenCanBo.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDieuChuyenCanBo = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quatrinhdieuchuyen = await DieuChuyenCanBo.findOne({
                _id: id
            })
            if (quatrinhdieuchuyen === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quatrinhdieuchuyen
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDieuChuyenCanBo = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDieuChuyenCanBo = await DieuChuyenCanBo.count()
            let allDieuChuyenCanBo = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DieuChuyenCanBo.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDieuChuyenCanBo,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDieuChuyenCanBo / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDieuChuyenCanBoSort = await DieuChuyenCanBo.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDieuChuyenCanBoSort,
                    total: totalDieuChuyenCanBo,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDieuChuyenCanBo / limit)
                })
            }
            if (!limit) {
                allDieuChuyenCanBo = await DieuChuyenCanBo.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDieuChuyenCanBo = await DieuChuyenCanBo.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDieuChuyenCanBo,
                total: totalDieuChuyenCanBo,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDieuChuyenCanBo / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DieuChuyenCanBo.distinct('QuanNhanId')
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
const getDieuChuyenCanBoByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhCongTacList = await DieuChuyenCanBo.find({
                QuanNhanId: id
            });

            if (!quaTrinhCongTacList || quaTrinhCongTacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No DieuChuyenCanBo found for the given QuanNhanId'
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
    createDieuChuyenCanBo,
    updateDieuChuyenCanBo,
    getDetailsDieuChuyenCanBo,
    deleteDieuChuyenCanBo,
    getAllDieuChuyenCanBo,
    deleteManyDieuChuyenCanBo,
    getAllType,
    getDieuChuyenCanBoByQuanNhanId
}