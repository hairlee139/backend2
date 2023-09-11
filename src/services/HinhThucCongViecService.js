const HinhThucCongViec = require("../models/HinhThucCongViecModel")

const createHinhThucCongViec = (newHinhThucCongViec) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucCongViecId, TenHinhThucCongViec, lock, lockdate, edituser, edittime, GhiChu } = newHinhThucCongViec
        try {
            // const checkHinhThucCongViec = await HinhThucCongViec.findOne({
            //     HinhThucCongViecId: HinhThucCongViecId
            // })
            // if (checkHinhThucCongViec !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HinhThucCongViec is already'
            //     })
            // }
            const newHinhThucCongViec = await HinhThucCongViec.create({
                HinhThucCongViecId, TenHinhThucCongViec, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newHinhThucCongViec) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHinhThucCongViec
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHinhThucCongViec = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucCongViec = await HinhThucCongViec.findOne({
                _id: id
            })
            if (checkHinhThucCongViec === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedHinhThucCongViec = await HinhThucCongViec.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHinhThucCongViec
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHinhThucCongViec = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucCongViec = await HinhThucCongViec.findOne({
                _id: id
            })
            if (checkHinhThucCongViec === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await HinhThucCongViec.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHinhThucCongViec = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HinhThucCongViec.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHinhThucCongViec = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await HinhThucCongViec.findOne({
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

const getAllHinhThucCongViec = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHinhThucCongViec = await HinhThucCongViec.count()
            let allHinhThucCongViec = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HinhThucCongViec.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHinhThucCongViec,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucCongViec / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHinhThucCongViecSort = await HinhThucCongViec.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHinhThucCongViecSort,
                    total: totalHinhThucCongViec,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucCongViec / limit)
                })
            }
            if (!limit) {
                allHinhThucCongViec = await HinhThucCongViec.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHinhThucCongViec = await HinhThucCongViec.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHinhThucCongViec,
                total: totalHinhThucCongViec,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHinhThucCongViec / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HinhThucCongViec.distinct('TenHinhThucCongViec')
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
const getHinhThucCongViecByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hinhthuccongviecList = await HinhThucCongViec.find({
                QuanNhanId: id
            });

            if (!hinhthuccongviecList || hinhthuccongviecList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HinhThucCongViec found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: hinhthuccongviecList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHinhThucCongViec,
    updateHinhThucCongViec,
    getDetailsHinhThucCongViec,
    deleteHinhThucCongViec,
    getAllHinhThucCongViec,
    deleteManyHinhThucCongViec,
    getAllType,
    getHinhThucCongViecByQuanNhanId
}