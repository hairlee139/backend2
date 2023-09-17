const HTCVBaiBao = require("../models/HTCVBaiBaoModel")

const createHTCVBaiBao = (newHTCVBaiBao) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, SoGioQuyDoi, edituser, edittime, GhiChu } = newHTCVBaiBao
        try {
            // const checkHTCVBaiBao = await HTCVBaiBao.findOne({
            //     HTCVBaiBaoId: HTCVBaiBaoId
            // })
            // if (checkHTCVBaiBao !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HTCVBaiBao is already'
            //     })
            // }
            const newHTCVBaiBao = await HTCVBaiBao.create({
                HinhThucCV, QuanNhanId, HoTen, DonVi, SoGioQuyDoi, edituser, edittime, GhiChu
            })
            if (newHTCVBaiBao) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHTCVBaiBao
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHTCVBaiBao = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVBaiBao = await HTCVBaiBao.findOne({
                _id: id
            })
            if (checkHTCVBaiBao === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedHTCVBaiBao = await HTCVBaiBao.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHTCVBaiBao
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHTCVBaiBao = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVBaiBao = await HTCVBaiBao.findOne({
                _id: id
            })
            if (checkHTCVBaiBao === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await HTCVBaiBao.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHTCVBaiBao = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HTCVBaiBao.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHTCVBaiBao = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcvbaibao = await HTCVBaiBao.findOne({
                _id: id
            })
            if (htcvbaibao === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcvbaibao
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllHTCVBaiBao = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHTCVBaiBao = await HTCVBaiBao.count()
            let allHTCVBaiBao = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HTCVBaiBao.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHTCVBaiBao,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVBaiBao / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHTCVBaiBaoSort = await HTCVBaiBao.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHTCVBaiBaoSort,
                    total: totalHTCVBaiBao,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVBaiBao / limit)
                })
            }
            if (!limit) {
                allHTCVBaiBao = await HTCVBaiBao.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHTCVBaiBao = await HTCVBaiBao.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHTCVBaiBao,
                total: totalHTCVBaiBao,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHTCVBaiBao / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HTCVBaiBao.distinct('QuanNhanId')
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
const getHTCVBaiBaoByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcvBaiBaoList = await HTCVBaiBao.find({
                QuanNhanId: id
            });

            if (!htcvBaiBaoList || htcvBaiBaoList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HTCVBaiBao found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcvBaiBaoList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHTCVBaiBao,
    updateHTCVBaiBao,
    getDetailsHTCVBaiBao,
    deleteHTCVBaiBao,
    getAllHTCVBaiBao,
    deleteManyHTCVBaiBao,
    getAllType,
    getHTCVBaiBaoByQuanNhanId
}