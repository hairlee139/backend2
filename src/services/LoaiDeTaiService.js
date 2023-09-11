const LoaiDeTai = require("../models/LoaiDeTaiModel")

const createLoaiDeTai = (newLoaiDeTai) => {
    return new Promise(async (resolve, reject) => {
        const { LoaiDeTaiId, TenLoaiDeTai, lock, lockdate, edituser, edittime, GhiChu } = newLoaiDeTai
        try {
            // const checkLoaiDeTai = await LoaiDeTai.findOne({
            //     LoaiDeTaiId: LoaiDeTaiId
            // })
            // if (checkLoaiDeTai !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'LoaiDeTai is already'
            //     })
            // }
            const newLoaiDeTai = await LoaiDeTai.create({
                LoaiDeTaiId, TenLoaiDeTai, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newLoaiDeTai) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newLoaiDeTai
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateLoaiDeTai = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiDeTai = await LoaiDeTai.findOne({
                _id: id
            })
            if (checkLoaiDeTai === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedLoaiDeTai = await LoaiDeTai.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLoaiDeTai
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteLoaiDeTai = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiDeTai = await LoaiDeTai.findOne({
                _id: id
            })
            if (checkLoaiDeTai === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await LoaiDeTai.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyLoaiDeTai = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await LoaiDeTai.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsLoaiDeTai = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await LoaiDeTai.findOne({
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

const getAllLoaiDeTai = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalLoaiDeTai = await LoaiDeTai.count()
            let allLoaiDeTai = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await LoaiDeTai.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalLoaiDeTai,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiDeTai / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allLoaiDeTaiSort = await LoaiDeTai.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allLoaiDeTaiSort,
                    total: totalLoaiDeTai,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiDeTai / limit)
                })
            }
            if (!limit) {
                allLoaiDeTai = await LoaiDeTai.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allLoaiDeTai = await LoaiDeTai.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLoaiDeTai,
                total: totalLoaiDeTai,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalLoaiDeTai / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await LoaiDeTai.distinct('TenLoaiDeTai')
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
const getLoaiDeTaiByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaidetaiList = await LoaiDeTai.find({
                QuanNhanId: id
            });

            if (!loaidetaiList || loaidetaiList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No LoaiDeTai found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaidetaiList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createLoaiDeTai,
    updateLoaiDeTai,
    getDetailsLoaiDeTai,
    deleteLoaiDeTai,
    getAllLoaiDeTai,
    deleteManyLoaiDeTai,
    getAllType,
    getLoaiDeTaiByQuanNhanId
}