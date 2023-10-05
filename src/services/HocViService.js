const HocVi = require("../models/HocViModel")

const createHocVi = (newHocVi) => {
    return new Promise(async (resolve, reject) => {
        const { QuanNhanId, TenHocVi, note, edituser, edittime, lock, lockdate } = newHocVi
        try {
            const checkHocVi = await HocVi.findOne({
                QuanNhanId: QuanNhanId
            })
            if (checkHocVi !== null) {
                resolve({
                    status: 'ERR',
                    message: 'HocVi is already'
                })
            }
            const newHocVi = await HocVi.create({
                QuanNhanId, TenHocVi, note, edituser, edittime, lock, lockdate
            })
            if (newHocVi) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHocVi
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHocVi = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data.TenHocVi);
            const checkHocVi = await HocVi.findOne({
                QuanNhanId: id
            })
            if (checkHocVi === null) {
                const newHocVi = await HocVi.create({
                    QuanNhanId:id, 
                    TenHocVi: data.TenHocVi 
                })
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHocVi
                })
            }
            else{
            const updatedHocVi = await HocVi.findOneAndUpdate(
                { QuanNhanId: id },
                { $set: data },
                { new: true }
            )     
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHocVi
            })
        }
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHocVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHocVi = await HocVi.findOne({
                _id: id
            })
            if (checkHocVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await HocVi.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHocVi = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HocVi.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHocVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hocvi = await HocVi.findOne({
                _id: id
            })
            if (hocvi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: hocvi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllHocVi = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHocVi = await HocVi.count()
            let allHocVi = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HocVi.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHocVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHocVi / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHocViSort = await HocVi.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHocViSort,
                    total: totalHocVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHocVi / limit)
                })
            }
            if (!limit) {
                allHocVi = await HocVi.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHocVi = await HocVi.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHocVi,
                total: totalHocVi,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHocVi / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HocVi.distinct('TenHocVi')
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
const getHocViByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hocViList = await HocVi.find({
                QuanNhanId: id
            });

            if (!hocViList || hocViList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HocVi found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: hocViList
            });
        } catch (error) {
            reject(error);
        }
    });
};
// const getAllHocViFromDonVi = (id) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const hocViCounts = await HocVi.aggregate([
//                 {
//                     $lookup: {
//                         from: 'quannhans', // Tên bảng QuanNhan trong cơ sở dữ liệu
//                         localField: 'QuanNhanId',
//                         foreignField: '_id',
//                         as: 'quannhan',
//                     },
//                 },
//                 {
//                     $unwind: '$quannhan',
//                 },
//                 {
//                     $match: {
//                         'quannhan.DonVi': {
//                             $regex: id, // Sử dụng $regex để kiểm tra xem quannhan.DonVi có chứa giá trị id không
//                             $options: 'i' // Tùy chọn 'i' để không phân biệt chữ hoa chữ thường
//                         },
//                         QuanNhanId: { $exists: true }
//                     },
//                 },
//                 {
//                     $group: {
//                         _id: '$TenHocVi',
//                         total: { $sum: 1 },
//                     },
//                 },
//                 {
//                     $project: {
//                         _id: 0, // Bỏ trường _id ra khỏi kết quả
//                         TenHocVi: '$_id', // Đặt lại tên trường thành TenHocVi
//                         SoLuong: '$total',
//                     },
//                 },
//             ]);
//             // console.log('hocViCounts:', hocViCounts);
//             resolve(hocViCounts);
//         } catch (error) {
//             console.error(error);
//             reject(error);
//         }
//     });
// };
const getAllHocViFromDonVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hocViCounts = await HocVi.aggregate([
                {
                    $lookup: {
                        from: 'quannhans', // Tên bảng QuanNhan trong cơ sở dữ liệu
                        localField: 'QuanNhanId',
                        foreignField: '_id',
                        as: 'quannhan',
                    },
                },
                {
                    $unwind: {
                        path: '$quannhan',
                        preserveNullAndEmptyArrays: true, // Giữ các HocVi không có quannhan
                    },
                },
                {
                    $facet: {
                        hocViWithQuanNhan: [
                            {
                                $match: {
                                    'quannhan.DonVi': {
                                        $regex: id, // Sử dụng $regex để kiểm tra xem quannhan.DonVi có chứa giá trị id không
                                        $options: 'i', // Tùy chọn 'i' để không phân biệt chữ hoa chữ thường
                                    },
                                    QuanNhanId: { $exists: true },
                                },
                            },
                            {
                                $group: {
                                    _id: '$TenHocVi',
                                    total: { $sum: 1 },
                                },
                            },
                            {
                                $project: {
                                    _id: 0, // Bỏ trường _id ra khỏi kết quả
                                    TenHocVi: '$_id', // Đặt lại tên trường thành TenHocVi
                                    SoLuong: '$total',
                                },
                            },
                        ],
                        hocViWithoutQuanNhan: [
                            {
                                $match: {
                                    'quannhan.DonVi': { $exists: false }, // HocVi không có quannhan
                                },
                            },
                            {
                                $group: {
                                    _id: '$TenHocVi',
                                    total: { $sum: 1 },
                                },
                            },
                            {
                                $project: {
                                    _id: 0, // Bỏ trường _id ra khỏi kết quả
                                    TenHocVi: '$_id', // Đặt lại tên trường thành TenHocVi
                                    SoLuong: '$total',
                                },
                            },
                        ],
                    },
                },
                {
                    $project: {
                        hocViCounts: {
                            $concatArrays: ['$hocViWithQuanNhan', '$hocViWithoutQuanNhan'], // Kết hợp kết quả từ cả hai tìm kiếm
                        },
                    },
                },
            ]);

            // Tạo một mảng chứa tất cả các trường TenHocVi cần hiển thị
            const hocViTypes = ['Tiến sỹ khoa học', 'Tiến sỹ', 'Thạc sỹ', 'Kỹ sư', 'Cử nhân', 'Khác'];

            // Tạo một đối tượng để lưu số lượng học vị cho mỗi trường
            const hocViCountsMap = {};

            // Khởi tạo số lượng mặc định cho tất cả các trường là 0
            hocViTypes.forEach((hocViType) => {
                hocViCountsMap[hocViType] = 0;
            });

            // Cập nhật số lượng thực tế từ dữ liệu API
            hocViCounts[0].hocViCounts.forEach((item) => {
                hocViCountsMap[item.TenHocVi] = item.SoLuong;
            });

            // Tạo mảng kết quả cuối cùng dựa trên số lượng học vị của mỗi trường
            const finalResult = hocViTypes.map((hocViType) => ({
                TenHocVi: hocViType,
                SoLuong: hocViCountsMap[hocViType],
            }));

            resolve(finalResult);
        } catch (error) {
            console.error(error);
            reject(error);
        }
    });
};

module.exports = {
    createHocVi,
    updateHocVi,
    getDetailsHocVi,
    deleteHocVi,
    getAllHocVi,
    deleteManyHocVi,
    getAllType,
    getHocViByQuanNhanId,
    getAllHocViFromDonVi
}