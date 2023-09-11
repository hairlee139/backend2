const HinhThucHuongDan = require("../models/HinhThucHuongDanModel")

const createHinhThucHuongDan = (newHinhThucHuongDan) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucHuongDanId, TenHinhThucHuongDan, lock, lockdate, edituser, edittime, GhiChu } = newHinhThucHuongDan
        try {
            // const checkHinhThucHuongDan = await HinhThucHuongDan.findOne({
            //     HinhThucHuongDanId: HinhThucHuongDanId
            // })
            // if (checkHinhThucHuongDan !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HinhThucHuongDan is already'
            //     })
            // }
            const newHinhThucHuongDan = await HinhThucHuongDan.create({
                HinhThucHuongDanId, TenHinhThucHuongDan, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newHinhThucHuongDan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHinhThucHuongDan
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHinhThucHuongDan = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucHuongDan = await HinhThucHuongDan.findOne({
                _id: id
            })
            if (checkHinhThucHuongDan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedHinhThucHuongDan = await HinhThucHuongDan.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHinhThucHuongDan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHinhThucHuongDan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucHuongDan = await HinhThucHuongDan.findOne({
                _id: id
            })
            if (checkHinhThucHuongDan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await HinhThucHuongDan.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHinhThucHuongDan = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HinhThucHuongDan.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHinhThucHuongDan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await HinhThucHuongDan.findOne({
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

const getAllHinhThucHuongDan = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHinhThucHuongDan = await HinhThucHuongDan.count()
            let allHinhThucHuongDan = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HinhThucHuongDan.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHinhThucHuongDan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucHuongDan / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHinhThucHuongDanSort = await HinhThucHuongDan.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHinhThucHuongDanSort,
                    total: totalHinhThucHuongDan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucHuongDan / limit)
                })
            }
            if (!limit) {
                allHinhThucHuongDan = await HinhThucHuongDan.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHinhThucHuongDan = await HinhThucHuongDan.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHinhThucHuongDan,
                total: totalHinhThucHuongDan,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHinhThucHuongDan / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HinhThucHuongDan.distinct('TenHinhThucHuongDan')
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
const getHinhThucHuongDanByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hinhthuchuongdanList = await HinhThucHuongDan.find({
                QuanNhanId: id
            });

            if (!hinhthuchuongdanList || hinhthuchuongdanList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HinhThucHuongDan found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: hinhthuchuongdanList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHinhThucHuongDan,
    updateHinhThucHuongDan,
    getDetailsHinhThucHuongDan,
    deleteHinhThucHuongDan,
    getAllHinhThucHuongDan,
    deleteManyHinhThucHuongDan,
    getAllType,
    getHinhThucHuongDanByQuanNhanId
}