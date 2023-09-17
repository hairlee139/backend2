const GiaiThuong = require("../models/GiaiThuongModel")

const createGiaiThuong = (newGiaiThuong) => {
    return new Promise(async (resolve, reject) => {
        const { GiaiThuongId, QuanNhanId, LoaiGiaiThuong, TenGiaiThuong, TenCongTrinh, NgayGiaiThuong, SoTacGia, CacTacGia, Quy, Nam, Tai, FileCM, TrangThai, CacHTCV, edituser, edittime, GhiChu } = newGiaiThuong
        try {
            const checkGiaiThuong = await GiaiThuong.findOne({
                LoaiGiaiThuong: LoaiGiaiThuong,

            })
            if (checkGiaiThuong !== null) {
                resolve({
                    status: 'ERR',
                    message: 'GiaiThuong is already'
                })
            }
            else {
                const newGiaiThuong = await GiaiThuong.create({
                    GiaiThuongId, QuanNhanId, LoaiGiaiThuong, TenGiaiThuong, TenCongTrinh, NgayGiaiThuong, SoTacGia, CacTacGia, Quy, Nam, Tai, FileCM, TrangThai, CacHTCV, edituser, edittime, GhiChu
                })
                if (newGiaiThuong) {
                    resolve({
                        status: 'OK',
                        message: 'SUCCESS',
                        data: newGiaiThuong
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateGiaiThuong = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkGiaiThuong = await GiaiThuong.findOne({
                _id: id
            })
            if (checkGiaiThuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedGiaiThuong = await GiaiThuong.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedGiaiThuong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteGiaiThuong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkGiaiThuong = await GiaiThuong.findOne({
                _id: id
            })
            if (checkGiaiThuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await GiaiThuong.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyGiaiThuong = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await GiaiThuong.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsGiaiThuong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const giaithuong = await GiaiThuong.findOne({
                _id: id
            }).populate("CacHTCV");
            if (giaithuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: giaithuong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllGiaiThuong = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalGiaiThuong = await GiaiThuong.count()
            let allGiaiThuong = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await GiaiThuong.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalGiaiThuong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalGiaiThuong / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allGiaiThuongSort = await GiaiThuong.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allGiaiThuongSort,
                    total: totalGiaiThuong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalGiaiThuong / limit)
                })
            }
            if (!limit) {
                allGiaiThuong = await GiaiThuong.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allGiaiThuong = await GiaiThuong.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allGiaiThuong,
                total: totalGiaiThuong,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalGiaiThuong / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await GiaiThuong.distinct('QuanNhanId')
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
const getGiaiThuongByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const GiaiThuongList = await GiaiThuong.find({
                QuanNhanId: id
            });

            if (!GiaiThuongList || GiaiThuongList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No GiaiThuong found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: GiaiThuongList
            });
        } catch (error) {
            reject(error);
        }
    });
};
const updateHTCVLists = async (id, HTCVList) => {
    try {
        const giaithuong = await GiaiThuong.findById(id);

        if (!giaithuong) {
            return {
                status: 'ERR',
                message: 'HTCV not found',
            };
        }
        if (giaithuong.CacHTCV.includes(HTCVList)) {
            return {
                status: 'OK',
                message: 'HTCV already exists',
            };
        }

        else {
            giaithuong.CacHTCV.push(HTCVList);

            await giaithuong.save();

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
    createGiaiThuong,
    updateGiaiThuong,
    getDetailsGiaiThuong,
    deleteGiaiThuong,
    getAllGiaiThuong,
    deleteManyGiaiThuong,
    getAllType,
    getGiaiThuongByQuanNhanId,
    updateHTCVLists
}