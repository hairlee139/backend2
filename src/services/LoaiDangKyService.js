const LoaiDangKy = require("../models/LoaiDangKyModel")

const createLoaiDangKy = (newLoaiDangKy) => {
    return new Promise(async (resolve, reject) => {
        const { LoaiDangKyId, TenLoaiDangKy, lock, lockdate, edituser, edittime, GhiChu } = newLoaiDangKy
        try {
            // const checkLoaiDangKy = await LoaiDangKy.findOne({
            //     LoaiDangKyId: LoaiDangKyId
            // })
            // if (checkLoaiDangKy !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'LoaiDangKy is already'
            //     })
            // }
            const newLoaiDangKy = await LoaiDangKy.create({
                LoaiDangKyId, TenLoaiDangKy, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newLoaiDangKy) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newLoaiDangKy
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateLoaiDangKy = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiDangKy = await LoaiDangKy.findOne({
                _id: id
            })
            if (checkLoaiDangKy === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedLoaiDangKy = await LoaiDangKy.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedLoaiDangKy
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteLoaiDangKy = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkLoaiDangKy = await LoaiDangKy.findOne({
                _id: id
            })
            if (checkLoaiDangKy === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await LoaiDangKy.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyLoaiDangKy = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await LoaiDangKy.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsLoaiDangKy = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await LoaiDangKy.findOne({
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

const getAllLoaiDangKy = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalLoaiDangKy = await LoaiDangKy.count()
            let allLoaiDangKy = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await LoaiDangKy.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalLoaiDangKy,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiDangKy / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allLoaiDangKySort = await LoaiDangKy.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allLoaiDangKySort,
                    total: totalLoaiDangKy,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalLoaiDangKy / limit)
                })
            }
            if (!limit) {
                allLoaiDangKy = await LoaiDangKy.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allLoaiDangKy = await LoaiDangKy.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allLoaiDangKy,
                total: totalLoaiDangKy,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalLoaiDangKy / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await LoaiDangKy.distinct('TenLoaiDangKy')
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
const getLoaiDangKyByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const loaidangkyList = await LoaiDangKy.find({
                QuanNhanId: id
            });

            if (!loaidangkyList || loaidangkyList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No LoaiDangKy found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: loaidangkyList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createLoaiDangKy,
    updateLoaiDangKy,
    getDetailsLoaiDangKy,
    deleteLoaiDangKy,
    getAllLoaiDangKy,
    deleteManyLoaiDangKy,
    getAllType,
    getLoaiDangKyByQuanNhanId
}