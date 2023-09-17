const ThanNhan = require("../models/ThanNhanModel")

const createThanNhan = (newThanNhan) => {
    return new Promise(async (resolve, reject) => {
        const { ThanNhanId, QuanNhanId, LoaiQuanHe, HoTen, QueQuan, NamSinh, NgheNghiep, SoDienThoai, NoiCongTac, ChucVu, TrangThai, edituser, edittime, GhiChu } = newThanNhan
        try {
            // const checkThanNhan = await ThanNhan.findOne({
            //     ThanNhanId: ThanNhanId
            // })
            // if (checkThanNhan !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'ThanNhan is already'
            //     })
            // }
            const newThanNhan = await ThanNhan.create({
                ThanNhanId, QuanNhanId, LoaiQuanHe, HoTen, QueQuan, NamSinh, NgheNghiep, SoDienThoai, NoiCongTac, ChucVu, TrangThai, edituser, edittime, GhiChu
            })
            if (newThanNhan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newThanNhan
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateThanNhan = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkThanNhan = await ThanNhan.findOne({
                _id: id
            })
            if (checkThanNhan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedThanNhan = await ThanNhan.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedThanNhan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteThanNhan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkThanNhan = await ThanNhan.findOne({
                _id: id
            })
            if (checkThanNhan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await ThanNhan.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyThanNhan = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await ThanNhan.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsThanNhan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const thannhan = await ThanNhan.findOne({
                _id: id
            })
            if (thannhan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: thannhan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllThanNhan = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalThanNhan = await ThanNhan.count()
            let allThanNhan = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await ThanNhan.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalThanNhan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalThanNhan / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allThanNhanSort = await ThanNhan.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allThanNhanSort,
                    total: totalThanNhan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalThanNhan / limit)
                })
            }
            if (!limit) {
                allThanNhan = await ThanNhan.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allThanNhan = await ThanNhan.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allThanNhan,
                total: totalThanNhan,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalThanNhan / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await ThanNhan.distinct('QuanNhanId')
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
const getThanNhanByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhCongTacList = await ThanNhan.find({
                QuanNhanId: id
            });

            if (!quaTrinhCongTacList || quaTrinhCongTacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No ThanNhan found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quaTrinhCongTacList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createThanNhan,
    updateThanNhan,
    getDetailsThanNhan,
    deleteThanNhan,
    getAllThanNhan,
    deleteManyThanNhan,
    getAllType,
    getThanNhanByQuanNhanId
}