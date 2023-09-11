const HinhThucKhaoThi = require("../models/HinhThucKhaoThiModel")

const createHinhThucKhaoThi = (newHinhThucKhaoThi) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucKhaoThiId, TenHinhThucKhaoThi, lock, lockdate, edituser, edittime, GhiChu } = newHinhThucKhaoThi
        try {
            // const checkHinhThucKhaoThi = await HinhThucKhaoThi.findOne({
            //     HinhThucKhaoThiId: HinhThucKhaoThiId
            // })
            // if (checkHinhThucKhaoThi !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HinhThucKhaoThi is already'
            //     })
            // }
            const newHinhThucKhaoThi = await HinhThucKhaoThi.create({
                HinhThucKhaoThiId, TenHinhThucKhaoThi, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newHinhThucKhaoThi) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHinhThucKhaoThi
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHinhThucKhaoThi = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucKhaoThi = await HinhThucKhaoThi.findOne({
                _id: id
            })
            if (checkHinhThucKhaoThi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedHinhThucKhaoThi = await HinhThucKhaoThi.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHinhThucKhaoThi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHinhThucKhaoThi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucKhaoThi = await HinhThucKhaoThi.findOne({
                _id: id
            })
            if (checkHinhThucKhaoThi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await HinhThucKhaoThi.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHinhThucKhaoThi = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HinhThucKhaoThi.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHinhThucKhaoThi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await HinhThucKhaoThi.findOne({
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

const getAllHinhThucKhaoThi = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHinhThucKhaoThi = await HinhThucKhaoThi.count()
            let allHinhThucKhaoThi = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HinhThucKhaoThi.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHinhThucKhaoThi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucKhaoThi / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHinhThucKhaoThiSort = await HinhThucKhaoThi.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHinhThucKhaoThiSort,
                    total: totalHinhThucKhaoThi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucKhaoThi / limit)
                })
            }
            if (!limit) {
                allHinhThucKhaoThi = await HinhThucKhaoThi.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHinhThucKhaoThi = await HinhThucKhaoThi.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHinhThucKhaoThi,
                total: totalHinhThucKhaoThi,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHinhThucKhaoThi / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HinhThucKhaoThi.distinct('TenHinhThucKhaoThi')
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
const getHinhThucKhaoThiByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hinhthuckhaothiList = await HinhThucKhaoThi.find({
                QuanNhanId: id
            });

            if (!hinhthuckhaothiList || hinhthuckhaothiList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HinhThucKhaoThi found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: hinhthuckhaothiList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHinhThucKhaoThi,
    updateHinhThucKhaoThi,
    getDetailsHinhThucKhaoThi,
    deleteHinhThucKhaoThi,
    getAllHinhThucKhaoThi,
    deleteManyHinhThucKhaoThi,
    getAllType,
    getHinhThucKhaoThiByQuanNhanId
}