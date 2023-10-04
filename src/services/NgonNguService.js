const NgonNgu = require("../models/NgonNguModel")

const createNgonNgu = (newNgonNgu) => {
    return new Promise(async (resolve, reject) => {
        const { NgonNguId, TenNgonNgu, lock, lockdate, edituser, edittime, GhiChu } = newNgonNgu
        try {
            // const checkNgonNgu = await NgonNgu.findOne({
            //     NgonNguId: NgonNguId
            // })
            // if (checkNgonNgu !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'NgonNgu is already'
            //     })
            // }
            const newNgonNgu = await NgonNgu.create({
                NgonNguId, TenNgonNgu, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newNgonNgu) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newNgonNgu
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateNgonNgu = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNgonNgu = await NgonNgu.findOne({
                _id: id
            })
            if (checkNgonNgu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedNgonNgu = await NgonNgu.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedNgonNgu
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteNgonNgu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNgonNgu = await NgonNgu.findOne({
                _id: id
            })
            if (checkNgonNgu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await NgonNgu.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyNgonNgu = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await NgonNgu.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsNgonNgu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngonngu = await NgonNgu.findOne({
                _id: id
            })
            if (ngonngu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: ngonngu
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllNgonNgu = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalNgonNgu = await NgonNgu.count()
            let allNgonNgu = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await NgonNgu.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalNgonNgu,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalNgonNgu / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allNgonNguSort = await NgonNgu.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allNgonNguSort,
                    total: totalNgonNgu,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalNgonNgu / limit)
                })
            }
            if (!limit) {
                allNgonNgu = await NgonNgu.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allNgonNgu = await NgonNgu.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allNgonNgu,
                total: totalNgonNgu,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalNgonNgu / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await NgonNgu.distinct('TenNgonNgu')
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
const getNgonNguByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngonnguList = await NgonNgu.find({
                QuanNhanId: id
            });

            if (!ngonnguList || ngonnguList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No NgonNgu found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: ngonnguList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createNgonNgu,
    updateNgonNgu,
    getDetailsNgonNgu,
    deleteNgonNgu,
    getAllNgonNgu,
    deleteManyNgonNgu,
    getAllType,
    getNgonNguByQuanNhanId
}