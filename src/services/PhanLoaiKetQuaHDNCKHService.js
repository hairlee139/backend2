const PhanLoaiKetQua = require("../models/PhanLoaiKetQuaHDNCKHModel")

const createPhanLoaiKetQua = (newPhanLoaiKetQua) => {
    return new Promise(async (resolve, reject) => {
        const { PhanLoaiKetQuaId, TenPhanLoaiKetQua, lock, lockdate, edituser, edittime, GhiChu } = newPhanLoaiKetQua
        try {
            // const checkPhanLoaiKetQua = await PhanLoaiKetQua.findOne({
            //     PhanLoaiKetQuaId: PhanLoaiKetQuaId
            // })
            // if (checkPhanLoaiKetQua !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'PhanLoaiKetQua is already'
            //     })
            // }
            const newPhanLoaiKetQua = await PhanLoaiKetQua.create({
                PhanLoaiKetQuaId, TenPhanLoaiKetQua, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newPhanLoaiKetQua) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newPhanLoaiKetQua
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updatePhanLoaiKetQua = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkPhanLoaiKetQua = await PhanLoaiKetQua.findOne({
                _id: id
            })
            if (checkPhanLoaiKetQua === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedPhanLoaiKetQua = await PhanLoaiKetQua.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedPhanLoaiKetQua
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deletePhanLoaiKetQua = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkPhanLoaiKetQua = await PhanLoaiKetQua.findOne({
                _id: id
            })
            if (checkPhanLoaiKetQua === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await PhanLoaiKetQua.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyPhanLoaiKetQua = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await PhanLoaiKetQua.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsPhanLoaiKetQua = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await PhanLoaiKetQua.findOne({
                _id: id
            })
            if (ngoaingu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: ngoaingu
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllPhanLoaiKetQua = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalPhanLoaiKetQua = await PhanLoaiKetQua.count()
            let allPhanLoaiKetQua = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await PhanLoaiKetQua.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalPhanLoaiKetQua,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalPhanLoaiKetQua / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allPhanLoaiKetQuaSort = await PhanLoaiKetQua.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allPhanLoaiKetQuaSort,
                    total: totalPhanLoaiKetQua,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalPhanLoaiKetQua / limit)
                })
            }
            if (!limit) {
                allPhanLoaiKetQua = await PhanLoaiKetQua.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allPhanLoaiKetQua = await PhanLoaiKetQua.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allPhanLoaiKetQua,
                total: totalPhanLoaiKetQua,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalPhanLoaiKetQua / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await PhanLoaiKetQua.distinct('TenPhanLoaiKetQua')
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
const getPhanLoaiKetQuaByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const phanloaiketquaList = await PhanLoaiKetQua.find({
                QuanNhanId: id
            });

            if (!phanloaiketquaList || phanloaiketquaList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No PhanLoaiKetQua found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: phanloaiketquaList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createPhanLoaiKetQua,
    updatePhanLoaiKetQua,
    getDetailsPhanLoaiKetQua,
    deletePhanLoaiKetQua,
    getAllPhanLoaiKetQua,
    deleteManyPhanLoaiKetQua,
    getAllType,
    getPhanLoaiKetQuaByQuanNhanId
}