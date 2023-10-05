const NganhXetChucDanh = require("../models/NganhXetChucDanhModel")

const createNganhXetChucDanh = (newNganhXetChucDanh) => {
    return new Promise(async (resolve, reject) => {
        const { NganhXetChucDanhId, TenNganhXetChucDanh, lock, lockdate, edituser, edittime, GhiChu } = newNganhXetChucDanh
        try {
            // const checkNganhXetChucDanh = await NganhXetChucDanh.findOne({
            //     NganhXetChucDanhId: NganhXetChucDanhId
            // })
            // if (checkNganhXetChucDanh !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'NganhXetChucDanh is already'
            //     })
            // }
            const newNganhXetChucDanh = await NganhXetChucDanh.create({
                NganhXetChucDanhId, TenNganhXetChucDanh, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newNganhXetChucDanh) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newNganhXetChucDanh
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateNganhXetChucDanh = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNganhXetChucDanh = await NganhXetChucDanh.findOne({
                _id: id
            })
            if (checkNganhXetChucDanh === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedNganhXetChucDanh = await NganhXetChucDanh.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedNganhXetChucDanh
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteNganhXetChucDanh = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNganhXetChucDanh = await NganhXetChucDanh.findOne({
                _id: id
            })
            if (checkNganhXetChucDanh === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await NganhXetChucDanh.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyNganhXetChucDanh = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await NganhXetChucDanh.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsNganhXetChucDanh = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const nganhxetchucdanh = await NganhXetChucDanh.findOne({
                _id: id
            })
            if (nganhxetchucdanh === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: nganhxetchucdanh
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllNganhXetChucDanh = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalNganhXetChucDanh = await NganhXetChucDanh.count()
            let allNganhXetChucDanh = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await NganhXetChucDanh.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalNganhXetChucDanh,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalNganhXetChucDanh / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allNganhXetChucDanhSort = await NganhXetChucDanh.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allNganhXetChucDanhSort,
                    total: totalNganhXetChucDanh,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalNganhXetChucDanh / limit)
                })
            }
            if (!limit) {
                allNganhXetChucDanh = await NganhXetChucDanh.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allNganhXetChucDanh = await NganhXetChucDanh.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allNganhXetChucDanh,
                total: totalNganhXetChucDanh,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalNganhXetChucDanh / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await NganhXetChucDanh.distinct('TenNganhXetChucDanh')
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
const getNganhXetChucDanhByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const nganhxetchucdanhList = await NganhXetChucDanh.find({
                QuanNhanId: id
            });

            if (!nganhxetchucdanhList || nganhxetchucdanhList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No NganhXetChucDanh found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: nganhxetchucdanhList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createNganhXetChucDanh,
    updateNganhXetChucDanh,
    getDetailsNganhXetChucDanh,
    deleteNganhXetChucDanh,
    getAllNganhXetChucDanh,
    deleteManyNganhXetChucDanh,
    getAllType,
    getNganhXetChucDanhByQuanNhanId
}