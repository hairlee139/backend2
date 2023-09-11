const LoaiHinhDaoTao = require("../models/LoaiHinhDaoTaoModel")

const createLoaiHinhDaoTao = (newLoaiHinhDaoTao) => {
    return new Promise(async (resolve, reject) => {
        const { LoaiHinhDaoTaoId, TenLoaiHinhDaoTao, lock, lockdate, edituser, edittime, GhiChu } = newLoaiHinhDaoTao
        try {
            // const checkLoaiHinhDaoTao = await LoaiHinhDaoTao.findOne({
            //     LoaiHinhDaoTaoId: LoaiHinhDaoTaoId
            // })
            // if (checkLoaiHinhDaoTao !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'LoaiHinhDaoTao is already'
            //     })
            // }
            const newLoaiHinhDaoTao = await LoaiHinhDaoTao.create({
                LoaiHinhDaoTaoId, TenLoaiHinhDaoTao, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newLoaiHinhDaoTao) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newLoaiHinhDaoTao
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateLoaiHinhDaoTao = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiHinhDaoTao = await LoaiHinhDaoTao.findOne({
                _id: id
            })
            if (checkLoaiHinhDaoTao === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedLoaiHinhDaoTao = await LoaiHinhDaoTao.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLoaiHinhDaoTao
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteLoaiHinhDaoTao = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiHinhDaoTao = await LoaiHinhDaoTao.findOne({
                _id: id
            })
            if (checkLoaiHinhDaoTao === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await LoaiHinhDaoTao.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyLoaiHinhDaoTao = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await LoaiHinhDaoTao.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsLoaiHinhDaoTao = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await LoaiHinhDaoTao.findOne({
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

const getAllLoaiHinhDaoTao = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalLoaiHinhDaoTao = await LoaiHinhDaoTao.count()
            let allLoaiHinhDaoTao = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await LoaiHinhDaoTao.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalLoaiHinhDaoTao,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiHinhDaoTao / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allLoaiHinhDaoTaoSort = await LoaiHinhDaoTao.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allLoaiHinhDaoTaoSort,
                    total: totalLoaiHinhDaoTao,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiHinhDaoTao / limit)
                })
            }
            if (!limit) {
                allLoaiHinhDaoTao = await LoaiHinhDaoTao.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allLoaiHinhDaoTao = await LoaiHinhDaoTao.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLoaiHinhDaoTao,
                total: totalLoaiHinhDaoTao,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalLoaiHinhDaoTao / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await LoaiHinhDaoTao.distinct('TenLoaiHinhDaoTao')
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
const getLoaiHinhDaoTaoByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaihinhdaotaoList = await LoaiHinhDaoTao.find({
                QuanNhanId: id
            });

            if (!loaihinhdaotaoList || loaihinhdaotaoList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No LoaiHinhDaoTao found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaihinhdaotaoList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createLoaiHinhDaoTao,
    updateLoaiHinhDaoTao,
    getDetailsLoaiHinhDaoTao,
    deleteLoaiHinhDaoTao,
    getAllLoaiHinhDaoTao,
    deleteManyLoaiHinhDaoTao,
    getAllType,
    getLoaiHinhDaoTaoByQuanNhanId
}