const HinhThucGiangDay = require("../models/HinhThucGiangDayModel")

const createHinhThucGiangDay = (newHinhThucGiangDay) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucGiangDayId, TenHinhThucGiangDay, lock, lockdate, edituser, edittime, GhiChu } = newHinhThucGiangDay
        try {
            // const checkHinhThucGiangDay = await HinhThucGiangDay.findOne({
            //     HinhThucGiangDayId: HinhThucGiangDayId
            // })
            // if (checkHinhThucGiangDay !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HinhThucGiangDay is already'
            //     })
            // }
            const newHinhThucGiangDay = await HinhThucGiangDay.create({
                HinhThucGiangDayId, TenHinhThucGiangDay, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newHinhThucGiangDay) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHinhThucGiangDay
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHinhThucGiangDay = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucGiangDay = await HinhThucGiangDay.findOne({
                _id: id
            })
            if (checkHinhThucGiangDay === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedHinhThucGiangDay = await HinhThucGiangDay.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHinhThucGiangDay
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHinhThucGiangDay = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucGiangDay = await HinhThucGiangDay.findOne({
                _id: id
            })
            if (checkHinhThucGiangDay === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await HinhThucGiangDay.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHinhThucGiangDay = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HinhThucGiangDay.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHinhThucGiangDay = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await HinhThucGiangDay.findOne({
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

const getAllHinhThucGiangDay = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHinhThucGiangDay = await HinhThucGiangDay.count()
            let allHinhThucGiangDay = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HinhThucGiangDay.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHinhThucGiangDay,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucGiangDay / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHinhThucGiangDaySort = await HinhThucGiangDay.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHinhThucGiangDaySort,
                    total: totalHinhThucGiangDay,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucGiangDay / limit)
                })
            }
            if (!limit) {
                allHinhThucGiangDay = await HinhThucGiangDay.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHinhThucGiangDay = await HinhThucGiangDay.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHinhThucGiangDay,
                total: totalHinhThucGiangDay,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHinhThucGiangDay / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HinhThucGiangDay.distinct('TenHinhThucGiangDay')
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
const getHinhThucGiangDayByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hinhthucgiangdayList = await HinhThucGiangDay.find({
                QuanNhanId: id
            });

            if (!hinhthucgiangdayList || hinhthucgiangdayList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HinhThucGiangDay found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: hinhthucgiangdayList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHinhThucGiangDay,
    updateHinhThucGiangDay,
    getDetailsHinhThucGiangDay,
    deleteHinhThucGiangDay,
    getAllHinhThucGiangDay,
    deleteManyHinhThucGiangDay,
    getAllType,
    getHinhThucGiangDayByQuanNhanId
}