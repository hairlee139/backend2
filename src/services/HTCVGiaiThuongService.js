const HTCVGiaiThuong = require("../models/HTCVGiaiThuongModel")

const createHTCVGiaiThuong = (newHTCVGiaiThuong) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu } = newHTCVGiaiThuong
        try {
            // const checkHTCVGiaiThuong = await HTCVGiaiThuong.findOne({
            //     HTCVGiaiThuongId: HTCVGiaiThuongId
            // })
            // if (checkHTCVGiaiThuong !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HTCVGiaiThuong is already'
            //     })
            // }
            const newHTCVGiaiThuong = await HTCVGiaiThuong.create({
                HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu
            })
            if (newHTCVGiaiThuong) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHTCVGiaiThuong
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHTCVGiaiThuong = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVGiaiThuong = await HTCVGiaiThuong.findOne({
                _id: id
            })
            if (checkHTCVGiaiThuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedHTCVGiaiThuong = await HTCVGiaiThuong.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHTCVGiaiThuong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHTCVGiaiThuong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVGiaiThuong = await HTCVGiaiThuong.findOne({
                _id: id
            })
            if (checkHTCVGiaiThuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await HTCVGiaiThuong.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHTCVGiaiThuong = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HTCVGiaiThuong.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHTCVGiaiThuong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcvgiaithuong = await HTCVGiaiThuong.findOne({
                _id: id
            })
            if (htcvgiaithuong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcvgiaithuong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllHTCVGiaiThuong = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHTCVGiaiThuong = await HTCVGiaiThuong.count()
            let allHTCVGiaiThuong = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HTCVGiaiThuong.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHTCVGiaiThuong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVGiaiThuong / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHTCVGiaiThuongSort = await HTCVGiaiThuong.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHTCVGiaiThuongSort,
                    total: totalHTCVGiaiThuong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVGiaiThuong / limit)
                })
            }
            if (!limit) {
                allHTCVGiaiThuong = await HTCVGiaiThuong.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHTCVGiaiThuong = await HTCVGiaiThuong.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHTCVGiaiThuong,
                total: totalHTCVGiaiThuong,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHTCVGiaiThuong / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HTCVGiaiThuong.distinct('QuanNhanId')
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
const getHTCVGiaiThuongByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcvGiaiThuongList = await HTCVGiaiThuong.find({
                QuanNhanId: id
            });

            if (!htcvGiaiThuongList || htcvGiaiThuongList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HTCVGiaiThuong found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcvGiaiThuongList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHTCVGiaiThuong,
    updateHTCVGiaiThuong,
    getDetailsHTCVGiaiThuong,
    deleteHTCVGiaiThuong,
    getAllHTCVGiaiThuong,
    deleteManyHTCVGiaiThuong,
    getAllType,
    getHTCVGiaiThuongByQuanNhanId
}