const SangChe = require("../models/SangCheModel")

const createSangChe = (newSangChe) => {
    return new Promise(async (resolve, reject) => {
        const { SangCheId, QuanNhanId, TenSangChe, LoaiDangKy, DonViCap, NhomNghienCuu, ThoiDiemDangKy, SoTacGia, CacTacGia, Quy, Nam, FileCM, Tai, TrangThai, CacHTCV, edituser, edittime, GhiChu } = newSangChe
        try {
            const checkSangChe = await SangChe.findOne({
                TenSangChe: TenSangChe,

            })
            if (checkSangChe !== null) {
                resolve({
                    status: 'ERR',
                    message: 'SangChe is already'
                })
            }
            else {
                const newSangChe = await SangChe.create({
                    SangCheId, QuanNhanId, TenSangChe, LoaiDangKy, DonViCap, NhomNghienCuu, ThoiDiemDangKy, SoTacGia, CacTacGia, Quy, Nam, FileCM, Tai, TrangThai, CacHTCV, edituser, edittime, GhiChu
                })
                if (newSangChe) {
                    resolve({
                        status: 'OK',
                        message: 'SUCCESS',
                        data: newSangChe
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateSangChe = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkSangChe = await SangChe.findOne({
                _id: id
            })
            if (checkSangChe === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedSangChe = await SangChe.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedSangChe
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteSangChe = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkSangChe = await SangChe.findOne({
                _id: id
            })
            if (checkSangChe === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await SangChe.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManySangChe = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await SangChe.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsSangChe = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const biensoan = await SangChe.findOne({
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

const getAllSangChe = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalSangChe = await SangChe.count()
            let allSangChe = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await SangChe.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalSangChe,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalSangChe / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allSangCheSort = await SangChe.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allSangCheSort,
                    total: totalSangChe,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalSangChe / limit)
                })
            }
            if (!limit) {
                allSangChe = await SangChe.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allSangChe = await SangChe.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allSangChe,
                total: totalSangChe,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalSangChe / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await SangChe.distinct('QuanNhanId')
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
const getSangCheByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const SangCheList = await SangChe.find({
                QuanNhanId: id
            });

            if (!SangCheList || SangCheList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No SangChe found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: SangCheList
            });
        } catch (error) {
            reject(error);
        }
    });
};
const updateHTCVLists = async (id, HTCVList) => {
    try {
        const biensoan = await SangChe.findById(id);

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
    createSangChe,
    updateSangChe,
    getDetailsSangChe,
    deleteSangChe,
    getAllSangChe,
    deleteManySangChe,
    getAllType,
    getSangCheByQuanNhanId,
    updateHTCVLists
}