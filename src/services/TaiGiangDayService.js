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
// const getAllTaiGiangDayFromId = (id) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const TaiGiangDayCounts = await TaiGiangDay.aggregate([
//                 {
//                     $lookup: {
//                         from: 'quannhans', // Tên bảng QuanNhan trong cơ sở dữ liệu
//                         localField: 'QuanNhanId',
//                         foreignField: 'QuanNhanId',
//                         as: 'quannhan',
//                     },
//                 },
//                 {
//                     $unwind: {
//                         path: '$quannhan',
//                         preserveNullAndEmptyArrays: true, 
//                     },
//                 },
//                 {
//                     $facet: {
//                         hocViWithQuanNhan: [
//                             {
//                                 $match: {
//                                     'quannhan.DonVi': {
//                                         $regex: id, // Sử dụng $regex để kiểm tra xem quannhan.DonVi có chứa giá trị id không
//                                         $options: 'i', // Tùy chọn 'i' để không phân biệt chữ hoa chữ thường
//                                     },
//                                     QuanNhanId: { $exists: true },
//                                 },
//                             },
//                             {
//                                 $group: {
//                                     _id: '$TenHocVi',
//                                     total: { $sum: 1 },
//                                 },
//                             },
//                             {
//                                 $project: {
//                                     _id: 0, // Bỏ trường _id ra khỏi kết quả
//                                     TenHocVi: '$_id', // Đặt lại tên trường thành TenHocVi
//                                     SoLuong: '$total',
//                                 },
//                             },
//                         ],
//                         hocViWithoutQuanNhan: [
//                             {
//                                 $match: {
//                                     'quannhan.DonVi': { $exists: false }, // HocVi không có quannhan
//                                 },
//                             },
//                             {
//                                 $group: {
//                                     _id: '$TenHocVi',
//                                     total: { $sum: 1 },
//                                 },
//                             },
//                             {
//                                 $project: {
//                                     _id: 0, // Bỏ trường _id ra khỏi kết quả
//                                     TenHocVi: '$_id', // Đặt lại tên trường thành TenHocVi
//                                     SoLuong: '$total',
//                                 },
//                             },
//                         ],
//                     },
//                 },
//                 {
//                     $project: {
//                         hocViCounts: {
//                             $concatArrays: ['$hocViWithQuanNhan', '$hocViWithoutQuanNhan'], // Kết hợp kết quả từ cả hai tìm kiếm
//                         },
//                     },
//                 },
//             ]);

//             // Tạo một mảng chứa tất cả các trường TenHocVi cần hiển thị
//             const hocViTypes = ['Tiến sỹ khoa học', 'Tiến sỹ', 'Thạc sỹ', 'Kỹ sư', 'Cử nhân', 'Khác'];

//             // Tạo một đối tượng để lưu số lượng học vị cho mỗi trường
//             const hocViCountsMap = {};

//             // Khởi tạo số lượng mặc định cho tất cả các trường là 0
//             hocViTypes.forEach((hocViType) => {
//                 hocViCountsMap[hocViType] = 0;
//             });

//             // Cập nhật số lượng thực tế từ dữ liệu API
//             hocViCounts[0].hocViCounts.forEach((item) => {
//                 hocViCountsMap[item.TenHocVi] = item.SoLuong;
//             });

//             // Tạo mảng kết quả cuối cùng dựa trên số lượng học vị của mỗi trường
//             const finalResult = hocViTypes.map((hocViType) => ({
//                 TenHocVi: hocViType,
//                 SoLuong: hocViCountsMap[hocViType],
//             }));

//             resolve(finalResult);
//         } catch (error) {
//             console.error(error);
//             reject(error);
//         }
//     });
// };
// const getTongTaiGiangDayFromId = (id) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const TaiGiangDayCounts = await TaiGiangDay.aggregate([
//                 {
//                     $match: { QuanNhanId: id } // Filter by QuanNhanId
//                 },
//                 {
//                     $group: {
//                         _id: null,
//                         totalGioChuan: { $sum: "$GioChuan" } // Calculate total of GioChuan
//                     }
//                 }
//             ]);

//             if (TaiGiangDayCounts.length > 0) {
//                 resolve(TaiGiangDayCounts[0].totalGioChuan);
//             } else {
//                 resolve(0); // If no matching records, return 0
//             }
//         } catch (error) {
//             reject(error);
//         }
//     });
// };
const getTongTaiGiangDayFromId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const TaiGiangDayList = await TaiGiangDay.find({
                QuanNhanId: id
            });

            if (!TaiGiangDayList || TaiGiangDayList.length === 0) {
                resolve(0); // If no matching records, return 0
            } else {
                const totalGioChuan = TaiGiangDayList.reduce((total, taiGiangDay) => {
                    return total + taiGiangDay.GioChuan;
                }, 0);

                resolve(totalGioChuan);
            }
        } catch (error) {
            reject(error);
        }
    });
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
    updateHTCVLists,
    getTongTaiGiangDayFromId
}