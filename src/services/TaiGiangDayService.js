const TaiGiangDay = require("../models/TaiGiangDayModel")

const createTaiGiangDay = (newTaiGiangDay) => {
    return new Promise(async (resolve, reject) => {
        const { code, QuanNhanId, MaLop, MaMonHoc, TenMonHoc, SoTinChi, GioChuan, SiSo, HTDT, KetThuc, Quy, LoaiHinhDT, Nam, HocKy, HTThi, SoTiet, FileCM, THCSDT, TrangThai, CacHTCV, edituser, edittime, GhiChu } = newTaiGiangDay
        try {
            const checkTaiGiangDay = await TaiGiangDay.findOne({
                MaLop: MaLop,
                MaMonHoc: MaMonHoc
            })
            if (checkTaiGiangDay !== null) {
                resolve({
                    status: 'ERR',
                    message: 'TaiGiangDay is already'
                })
            }
            else {
                const newTaiGiangDay = await TaiGiangDay.create({
                    code, QuanNhanId, MaLop, MaMonHoc, TenMonHoc, SoTinChi, GioChuan, SiSo, HTDT, LoaiHinhDT, KetThuc, Quy, Nam, HocKy, HTThi, SoTiet, FileCM, THCSDT, TrangThai, CacHTCV, edituser, edittime, GhiChu
                })
                if (newTaiGiangDay) {
                    resolve({
                        status: 'OK',
                        message: 'SUCCESS',
                        data: newTaiGiangDay
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateTaiGiangDay = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTaiGiangDay = await TaiGiangDay.findOne({
                _id: id
            })
            if (checkTaiGiangDay === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedTaiGiangDay = await TaiGiangDay.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedTaiGiangDay
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteTaiGiangDay = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTaiGiangDay = await TaiGiangDay.findOne({
                _id: id
            })
            if (checkTaiGiangDay === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await TaiGiangDay.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyTaiGiangDay = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await TaiGiangDay.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsTaiGiangDay = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const taigiangday = await TaiGiangDay.findOne({
                _id: id
            }).populate("CacHTCV");
            if (taigiangday === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: taigiangday
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllTaiGiangDay = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalTaiGiangDay = await TaiGiangDay.count()
            let allTaiGiangDay = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await TaiGiangDay.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalTaiGiangDay,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalTaiGiangDay / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allTaiGiangDaySort = await TaiGiangDay.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allTaiGiangDaySort,
                    total: totalTaiGiangDay,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalTaiGiangDay / limit)
                })
            }
            if (!limit) {
                allTaiGiangDay = await TaiGiangDay.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allTaiGiangDay = await TaiGiangDay.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allTaiGiangDay,
                total: totalTaiGiangDay,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalTaiGiangDay / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await TaiGiangDay.distinct('QuanNhanId')
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
const getTaiGiangDayByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const TaiGiangDayList = await TaiGiangDay.find({
                QuanNhanId: id
            });

            if (!TaiGiangDayList || TaiGiangDayList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No TaiGiangDay found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: TaiGiangDayList
            });
        } catch (error) {
            reject(error);
        }
    });
};
const updateHTCVLists = async (id, HTCVList) => {
    try {
        const taigiangday = await TaiGiangDay.findById(id);

        if (!taigiangday) {
            return {
                status: 'ERR',
                message: 'HTCV not found',
            };
        }
        if (taigiangday.CacHTCV.includes(HTCVList)) {
            return {
                status: 'OK',
                message: 'HTCV already exists',
            };
        }

        else {
            taigiangday.CacHTCV.push(HTCVList);

            await taigiangday.save();

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
    createTaiGiangDay,
    updateTaiGiangDay,
    getDetailsTaiGiangDay,
    deleteTaiGiangDay,
    getAllTaiGiangDay,
    deleteManyTaiGiangDay,
    getAllType,
    getTaiGiangDayByQuanNhanId,
    updateHTCVLists
}