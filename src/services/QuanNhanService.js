const QuanNhan = require("../models/QuanNhanModel")
const DonVi= require("../models/DonViModel")
const createQuanNhan = (newQuanNhan) => {
    return new Promise(async (resolve, reject) => {
        const { QuanNhanId, HoTen, NgaySinh, GioiTinh, QueQuan, DiaChi, SoDienThoai, Email, HoatDong, QuanHam, DonVi, LoaiQN } = newQuanNhan
        try {
            const checkQuanNhan = await QuanNhan.findOne({
                QuanNhanId: QuanNhanId
            })
            if (checkQuanNhan !== null) {
                resolve({
                    status: 'ERR',
                    message: 'Hoten is already'
                })
            }
            else {
                const newQuanNhan = await QuanNhan.create({
                    QuanNhanId,
                    HoTen,
                    NgaySinh,
                    GioiTinh,
                    QueQuan,
                    DiaChi,
                    SoDienThoai,
                    Email,
                    HoatDong,
                    QuanHam,
                    DonVi,
                    LoaiQN
                })
                if (newQuanNhan) {
                    resolve({
                        status: 'OK',
                        message: 'SUCCESS',
                        data: newQuanNhan
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateQuanNhan = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuanNhan = await QuanNhan.findOne({
                _id: id
            })
            if (checkQuanNhan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                })
            }

            const updatedQuanNhan = await QuanNhan.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedQuanNhan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteQuanNhan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkQuanNhan = await QuanNhan.findOne({
                _id: id
            })
            if (checkQuanNhan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                })
            }

            await QuanNhan.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Quannhan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyQuanNhan = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await QuanNhan.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Quannhan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}
const getQuanNhanFromDonVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(id)
            const quanNhan = await QuanNhan.find({
                DonVi: { $regex: id, $options: 'i' }
            });
            console.log(id)
            if (!quanNhan || quanNhan.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No quanNhan found'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quanNhan
            });
        } catch (error) {
            reject(error);
        }
    });
};
const getQuanNhanFromDonViCon = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const donVi = await DonVi.findById(id);
        
            if (!donVi) {
            return {
                status: 'ERR',
                message: 'No DonVi found'
                    };
            }

            const quanNhan = await QuanNhan.find({
                DonVi: donVi.code
            });
            if (!quanNhan || quanNhan.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No quanNhan found'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quanNhan
            });
        } catch (error) {
            reject(error);
        }
    });
};
const getDetailsQuanNhan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quannhan = await QuanNhan.findOne({
                _id: id
            })
            if (quannhan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quannhan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllQuanNhan = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalQuanNhan = await QuanNhan.count()
            let allQuanNhan = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await QuanNhan.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalQuanNhan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuanNhan / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allQuanNhanSort = await QuanNhan.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allQuanNhanSort,
                    total: totalQuanNhan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalQuanNhan / limit)
                })
            }
            if (!limit) {
                allQuanNhan = await QuanNhan.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allQuanNhan = await QuanNhan.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allQuanNhan,
                total: totalQuanNhan,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalQuanNhan / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await QuanNhan.distinct('LoaiQN')
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
const getQuanNhanByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quannhan = await QuanNhan.findOne({
                QuanNhanId: id
            });

            if (!quannhan) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quannhan
            });
        } catch (error) {
            reject(error);
        }
    });
};
const getObjectIdByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quannhan = await QuanNhan.findOne({
                QuanNhanId: id
            });

            if (!quannhan) {
                resolve({
                    status: 'ERR',
                    message: 'Quannhan is not defined'
                });
            }

            resolve({
                data: quannhan._id
            });
        } catch (error) {
            reject(error);
        }
    });
};
// const getSoLuongQuanNhanFromDonVi = (id) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const soLuongQuanNhan = await QuanNhan.aggregate([
//                 {
//                     $match: {
//                         DonVi: {
//                             $regex: id, 
//                             $options: 'i'
//                         }
//                     }
//                 },
//                 {
//                     $count: 'total'
//                 }
//             ]);

