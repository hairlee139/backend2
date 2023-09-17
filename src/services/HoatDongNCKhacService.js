const HoatDongNCKhac = require("../models/HoatDongNCKhacModel")

const createHoatDongNCKhac = (newHoatDongNCKhac) => {
    return new Promise(async (resolve, reject) => {
        const { HoatDongKhacId, QuanNhanId, NhomNghienCuu, LoaiHoatDong, NoiDungThucHien, MoTaThem, ThoiDiemThucHien, Quy, Nam, SoLuongTacGia, FileCM, Tai, TrangThai, CacHTCV, edituser, edittime, GhiChu } = newHoatDongNCKhac
        try {
            const checkHoatDongNCKhac = await HoatDongNCKhac.findOne({
                LoaiHoatDong: LoaiHoatDong,

            })
            if (checkHoatDongNCKhac !== null) {
                resolve({
                    status: 'ERR',
                    message: 'HoatDongNCKhac is already'
                })
            }
            else {
                const newHoatDongNCKhac = await HoatDongNCKhac.create({
                    HoatDongKhacId, QuanNhanId, NhomNghienCuu, LoaiHoatDong, NoiDungThucHien, MoTaThem, ThoiDiemThucHien, Quy, Nam, SoLuongTacGia, FileCM, Tai, TrangThai, CacHTCV, edituser, edittime, GhiChu
                })
                if (newHoatDongNCKhac) {
                    resolve({
                        status: 'OK',
                        message: 'SUCCESS',
                        data: newHoatDongNCKhac
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHoatDongNCKhac = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHoatDongNCKhac = await HoatDongNCKhac.findOne({
                _id: id
            })
            if (checkHoatDongNCKhac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedHoatDongNCKhac = await HoatDongNCKhac.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHoatDongNCKhac
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHoatDongNCKhac = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHoatDongNCKhac = await HoatDongNCKhac.findOne({
                _id: id
            })
            if (checkHoatDongNCKhac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await HoatDongNCKhac.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHoatDongNCKhac = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HoatDongNCKhac.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHoatDongNCKhac = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hoatdongnckhac = await HoatDongNCKhac.findOne({
                _id: id
            }).populate("CacHTCV");
            if (hoatdongnckhac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: hoatdongnckhac
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllHoatDongNCKhac = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHoatDongNCKhac = await HoatDongNCKhac.count()
            let allHoatDongNCKhac = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HoatDongNCKhac.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHoatDongNCKhac,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHoatDongNCKhac / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHoatDongNCKhacSort = await HoatDongNCKhac.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHoatDongNCKhacSort,
                    total: totalHoatDongNCKhac,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHoatDongNCKhac / limit)
                })
            }
            if (!limit) {
                allHoatDongNCKhac = await HoatDongNCKhac.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHoatDongNCKhac = await HoatDongNCKhac.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHoatDongNCKhac,
                total: totalHoatDongNCKhac,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHoatDongNCKhac / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HoatDongNCKhac.distinct('QuanNhanId')
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
const getHoatDongNCKhacByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const HoatDongNCKhacList = await HoatDongNCKhac.find({
                QuanNhanId: id
            });

            if (!HoatDongNCKhacList || HoatDongNCKhacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HoatDongNCKhac found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: HoatDongNCKhacList
            });
        } catch (error) {
            reject(error);
        }
    });
};
const updateHTCVLists = async (id, HTCVList) => {
    try {
        const hoatdongnckhac = await HoatDongNCKhac.findById(id);

        if (!hoatdongnckhac) {
            return {
                status: 'ERR',
                message: 'HTCV not found',
            };
        }
        if (hoatdongnckhac.CacHTCV.includes(HTCVList)) {
            return {
                status: 'OK',
                message: 'HTCV already exists',
            };
        }

        else {
            hoatdongnckhac.CacHTCV.push(HTCVList);

            await hoatdongnckhac.save();

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
    createHoatDongNCKhac,
    updateHoatDongNCKhac,
    getDetailsHoatDongNCKhac,
    deleteHoatDongNCKhac,
    getAllHoatDongNCKhac,
    deleteManyHoatDongNCKhac,
    getAllType,
    getHoatDongNCKhacByQuanNhanId,
    updateHTCVLists
}