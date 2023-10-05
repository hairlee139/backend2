const NhomHoatDongNC = require("../models/NhomHoatDongNCModel")

const createNhomHoatDongNC = (newNhomHoatDongNC) => {
    return new Promise(async (resolve, reject) => {
        const { NhomHoatDongNCId, TenNhomHoatDongNC, lock, lockdate, edituser, edittime, GhiChu } = newNhomHoatDongNC
        try {
            // const checkNhomHoatDongNC = await NhomHoatDongNC.findOne({
            //     NhomHoatDongNCId: NhomHoatDongNCId
            // })
            // if (checkNhomHoatDongNC !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'NhomHoatDongNC is already'
            //     })
            // }
            const newNhomHoatDongNC = await NhomHoatDongNC.create({
                NhomHoatDongNCId, TenNhomHoatDongNC, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newNhomHoatDongNC) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newNhomHoatDongNC
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateNhomHoatDongNC = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNhomHoatDongNC = await NhomHoatDongNC.findOne({
                _id: id
            })
            if (checkNhomHoatDongNC === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedNhomHoatDongNC = await NhomHoatDongNC.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedNhomHoatDongNC
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteNhomHoatDongNC = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNhomHoatDongNC = await NhomHoatDongNC.findOne({
                _id: id
            })
            if (checkNhomHoatDongNC === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await NhomHoatDongNC.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyNhomHoatDongNC = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await NhomHoatDongNC.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsNhomHoatDongNC = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await NhomHoatDongNC.findOne({
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

const getAllNhomHoatDongNC = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalNhomHoatDongNC = await NhomHoatDongNC.count()
            let allNhomHoatDongNC = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await NhomHoatDongNC.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalNhomHoatDongNC,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalNhomHoatDongNC / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allNhomHoatDongNCSort = await NhomHoatDongNC.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allNhomHoatDongNCSort,
                    total: totalNhomHoatDongNC,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalNhomHoatDongNC / limit)
                })
            }
            if (!limit) {
                allNhomHoatDongNC = await NhomHoatDongNC.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allNhomHoatDongNC = await NhomHoatDongNC.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allNhomHoatDongNC,
                total: totalNhomHoatDongNC,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalNhomHoatDongNC / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await NhomHoatDongNC.distinct('TenNhomHoatDongNC')
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
const getNhomHoatDongNCByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const nhomhoatdongncList = await NhomHoatDongNC.find({
                QuanNhanId: id
            });

            if (!nhomhoatdongncList || nhomhoatdongncList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No NhomHoatDongNC found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: nhomhoatdongncList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createNhomHoatDongNC,
    updateNhomHoatDongNC,
    getDetailsNhomHoatDongNC,
    deleteNhomHoatDongNC,
    getAllNhomHoatDongNC,
    deleteManyNhomHoatDongNC,
    getAllType,
    getNhomHoatDongNCByQuanNhanId
}