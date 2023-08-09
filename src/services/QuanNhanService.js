const QuanNhan = require("../models/QuanNhanModel")

const createQuanNhan = (newQuanNhan) => {
    return new Promise(async (resolve, reject) => {
        const { QuanNhanId, HoTen, NgaySinh, GioiTinh, QueQuan, DiaChi, SoDienThoai, Email, HoatDong, QuanHam, DonVi, LoaiQN } = newQuanNhan
        try {
            const checkQuanNhan = await QuanNhan.findOne({
                HoTen: HoTen
            })
            if (checkQuanNhan !== null) {
                resolve({
                    status: 'ERR',
                    message: 'Hoten is already'
                })
            }
            const newQuanNhan = await QuanNhan.create({
                QuanNhanId,
                HoTen, 
                NgaySinh, 
                GioiTinh, 
                QueQuan, 
                DiaChi, 
                SoDienThoai, 
                Email, 
                HoatDong,
                QuanHam, 
                DonVi, 
                LoaiQN
            })
            if (newQuanNhan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newQuanNhan
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateQuanNhan = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuanNhan = await QuanNhan.findOne({
                _id: id
            })
            if (checkQuanNhan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                })
            }

            const updatedQuanNhan = await QuanNhan.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedQuanNhan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteQuanNhan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuanNhan = await QuanNhan.findOne({
                _id: id
            })
            if (checkQuanNhan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                })
            }

            await QuanNhan.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Quannhan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyQuanNhan = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await QuanNhan.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Quannhan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsQuanNhan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quannhan = await QuanNhan.findOne({
                _id: id
            })
            if (quannhan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quannhan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllQuanNhan = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalQuanNhan = await QuanNhan.count()
            let allQuanNhan = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await QuanNhan.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalQuanNhan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuanNhan / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allQuanNhanSort = await QuanNhan.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allQuanNhanSort,
                    total: totalQuanNhan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuanNhan / limit)
                })
            }
            if(!limit) {
                allQuanNhan = await QuanNhan.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allQuanNhan = await QuanNhan.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allQuanNhan,
                total: totalQuanNhan,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalQuanNhan / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await QuanNhan.distinct('LoaiQN')
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
const getQuanNhanByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quannhan = await QuanNhan.findOne({
                QuanNhanId: id
            });
            
            if (!quannhan) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quannhan
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createQuanNhan,
    updateQuanNhan,
    getDetailsQuanNhan,
    deleteQuanNhan,
    getAllQuanNhan,
    deleteManyQuanNhan,
    getAllType,
    getQuanNhanByQuanNhanId
}