//             resolve(soLuongQuanNhan[0]?.total || 0);
//         } catch (error) {
//             reject(error);
//         }
//     });
// }
const getSoLuongQuanNhanFromDonVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quanNhans = await QuanNhan.aggregate([
                {
                    $match: {
                        'DonVi': {
                            $regex: id,
                            $options: 'i'
                        }
                    }
                }
            ]);
            const donViInfo = await DonVi.findOne({ code: id });
            const soLuongQuanNhan = quanNhans.length;
            const bienche= donViInfo.bienche;
            resolve({ soLuongQuanNhan, bienche });
            // resolve (bienche);
        } catch (error) {
            reject(error);
        }
    });
}
const getAllQuanHamFromDonVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quanHamCounts = await QuanNhan.aggregate([
                {
                    $match: {
                        'DonVi': {
                            $regex: id,
                            $options: 'i'
                        },
                        'QuanHam': { $exists: true } // Đảm bảo có thông tin quân hàm
                    }
                },
                {
                    $group: {
                        _id: '$QuanHam',
                        total: { $sum: 1 }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        TenQuanHam: '$_id',
                        SoLuong: '$total'
                    }
                }
            ]);

            // Tạo một mảng chứa tất cả các quân hàm cần hiển thị
            const quanHamTypes = [
                'Thiếu úy', 'Trung úy', 'Thượng úy', 'Đại úy', 'Thiếu tá',
                'Trung tá', 'Thượng tá', 'Đại tá', 'Thiếu tướng',
                'Trung tướng', 'Thượng tướng', 'Đại tướng'
            ];

            // Tạo một đối tượng để lưu số lượng quân hàm cho mỗi quân hàm
            const quanHamCountsMap = {};

            // Khởi tạo số lượng mặc định cho tất cả các quân hàm là 0
            quanHamTypes.forEach((quanHamType) => {
                quanHamCountsMap[quanHamType] = 0;
            });

            // Cập nhật số lượng thực tế từ dữ liệu aggregation
            quanHamCounts.forEach((item) => {
                quanHamCountsMap[item.TenQuanHam] = item.SoLuong;
            });

            // Tạo mảng kết quả cuối cùng dựa trên số lượng quân hàm của mỗi quân hàm
            const finalResult = quanHamTypes.map((quanHamType) => ({
                TenQuanHam: quanHamType,
                SoLuong: quanHamCountsMap[quanHamType],
            }));

            resolve(finalResult);
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
};
const getAllDoTuoiFromDonVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const dobRanges = [
                { min: year - 29, max: year - 20 },
                { min: year - 39, max: year - 30 },
                { min: year - 44, max: year - 40 },
                { min: year - 49, max: year - 45 },
                { min: year - 54, max: year - 50 },
                { min: year - 60, max: year - 55 },
                { min: 0, max: year - 61 } // trên 60 tuổi
            ];

            const dotuois = await QuanNhan.aggregate([
                {
                    $match: {
                        'DonVi': {
                            $regex: id,
                            $options: 'i'
                        },
                        'NgaySinh': { $exists: true } // Đảm bảo có thông tin ngày sinh
                    }
                },
                {
                    $project: {
                        Tuoi: {
                            $subtract: [year, { $year: '$NgaySinh' }]
                        }
                    }
                },
                {
                    $group: {
                        _id: null,
                        dotuoi2029: {
                            $sum: { $cond: [{ $and: [{ $gte: ["$Tuoi", 20] }, { $lte: ["$Tuoi", 29] }] }, 1, 0] }
                        },
                        dotuoi3039: {
                            $sum: { $cond: [{ $and: [{ $gte: ["$Tuoi", 30] }, { $lte: ["$Tuoi", 39] }] }, 1, 0] }
                        },
                        dotuoi4044: {
                            $sum: { $cond: [{ $and: [{ $gte: ["$Tuoi", 40] }, { $lte: ["$Tuoi", 44] }] }, 1, 0] }
                        },
                        dotuoi4549: {
                            $sum: { $cond: [{ $and: [{ $gte: ["$Tuoi", 45] }, { $lte: ["$Tuoi", 49] }] }, 1, 0] }
                        },
                        dotuoi5054: {
                            $sum: { $cond: [{ $and: [{ $gte: ["$Tuoi", 50] }, { $lte: ["$Tuoi", 54] }] }, 1, 0] }
                        },
                        dotuoi5560: {
                            $sum: { $cond: [{ $and: [{ $gte: ["$Tuoi", 55] }, { $lte: ["$Tuoi", 60] }] }, 1, 0] }
                        },
                        dotuoi60: {
                            $sum: { $cond: [{ $gte: ["$Tuoi", 61] }, 1, 0] }
                        }
                    }
                }
            ]);

            const result = {
                dotuoi2029: 0,
                dotuoi3039: 0,
                dotuoi4044: 0,
                dotuoi4549: 0,
                dotuoi5054: 0,
                dotuoi5560: 0,
                dotuoi60: 0,
                ...dotuois[0]
            };

            resolve(result);
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
};



module.exports = {
    createQuanNhan,
    updateQuanNhan,
    getDetailsQuanNhan,
    deleteQuanNhan,
    getAllQuanNhan,
    deleteManyQuanNhan,
    getAllType,
    getQuanNhanByQuanNhanId,
    getQuanNhanFromDonVi,
    getObjectIdByQuanNhanId,
    getSoLuongQuanNhanFromDonVi,
    getAllQuanHamFromDonVi,
    getAllDoTuoiFromDonVi,
    getQuanNhanFromDonViCon
}