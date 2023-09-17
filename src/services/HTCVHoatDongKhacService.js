const HTCVHoatDongKhac = require("../models/HTCVHoatDongKhacModel")

const createHTCVHoatDongKhac = (newHTCVHoatDongKhac) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu } = newHTCVHoatDongKhac
        try {
            // const checkHTCVHoatDongKhac = await HTCVHoatDongKhac.findOne({
            //     HTCVHoatDongKhacId: HTCVHoatDongKhacId
            // })
            // if (checkHTCVHoatDongKhac !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HTCVHoatDongKhac is already'
            //     })
            // }
            const newHTCVHoatDongKhac = await HTCVHoatDongKhac.create({
                HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu
            })
            if (newHTCVHoatDongKhac) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHTCVHoatDongKhac
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHTCVHoatDongKhac = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVHoatDongKhac = await HTCVHoatDongKhac.findOne({
                _id: id
            })
            if (checkHTCVHoatDongKhac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedHTCVHoatDongKhac = await HTCVHoatDongKhac.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHTCVHoatDongKhac
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHTCVHoatDongKhac = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVHoatDongKhac = await HTCVHoatDongKhac.findOne({
                _id: id
            })
            if (checkHTCVHoatDongKhac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await HTCVHoatDongKhac.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHTCVHoatDongKhac = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HTCVHoatDongKhac.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHTCVHoatDongKhac = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcvhoatdongkhac = await HTCVHoatDongKhac.findOne({
                _id: id
            })
            if (htcvhoatdongkhac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcvhoatdongkhac
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllHTCVHoatDongKhac = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHTCVHoatDongKhac = await HTCVHoatDongKhac.count()
            let allHTCVHoatDongKhac = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HTCVHoatDongKhac.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHTCVHoatDongKhac,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVHoatDongKhac / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHTCVHoatDongKhacSort = await HTCVHoatDongKhac.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHTCVHoatDongKhacSort,
                    total: totalHTCVHoatDongKhac,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVHoatDongKhac / limit)
                })
            }
            if (!limit) {
                allHTCVHoatDongKhac = await HTCVHoatDongKhac.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHTCVHoatDongKhac = await HTCVHoatDongKhac.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHTCVHoatDongKhac,
                total: totalHTCVHoatDongKhac,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHTCVHoatDongKhac / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HTCVHoatDongKhac.distinct('QuanNhanId')
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
const getHTCVHoatDongKhacByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcvHoatDongKhacList = await HTCVHoatDongKhac.find({
                QuanNhanId: id
            });

            if (!htcvHoatDongKhacList || htcvHoatDongKhacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HTCVHoatDongKhac found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcvHoatDongKhacList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHTCVHoatDongKhac,
    updateHTCVHoatDongKhac,
    getDetailsHTCVHoatDongKhac,
    deleteHTCVHoatDongKhac,
    getAllHTCVHoatDongKhac,
    deleteManyHTCVHoatDongKhac,
    getAllType,
    getHTCVHoatDongKhacByQuanNhanId
}