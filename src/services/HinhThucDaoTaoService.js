const HinhThucDaoTao = require("../models/HinhThucDaoTaoModel")

const createHinhThucDaoTao = (newHinhThucDaoTao) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucDaoTaoId, TenHinhThucDaoTao, lock, lockdate, edituser, edittime, GhiChu } = newHinhThucDaoTao
        try {
            // const checkHinhThucDaoTao = await HinhThucDaoTao.findOne({
            //     HinhThucDaoTaoId: HinhThucDaoTaoId
            // })
            // if (checkHinhThucDaoTao !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HinhThucDaoTao is already'
            //     })
            // }
            const newHinhThucDaoTao = await HinhThucDaoTao.create({
                HinhThucDaoTaoId, TenHinhThucDaoTao, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newHinhThucDaoTao) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHinhThucDaoTao
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHinhThucDaoTao = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucDaoTao = await HinhThucDaoTao.findOne({
                _id: id
            })
            if (checkHinhThucDaoTao === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedHinhThucDaoTao = await HinhThucDaoTao.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHinhThucDaoTao
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHinhThucDaoTao = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucDaoTao = await HinhThucDaoTao.findOne({
                _id: id

            })
            console(_id, id)
            if (checkHinhThucDaoTao === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await HinhThucDaoTao.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHinhThucDaoTao = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HinhThucDaoTao.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHinhThucDaoTao = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await HinhThucDaoTao.findOne({
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

const getAllHinhThucDaoTao = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHinhThucDaoTao = await HinhThucDaoTao.count()
            let allHinhThucDaoTao = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HinhThucDaoTao.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHinhThucDaoTao,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucDaoTao / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHinhThucDaoTaoSort = await HinhThucDaoTao.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHinhThucDaoTaoSort,
                    total: totalHinhThucDaoTao,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucDaoTao / limit)
                })
            }
            if (!limit) {
                allHinhThucDaoTao = await HinhThucDaoTao.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHinhThucDaoTao = await HinhThucDaoTao.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHinhThucDaoTao,
                total: totalHinhThucDaoTao,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHinhThucDaoTao / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HinhThucDaoTao.distinct('TenHinhThucDaoTao')
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
const getHinhThucDaoTaoByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hinhthucdaotaoList = await HinhThucDaoTao.find({
                QuanNhanId: id
            });

            if (!hinhthucdaotaoList || hinhthucdaotaoList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HinhThucDaoTao found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: hinhthucdaotaoList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHinhThucDaoTao,
    updateHinhThucDaoTao,
    getDetailsHinhThucDaoTao,
    deleteHinhThucDaoTao,
    getAllHinhThucDaoTao,
    deleteManyHinhThucDaoTao,
    getAllType,
    getHinhThucDaoTaoByQuanNhanId
}