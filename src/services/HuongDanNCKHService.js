const HuongDanNCKH = require("../models/HuongDanNCKHModel")

const createHuongDanNCKH = (newHuongDanNCKH) => {
    return new Promise(async (resolve, reject) => {
        const { HuongDanNCKHId, QuanNhanId, Ten, LoaiDeTai, DonViChuTri, ThoiGianBatDau, ThoiGianDuKienKetThuc, CacSinhVien, PhanLoaiKetQua, HinhThucKhenThuong, NgayNghiemThu, Tai, TrangThai, edituser, edittime, GhiChu } = newHuongDanNCKH
        try {
            // const checkHuongDanNCKH = await HuongDanNCKH.findOne({
            //     HuongDanNCKHId: HuongDanNCKHId
            // })
            // if (checkHuongDanNCKH !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HuongDanNCKH is already'
            //     })
            // }
            const newHuongDanNCKH = await HuongDanNCKH.create({
                HuongDanNCKHId, QuanNhanId, Ten, LoaiDeTai, DonViChuTri, ThoiGianBatDau, ThoiGianDuKienKetThuc, CacSinhVien, PhanLoaiKetQua, HinhThucKhenThuong, NgayNghiemThu, Tai, TrangThai, edituser, edittime, GhiChu
            })
            if (newHuongDanNCKH) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHuongDanNCKH
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHuongDanNCKH = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHuongDanNCKH = await HuongDanNCKH.findOne({
                _id: id
            })
            if (checkHuongDanNCKH === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            const updatedHuongDanNCKH = await HuongDanNCKH.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHuongDanNCKH
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHuongDanNCKH = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHuongDanNCKH = await HuongDanNCKH.findOne({
                _id: id
            })
            if (checkHuongDanNCKH === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await HuongDanNCKH.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHuongDanNCKH = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HuongDanNCKH.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHuongDanNCKH = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const huongdannckh = await HuongDanNCKH.findOne({
                _id: id
            })
            if (huongdannckh === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: huongdannckh
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllHuongDanNCKH = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHuongDanNCKH = await HuongDanNCKH.count()
            let allHuongDanNCKH = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HuongDanNCKH.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHuongDanNCKH,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHuongDanNCKH / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHuongDanNCKHSort = await HuongDanNCKH.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHuongDanNCKHSort,
                    total: totalHuongDanNCKH,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHuongDanNCKH / limit)
                })
            }
            if (!limit) {
                allHuongDanNCKH = await HuongDanNCKH.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHuongDanNCKH = await HuongDanNCKH.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHuongDanNCKH,
                total: totalHuongDanNCKH,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHuongDanNCKH / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HuongDanNCKH.distinct('QuanNhanId')
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
const getHuongDanNCKHByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhCongTacList = await HuongDanNCKH.find({
                QuanNhanId: id
            });

            if (!quaTrinhCongTacList || quaTrinhCongTacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HuongDanNCKH found for the given QuanNhanId'
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
    createHuongDanNCKH,
    updateHuongDanNCKH,
    getDetailsHuongDanNCKH,
    deleteHuongDanNCKH,
    getAllHuongDanNCKH,
    deleteManyHuongDanNCKH,
    getAllType,
    getHuongDanNCKHByQuanNhanId
}