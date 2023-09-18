const VaiTro = require("../models/VaiTroModel")

const createVaiTro = (newVaiTro) => {
    return new Promise(async (resolve, reject) => {
        const { VaiTroId, TenVaiTro, lock, lockdate, edituser, edittime, GhiChu } = newVaiTro
        try {
            // const checkVaiTro = await VaiTro.findOne({
            //     VaiTroId: VaiTroId
            // })
            // if (checkVaiTro !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'VaiTro is already'
            //     })
            // }
            const newVaiTro = await VaiTro.create({
                VaiTroId, TenVaiTro, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newVaiTro) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newVaiTro
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateVaiTro = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkVaiTro = await VaiTro.findOne({
                _id: id
            })
            if (checkVaiTro === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedVaiTro = await VaiTro.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedVaiTro
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteVaiTro = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkVaiTro = await VaiTro.findOne({
                _id: id
            })
            if (checkVaiTro === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await VaiTro.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyVaiTro = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await VaiTro.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsVaiTro = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await VaiTro.findOne({
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

const getAllVaiTro = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalVaiTro = await VaiTro.count()
            let allVaiTro = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await VaiTro.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalVaiTro,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalVaiTro / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allVaiTroSort = await VaiTro.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allVaiTroSort,
                    total: totalVaiTro,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalVaiTro / limit)
                })
            }
            if (!limit) {
                allVaiTro = await VaiTro.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allVaiTro = await VaiTro.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allVaiTro,
                total: totalVaiTro,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalVaiTro / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await VaiTro.distinct('TenVaiTro')
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
const getVaiTroByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const vaitroList = await VaiTro.find({
                QuanNhanId: id
            });

            if (!vaitroList || vaitroList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No VaiTro found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: vaitroList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createVaiTro,
    updateVaiTro,
    getDetailsVaiTro,
    deleteVaiTro,
    getAllVaiTro,
    deleteManyVaiTro,
    getAllType,
    getVaiTroByQuanNhanId
}