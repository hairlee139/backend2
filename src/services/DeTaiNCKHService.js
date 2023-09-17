const DeTaiNCKH = require("../models/DeTaiNCKHModel")

const createDeTaiNCKH = (newDeTaiNCKH) => {
    return new Promise(async (resolve, reject) => {
        const { DeTaiNCKHId, QuanNhanId, LoaiDeTai, MaDeTai, TenDeTai, HinhThucKhenThuong, KinhPhi, CNDeTai, DonViChuTri, ThoiGianDuKienKT, ThoiGianBatDau, GiaHanLan1, GiaHanLan2, SoThanhVien, CacThanhVien, HinhThucDeTai, ThuocCTDuAn, NgayNghiemThu, MoTaKetThuc, QLDVHV, FileCM, Tai, TrangThai, PhanLoaiKetQua, CacHTCV, edituser, edittime, GhiChu } = newDeTaiNCKH
        try {
            const checkDeTaiNCKH = await DeTaiNCKH.findOne({
                MaDeTai: MaDeTai

            })
            if (checkDeTaiNCKH !== null) {
                resolve({
                    status: 'ERR',
                    message: 'DeTaiNCKH is already'
                })
            }
            else {
                const newDeTaiNCKH = await DeTaiNCKH.create({
                    DeTaiNCKHId, QuanNhanId, LoaiDeTai, MaDeTai, TenDeTai, HinhThucKhenThuong, KinhPhi, CNDeTai, DonViChuTri, ThoiGianDuKienKT, ThoiGianBatDau, GiaHanLan1, GiaHanLan2, SoThanhVien, CacThanhVien, HinhThucDeTai, ThuocCTDuAn, NgayNghiemThu, MoTaKetThuc, QLDVHV, FileCM, Tai, TrangThai, PhanLoaiKetQua, CacHTCV, edituser, edittime, GhiChu
                })
                if (newDeTaiNCKH) {
                    resolve({
                        status: 'OK',
                        message: 'SUCCESS',
                        data: newDeTaiNCKH
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateDeTaiNCKH = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDeTaiNCKH = await DeTaiNCKH.findOne({
                _id: id
            })
            if (checkDeTaiNCKH === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedDeTaiNCKH = await DeTaiNCKH.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDeTaiNCKH
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDeTaiNCKH = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDeTaiNCKH = await DeTaiNCKH.findOne({
                _id: id
            })
            if (checkDeTaiNCKH === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await DeTaiNCKH.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDeTaiNCKH = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DeTaiNCKH.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDeTaiNCKH = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const detainckh = await DeTaiNCKH.findOne({
                _id: id
            }).populate("CacHTCV");
            if (detainckh === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: detainckh
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDeTaiNCKH = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDeTaiNCKH = await DeTaiNCKH.count()
            let allDeTaiNCKH = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DeTaiNCKH.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDeTaiNCKH,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDeTaiNCKH / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDeTaiNCKHSort = await DeTaiNCKH.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDeTaiNCKHSort,
                    total: totalDeTaiNCKH,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDeTaiNCKH / limit)
                })
            }
            if (!limit) {
                allDeTaiNCKH = await DeTaiNCKH.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allDeTaiNCKH = await DeTaiNCKH.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDeTaiNCKH,
                total: totalDeTaiNCKH,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDeTaiNCKH / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DeTaiNCKH.distinct('QuanNhanId')
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
const getDeTaiNCKHByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const DeTaiList = await DeTaiNCKH.find({
                QuanNhanId: id
            });

            if (!DeTaiList || DeTaiList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No DeTaiNCKH found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: DeTaiList
            });
        } catch (error) {
            reject(error);
        }
    });
};
const updateHTCVLists = async (id, HTCVList) => {
    try {
        const detainckh = await DeTaiNCKH.findById(id);

        if (!detainckh) {
            return {
                status: 'ERR',
                message: 'HTCV not found',
            };
        }
        if (detainckh.CacHTCV.includes(HTCVList)) {
            return {
                status: 'OK',
                message: 'HTCV already exists',
            };
        }

        else {
            detainckh.CacHTCV.push(HTCVList);

            await detainckh.save();

            return {
                status: 'OK',
                message: 'Data updated successfully',
            };
        }
    } catch (error) {
        return {
            status: 'ERR',
            message: error.message,
        };
    }
};

module.exports = {
    createDeTaiNCKH,
    updateDeTaiNCKH,
    getDetailsDeTaiNCKH,
    deleteDeTaiNCKH,
    getAllDeTaiNCKH,
    deleteManyDeTaiNCKH,
    getAllType,
    getDeTaiNCKHByQuanNhanId,
    updateHTCVLists
}