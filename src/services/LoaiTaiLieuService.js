const LoaiTaiLieu = require("../models/LoaiTaiLieuModel")

const createLoaiTaiLieu = (newLoaiTaiLieu) => {
    return new Promise(async (resolve, reject) => {
        const { LoaiTaiLieuId, TenLoaiTaiLieu, lock, lockdate, edituser, edittime, GhiChu } = newLoaiTaiLieu
        try {
            // const checkLoaiTaiLieu = await LoaiTaiLieu.findOne({
            //     LoaiTaiLieuId: LoaiTaiLieuId
            // })
            // if (checkLoaiTaiLieu !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'LoaiTaiLieu is already'
            //     })
            // }
            const newLoaiTaiLieu = await LoaiTaiLieu.create({
                LoaiTaiLieuId, TenLoaiTaiLieu, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newLoaiTaiLieu) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newLoaiTaiLieu
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateLoaiTaiLieu = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiTaiLieu = await LoaiTaiLieu.findOne({
                _id: id
            })
            if (checkLoaiTaiLieu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedLoaiTaiLieu = await LoaiTaiLieu.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLoaiTaiLieu
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteLoaiTaiLieu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiTaiLieu = await LoaiTaiLieu.findOne({
                _id: id
            })
            if (checkLoaiTaiLieu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await LoaiTaiLieu.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyLoaiTaiLieu = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await LoaiTaiLieu.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsLoaiTaiLieu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaitailieu = await LoaiTaiLieu.findOne({
                _id: id
            })
            if (loaitailieu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaitailieu
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllLoaiTaiLieu = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalLoaiTaiLieu = await LoaiTaiLieu.count()
            let allLoaiTaiLieu = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await LoaiTaiLieu.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalLoaiTaiLieu,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiTaiLieu / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allLoaiTaiLieuSort = await LoaiTaiLieu.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allLoaiTaiLieuSort,
                    total: totalLoaiTaiLieu,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiTaiLieu / limit)
                })
            }
            if (!limit) {
                allLoaiTaiLieu = await LoaiTaiLieu.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allLoaiTaiLieu = await LoaiTaiLieu.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLoaiTaiLieu,
                total: totalLoaiTaiLieu,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalLoaiTaiLieu / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await LoaiTaiLieu.distinct('TenLoaiTaiLieu')
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
const getLoaiTaiLieuByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaitailieuList = await LoaiTaiLieu.find({
                QuanNhanId: id
            });

            if (!loaitailieuList || loaitailieuList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No LoaiTaiLieu found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaitailieuList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createLoaiTaiLieu,
    updateLoaiTaiLieu,
    getDetailsLoaiTaiLieu,
    deleteLoaiTaiLieu,
    getAllLoaiTaiLieu,
    deleteManyLoaiTaiLieu,
    getAllType,
    getLoaiTaiLieuByQuanNhanId
}