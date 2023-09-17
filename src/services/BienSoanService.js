const BienSoan = require("../models/BienSoanModel")

const createBienSoan = (newBienSoan) => {
    return new Promise(async (resolve, reject) => {
        const { BienSoanId, QuanNhanId, Ten, LoaiTaiLieu, SoTrang, MaXuatBan, TenNhaXuatBan, NgayXuatBan, SoTacGia, CacTacGia, Quy, Nam, NgonNguSach, NhomNghienCuu, Tai, FileCM, CacHTCV, TrangThai, edituser, edittime, GhiChu } = newBienSoan
        try {
            const checkBienSoan = await BienSoan.findOne({
                LoaiTaiLieu: LoaiTaiLieu,

            })
            if (checkBienSoan !== null) {
                resolve({
                    status: 'ERR',
                    message: 'BienSoan is already'
                })
            }
            else {
                const newBienSoan = await BienSoan.create({
                    BienSoanId, QuanNhanId, Ten, LoaiTaiLieu, SoTrang, MaXuatBan, TenNhaXuatBan, NgayXuatBan, SoTacGia, CacTacGia, Quy, Nam, NgonNguSach, NhomNghienCuu, Tai, FileCM, CacHTCV, TrangThai, edituser, edittime, GhiChu
                })
                if (newBienSoan) {
                    resolve({
                        status: 'OK',
                        message: 'SUCCESS',
                        data: newBienSoan
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateBienSoan = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkBienSoan = await BienSoan.findOne({
                _id: id
            })
            if (checkBienSoan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedBienSoan = await BienSoan.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedBienSoan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteBienSoan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkBienSoan = await BienSoan.findOne({
                _id: id
            })
            if (checkBienSoan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await BienSoan.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyBienSoan = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await BienSoan.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsBienSoan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const biensoan = await BienSoan.findOne({
                _id: id
            }).populate("CacHTCV");
            if (biensoan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: biensoan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllBienSoan = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalBienSoan = await BienSoan.count()
            let allBienSoan = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await BienSoan.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalBienSoan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalBienSoan / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allBienSoanSort = await BienSoan.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allBienSoanSort,
                    total: totalBienSoan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalBienSoan / limit)
                })
            }
            if (!limit) {
                allBienSoan = await BienSoan.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allBienSoan = await BienSoan.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allBienSoan,
                total: totalBienSoan,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalBienSoan / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await BienSoan.distinct('QuanNhanId')
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
const getBienSoanByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const BienSoanList = await BienSoan.find({
                QuanNhanId: id
            });

            if (!BienSoanList || BienSoanList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No BienSoan found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: BienSoanList
            });
        } catch (error) {
            reject(error);
        }
    });
};
const updateHTCVLists = async (id, HTCVList) => {
    try {
        const biensoan = await BienSoan.findById(id);

        if (!biensoan) {
            return {
                status: 'ERR',
                message: 'HTCV not found',
            };
        }
        if (biensoan.CacHTCV.includes(HTCVList)) {
            return {
                status: 'OK',
                message: 'HTCV already exists',
            };
        }

        else {
            biensoan.CacHTCV.push(HTCVList);

            await biensoan.save();

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
    createBienSoan,
    updateBienSoan,
    getDetailsBienSoan,
    deleteBienSoan,
    getAllBienSoan,
    deleteManyBienSoan,
    getAllType,
    getBienSoanByQuanNhanId,
    updateHTCVLists
}