const LoaiQuanHe = require("../models/LoaiQuanHeModel")

const createLoaiQuanHe = (newLoaiQuanHe) => {
    return new Promise(async (resolve, reject) => {
        const { LoaiQuanHeId, TenLoaiQuanHe, lock, lockdate, edituser, edittime, GhiChu } = newLoaiQuanHe
        try {
            // const checkLoaiQuanHe = await LoaiQuanHe.findOne({
            //     LoaiQuanHeId: LoaiQuanHeId
            // })
            // if (checkLoaiQuanHe !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'LoaiQuanHe is already'
            //     })
            // }
            const newLoaiQuanHe = await LoaiQuanHe.create({
                LoaiQuanHeId, TenLoaiQuanHe, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newLoaiQuanHe) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newLoaiQuanHe
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateLoaiQuanHe = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiQuanHe = await LoaiQuanHe.findOne({
                _id: id
            })
            if (checkLoaiQuanHe === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedLoaiQuanHe = await LoaiQuanHe.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLoaiQuanHe
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteLoaiQuanHe = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiQuanHe = await LoaiQuanHe.findOne({
                _id: id
            })
            if (checkLoaiQuanHe === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await LoaiQuanHe.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyLoaiQuanHe = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await LoaiQuanHe.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsLoaiQuanHe = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaiquanhe = await LoaiQuanHe.findOne({
                _id: id
            })
            if (loaiquanhe === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaiquanhe
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllLoaiQuanHe = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalLoaiQuanHe = await LoaiQuanHe.count()
            let allLoaiQuanHe = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await LoaiQuanHe.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalLoaiQuanHe,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiQuanHe / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allLoaiQuanHeSort = await LoaiQuanHe.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allLoaiQuanHeSort,
                    total: totalLoaiQuanHe,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiQuanHe / limit)
                })
            }
            if (!limit) {
                allLoaiQuanHe = await LoaiQuanHe.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allLoaiQuanHe = await LoaiQuanHe.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLoaiQuanHe,
                total: totalLoaiQuanHe,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalLoaiQuanHe / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await LoaiQuanHe.distinct('TenLoaiQuanHe')
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
const getLoaiQuanHeByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaiquanheList = await LoaiQuanHe.find({
                QuanNhanId: id
            });

            if (!loaiquanheList || loaiquanheList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No LoaiQuanHe found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaiquanheList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createLoaiQuanHe,
    updateLoaiQuanHe,
    getDetailsLoaiQuanHe,
    deleteLoaiQuanHe,
    getAllLoaiQuanHe,
    deleteManyLoaiQuanHe,
    getAllType,
    getLoaiQuanHeByQuanNhanId
}