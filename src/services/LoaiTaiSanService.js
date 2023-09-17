const LoaiTaiSan = require("../models/LoaiTaiSanModel")

const createLoaiTaiSan = (newLoaiTaiSan) => {
    return new Promise(async (resolve, reject) => {
        const { LoaiTaiSanId, TenLoaiTaiSan, lock, lockdate, edituser, edittime, GhiChu } = newLoaiTaiSan
        try {
            // const checkLoaiTaiSan = await LoaiTaiSan.findOne({
            //     LoaiTaiSanId: LoaiTaiSanId
            // })
            // if (checkLoaiTaiSan !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'LoaiTaiSan is already'
            //     })
            // }
            const newLoaiTaiSan = await LoaiTaiSan.create({
                LoaiTaiSanId, TenLoaiTaiSan, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newLoaiTaiSan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newLoaiTaiSan
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateLoaiTaiSan = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiTaiSan = await LoaiTaiSan.findOne({
                _id: id
            })
            if (checkLoaiTaiSan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedLoaiTaiSan = await LoaiTaiSan.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLoaiTaiSan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteLoaiTaiSan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiTaiSan = await LoaiTaiSan.findOne({
                _id: id
            })
            if (checkLoaiTaiSan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await LoaiTaiSan.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyLoaiTaiSan = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await LoaiTaiSan.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsLoaiTaiSan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaitaisan = await LoaiTaiSan.findOne({
                _id: id
            })
            if (loaitaisan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaitaisan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllLoaiTaiSan = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalLoaiTaiSan = await LoaiTaiSan.count()
            let allLoaiTaiSan = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await LoaiTaiSan.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalLoaiTaiSan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiTaiSan / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allLoaiTaiSanSort = await LoaiTaiSan.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allLoaiTaiSanSort,
                    total: totalLoaiTaiSan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiTaiSan / limit)
                })
            }
            if (!limit) {
                allLoaiTaiSan = await LoaiTaiSan.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allLoaiTaiSan = await LoaiTaiSan.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLoaiTaiSan,
                total: totalLoaiTaiSan,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalLoaiTaiSan / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await LoaiTaiSan.distinct('TenLoaiTaiSan')
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
const getLoaiTaiSanByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaitaisanList = await LoaiTaiSan.find({
                QuanNhanId: id
            });

            if (!loaitaisanList || loaitaisanList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No LoaiTaiSan found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaitaisanList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createLoaiTaiSan,
    updateLoaiTaiSan,
    getDetailsLoaiTaiSan,
    deleteLoaiTaiSan,
    getAllLoaiTaiSan,
    deleteManyLoaiTaiSan,
    getAllType,
    getLoaiTaiSanByQuanNhanId
}