const HopDong = require("../models/HopDongModel")

const createHopDong = (newHopDong) => {
    return new Promise(async (resolve, reject) => {
        const { HopDongId, QuanNhanId, TenHopDong, BenA, DonViChuTri, GiaTriHopDong, ThoiDiemKetThuc, ThoiDiemBatDau, NguoiChuTri, SoThanhVien, CacThanhVien, NgayThanhLy, Tai, FileCM, TrangThai, CacHTCV, edituser, edittime, GhiChu } = newHopDong
        try {
            const checkHopDong = await HopDong.findOne({
                TenHopDong: TenHopDong,
                TenHopDong: TenHopDong
            })
            if (checkHopDong !== null) {
                resolve({
                    status: 'ERR',
                    message: 'HopDong is already'
                })
            }
            else {
                const newHopDong = await HopDong.create({
                    HopDongId, QuanNhanId, TenHopDong, BenA, DonViChuTri, GiaTriHopDong, ThoiDiemKetThuc, ThoiDiemBatDau, NguoiChuTri, SoThanhVien, CacThanhVien, NgayThanhLy, Tai, FileCM, TrangThai, CacHTCV, edituser, edittime, GhiChu
                })
                if (newHopDong) {
                    resolve({
                        status: 'OK',
                        message: 'SUCCESS',
                        data: newHopDong
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHopDong = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHopDong = await HopDong.findOne({
                _id: id
            })
            if (checkHopDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedHopDong = await HopDong.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHopDong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHopDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHopDong = await HopDong.findOne({
                _id: id
            })
            if (checkHopDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await HopDong.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHopDong = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HopDong.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHopDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hopdong = await HopDong.findOne({
                _id: id
            }).populate("CacHTCV");
            if (hopdong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: hopdong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllHopDong = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHopDong = await HopDong.count()
            let allHopDong = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HopDong.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHopDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHopDong / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHopDongSort = await HopDong.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHopDongSort,
                    total: totalHopDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHopDong / limit)
                })
            }
            if (!limit) {
                allHopDong = await HopDong.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHopDong = await HopDong.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHopDong,
                total: totalHopDong,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHopDong / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HopDong.distinct('QuanNhanId')
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
const getHopDongByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const HopDongList = await HopDong.find({
                QuanNhanId: id
            });

            if (!HopDongList || HopDongList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HopDong found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: HopDongList
            });
        } catch (error) {
            reject(error);
        }
    });
};
const updateHTCVLists = async (id, HTCVList) => {
    try {
        const hopdong = await HopDong.findById(id);

        if (!hopdong) {
            return {
                status: 'ERR',
                message: 'HTCV not found',
            };
        }
        if (hopdong.CacHTCV.includes(HTCVList)) {
            return {
                status: 'OK',
                message: 'HTCV already exists',
            };
        }

        else {
            hopdong.CacHTCV.push(HTCVList);

            await hopdong.save();

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
    createHopDong,
    updateHopDong,
    getDetailsHopDong,
    deleteHopDong,
    getAllHopDong,
    deleteManyHopDong,
    getAllType,
    getHopDongByQuanNhanId,
    updateHTCVLists
}