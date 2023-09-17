const BaiBaoKhoaHoc = require("../models/BaiBaoKhoaHocModel")

const createBaiBaoKhoaHoc = (newBaiBaoKhoaHoc) => {
    return new Promise(async (resolve, reject) => {
        const { BaiBaoKhoaHocId, QuanNhanId, TenBai, LoaiTapChiHoiThao, TenTapChiHoiThao, SoTapChi, DiemToiDa, KinhPhiHoTro, NganhXetChucDanh, TapSo, NgonNguBao, TrangBaiViet, ThoiDiemXuatBan, SoTacGia, CacTacGia, LienKet, Quy, Nam, Tai, ThuocDeTai, FileCM, NhomNghienCuu, TrangThai, CacHTCV, edituser, edittime, GhiChu } = newBaiBaoKhoaHoc
        try {
            const checkBaiBaoKhoaHoc = await BaiBaoKhoaHoc.findOne({
                LoaiTapChiHoiThao: LoaiTapChiHoiThao,
                TenBai: TenBai
            })
            if (checkBaiBaoKhoaHoc !== null) {
                resolve({
                    status: 'ERR',
                    message: 'BaiBaoKhoaHoc is already'
                })
            }
            else {
                const newBaiBaoKhoaHoc = await BaiBaoKhoaHoc.create({
                    BaiBaoKhoaHocId, QuanNhanId, TenBai, LoaiTapChiHoiThao, TenTapChiHoiThao, SoTapChi, DiemToiDa, KinhPhiHoTro, NganhXetChucDanh, TapSo, NgonNguBao, TrangBaiViet, ThoiDiemXuatBan, SoTacGia, CacTacGia, LienKet, Quy, Nam, Tai, ThuocDeTai, FileCM, NhomNghienCuu, TrangThai, CacHTCV, edituser, edittime, GhiChu
                })
                if (newBaiBaoKhoaHoc) {
                    resolve({
                        status: 'OK',
                        message: 'SUCCESS',
                        data: newBaiBaoKhoaHoc
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateBaiBaoKhoaHoc = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkBaiBaoKhoaHoc = await BaiBaoKhoaHoc.findOne({
                _id: id
            })
            if (checkBaiBaoKhoaHoc === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedBaiBaoKhoaHoc = await BaiBaoKhoaHoc.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedBaiBaoKhoaHoc
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteBaiBaoKhoaHoc = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkBaiBaoKhoaHoc = await BaiBaoKhoaHoc.findOne({
                _id: id
            })
            if (checkBaiBaoKhoaHoc === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await BaiBaoKhoaHoc.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyBaiBaoKhoaHoc = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await BaiBaoKhoaHoc.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsBaiBaoKhoaHoc = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const baibaokhoahoc = await BaiBaoKhoaHoc.findOne({
                _id: id
            }).populate("CacHTCV");
            if (baibaokhoahoc === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: baibaokhoahoc
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllBaiBaoKhoaHoc = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalBaiBaoKhoaHoc = await BaiBaoKhoaHoc.count()
            let allBaiBaoKhoaHoc = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await BaiBaoKhoaHoc.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalBaiBaoKhoaHoc,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalBaiBaoKhoaHoc / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allBaiBaoKhoaHocSort = await BaiBaoKhoaHoc.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allBaiBaoKhoaHocSort,
                    total: totalBaiBaoKhoaHoc,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalBaiBaoKhoaHoc / limit)
                })
            }
            if (!limit) {
                allBaiBaoKhoaHoc = await BaiBaoKhoaHoc.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allBaiBaoKhoaHoc = await BaiBaoKhoaHoc.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allBaiBaoKhoaHoc,
                total: totalBaiBaoKhoaHoc,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalBaiBaoKhoaHoc / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await BaiBaoKhoaHoc.distinct('QuanNhanId')
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
const getBaiBaoKhoaHocByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const BaiBaoList = await BaiBaoKhoaHoc.find({
                QuanNhanId: id
            });

            if (!BaiBaoList || BaiBaoList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No BaiBaoKhoaHoc found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: BaiBaoList
            });
        } catch (error) {
            reject(error);
        }
    });
};
const updateHTCVLists = async (id, HTCVList) => {
    try {
        const baibaokhoahoc = await BaiBaoKhoaHoc.findById(id);

        if (!baibaokhoahoc) {
            return {
                status: 'ERR',
                message: 'HTCV not found',
            };
        }
        if (baibaokhoahoc.CacHTCV.includes(HTCVList)) {
            return {
                status: 'OK',
                message: 'HTCV already exists',
            };
        }

        else {
            baibaokhoahoc.CacHTCV.push(HTCVList);

            await baibaokhoahoc.save();

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
    createBaiBaoKhoaHoc,
    updateBaiBaoKhoaHoc,
    getDetailsBaiBaoKhoaHoc,
    deleteBaiBaoKhoaHoc,
    getAllBaiBaoKhoaHoc,
    deleteManyBaiBaoKhoaHoc,
    getAllType,
    getBaiBaoKhoaHocByQuanNhanId,
    updateHTCVLists
}