const HinhThucKhenThuong = require("../models/HinhThucKhenThuongModel")

const createHinhThucKhenThuong = (newHinhThucKhenThuong) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucKhenThuongId, TenHinhThucKhenThuong, lock, lockdate, edituser, edittime, GhiChu } = newHinhThucKhenThuong
        try {
            // const checkHinhThucKhenThuong = await HinhThucKhenThuong.findOne({
            //     HinhThucKhenThuongId: HinhThucKhenThuongId
            // })
            // if (checkHinhThucKhenThuong !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HinhThucKhenThuong is already'
            //     })
            // }
            const newHinhThucKhenThuong = await HinhThucKhenThuong.create({
                HinhThucKhenThuongId, TenHinhThucKhenThuong, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newHinhThucKhenThuong) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHinhThucKhenThuong
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHinhThucKhenThuong = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucKhenThuong = await HinhThucKhenThuong.findOne({
                _id: id
            })
            if (checkHinhThucKhenThuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedHinhThucKhenThuong = await HinhThucKhenThuong.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHinhThucKhenThuong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHinhThucKhenThuong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucKhenThuong = await HinhThucKhenThuong.findOne({
                _id: id
            })
            if (checkHinhThucKhenThuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await HinhThucKhenThuong.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHinhThucKhenThuong = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HinhThucKhenThuong.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHinhThucKhenThuong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await HinhThucKhenThuong.findOne({
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

const getAllHinhThucKhenThuong = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHinhThucKhenThuong = await HinhThucKhenThuong.count()
            let allHinhThucKhenThuong = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HinhThucKhenThuong.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHinhThucKhenThuong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucKhenThuong / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHinhThucKhenThuongSort = await HinhThucKhenThuong.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHinhThucKhenThuongSort,
                    total: totalHinhThucKhenThuong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucKhenThuong / limit)
                })
            }
            if (!limit) {
                allHinhThucKhenThuong = await HinhThucKhenThuong.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHinhThucKhenThuong = await HinhThucKhenThuong.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHinhThucKhenThuong,
                total: totalHinhThucKhenThuong,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHinhThucKhenThuong / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HinhThucKhenThuong.distinct('TenHinhThucKhenThuong')
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
const getHinhThucKhenThuongByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hinhhthuckhenthuongList = await HinhThucKhenThuong.find({
                QuanNhanId: id
            });

            if (!hinhhthuckhenthuongList || hinhhthuckhenthuongList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HinhThucKhenThuong found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: hinhhthuckhenthuongList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHinhThucKhenThuong,
    updateHinhThucKhenThuong,
    getDetailsHinhThucKhenThuong,
    deleteHinhThucKhenThuong,
    getAllHinhThucKhenThuong,
    deleteManyHinhThucKhenThuong,
    getAllType,
    getHinhThucKhenThuongByQuanNhanId
}