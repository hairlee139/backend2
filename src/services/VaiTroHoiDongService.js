const VaiTroHoiDong = require("../models/VaiTroHoiDongModel")

const createVaiTroHoiDong = (newVaiTroHoiDong) => {
    return new Promise(async (resolve, reject) => {
        const { VaiTroHoiDongId, TenVaiTroHoiDong, GhiChu } = newVaiTroHoiDong
        try {
            // const checkVaiTroHoiDong = await VaiTroHoiDong.findOne({
            //     VaiTroHoiDongId: VaiTroHoiDongId
            // })
            // if (checkVaiTroHoiDong !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'VaiTroHoiDong is already'
            //     })
            // }
            const newVaiTroHoiDong = await VaiTroHoiDong.create({
                VaiTroHoiDongId, TenVaiTroHoiDong, GhiChu
            })
            if (newVaiTroHoiDong) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newVaiTroHoiDong
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateVaiTroHoiDong = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkVaiTroHoiDong = await VaiTroHoiDong.findOne({
                _id: id
            })
            if (checkVaiTroHoiDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedVaiTroHoiDong = await VaiTroHoiDong.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedVaiTroHoiDong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteVaiTroHoiDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkVaiTroHoiDong = await VaiTroHoiDong.findOne({
                _id: id
            })
            if (checkVaiTroHoiDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await VaiTroHoiDong.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyVaiTroHoiDong = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await VaiTroHoiDong.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsVaiTroHoiDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await VaiTroHoiDong.findOne({
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

const getAllVaiTroHoiDong = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalVaiTroHoiDong = await VaiTroHoiDong.count()
            let allVaiTroHoiDong = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await VaiTroHoiDong.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalVaiTroHoiDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalVaiTroHoiDong / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allVaiTroHoiDongSort = await VaiTroHoiDong.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allVaiTroHoiDongSort,
                    total: totalVaiTroHoiDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalVaiTroHoiDong / limit)
                })
            }
            if (!limit) {
                allVaiTroHoiDong = await VaiTroHoiDong.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allVaiTroHoiDong = await VaiTroHoiDong.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allVaiTroHoiDong,
                total: totalVaiTroHoiDong,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalVaiTroHoiDong / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await VaiTroHoiDong.distinct('TenVaiTroHoiDong')
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
const getVaiTroHoiDongByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const vaitrohoidongList = await VaiTroHoiDong.find({
                QuanNhanId: id
            });

            if (!vaitrohoidongList || vaitrohoidongList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No VaiTroHoiDong found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: vaitrohoidongList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createVaiTroHoiDong,
    updateVaiTroHoiDong,
    getDetailsVaiTroHoiDong,
    deleteVaiTroHoiDong,
    getAllVaiTroHoiDong,
    deleteManyVaiTroHoiDong,
    getAllType,
    getVaiTroHoiDongByQuanNhanId
}