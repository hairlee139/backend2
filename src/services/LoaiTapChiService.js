const LoaiTapChi = require("../models/LoaiTapChiModel")

const createLoaiTapChi = (newLoaiTapChi) => {
    return new Promise(async (resolve, reject) => {
        const { LoaiTapChiId, TenLoaiTapChi, lock, lockdate, edituser, edittime, GhiChu } = newLoaiTapChi
        try {
            // const checkLoaiTapChi = await LoaiTapChi.findOne({
            //     LoaiTapChiId: LoaiTapChiId
            // })
            // if (checkLoaiTapChi !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'LoaiTapChi is already'
            //     })
            // }
            const newLoaiTapChi = await LoaiTapChi.create({
                LoaiTapChiId, TenLoaiTapChi, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newLoaiTapChi) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newLoaiTapChi
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateLoaiTapChi = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiTapChi = await LoaiTapChi.findOne({
                _id: id
            })
            if (checkLoaiTapChi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedLoaiTapChi = await LoaiTapChi.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLoaiTapChi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteLoaiTapChi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiTapChi = await LoaiTapChi.findOne({
                _id: id
            })
            if (checkLoaiTapChi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await LoaiTapChi.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyLoaiTapChi = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await LoaiTapChi.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsLoaiTapChi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaitapchi = await LoaiTapChi.findOne({
                _id: id
            })
            if (loaitapchi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaitapchi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllLoaiTapChi = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalLoaiTapChi = await LoaiTapChi.count()
            let allLoaiTapChi = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await LoaiTapChi.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalLoaiTapChi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiTapChi / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allLoaiTapChiSort = await LoaiTapChi.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allLoaiTapChiSort,
                    total: totalLoaiTapChi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiTapChi / limit)
                })
            }
            if (!limit) {
                allLoaiTapChi = await LoaiTapChi.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allLoaiTapChi = await LoaiTapChi.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLoaiTapChi,
                total: totalLoaiTapChi,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalLoaiTapChi / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await LoaiTapChi.distinct('TenLoaiTapChi')
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
const getLoaiTapChiByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaitapchiList = await LoaiTapChi.find({
                QuanNhanId: id
            });

            if (!loaitapchiList || loaitapchiList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No LoaiTapChi found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaitapchiList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createLoaiTapChi,
    updateLoaiTapChi,
    getDetailsLoaiTapChi,
    deleteLoaiTapChi,
    getAllLoaiTapChi,
    deleteManyLoaiTapChi,
    getAllType,
    getLoaiTapChiByQuanNhanId
}