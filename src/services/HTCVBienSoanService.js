const HTCVBienSoan = require("../models/HTCVBienSoanModel")

const createHTCVBienSoan = (newHTCVBienSoan) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, Trang, SoGioQuyDoi, VaiTro, edituser, edittime, GhiChu } = newHTCVBienSoan
        try {
            // const checkHTCVBienSoan = await HTCVBienSoan.findOne({
            //     HTCVBienSoanId: HTCVBienSoanId
            // })
            // if (checkHTCVBienSoan !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HTCVBienSoan is already'
            //     })
            // }
            const newHTCVBienSoan = await HTCVBienSoan.create({
                HinhThucCV, QuanNhanId, HoTen, DonVi, Trang, SoGioQuyDoi, VaiTro, edituser, edittime, GhiChu
            })
            if (newHTCVBienSoan) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHTCVBienSoan
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHTCVBienSoan = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVBienSoan = await HTCVBienSoan.findOne({
                _id: id
            })
            if (checkHTCVBienSoan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedHTCVBienSoan = await HTCVBienSoan.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHTCVBienSoan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHTCVBienSoan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVBienSoan = await HTCVBienSoan.findOne({
                _id: id
            })
            if (checkHTCVBienSoan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await HTCVBienSoan.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHTCVBienSoan = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HTCVBienSoan.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHTCVBienSoan = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcvbiensoan = await HTCVBienSoan.findOne({
                _id: id
            })
            if (htcvbiensoan === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcvbiensoan
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllHTCVBienSoan = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHTCVBienSoan = await HTCVBienSoan.count()
            let allHTCVBienSoan = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HTCVBienSoan.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHTCVBienSoan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVBienSoan / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHTCVBienSoanSort = await HTCVBienSoan.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHTCVBienSoanSort,
                    total: totalHTCVBienSoan,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVBienSoan / limit)
                })
            }
            if (!limit) {
                allHTCVBienSoan = await HTCVBienSoan.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHTCVBienSoan = await HTCVBienSoan.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHTCVBienSoan,
                total: totalHTCVBienSoan,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHTCVBienSoan / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HTCVBienSoan.distinct('QuanNhanId')
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
const getHTCVBienSoanByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcvBienSoanList = await HTCVBienSoan.find({
                QuanNhanId: id
            });

            if (!htcvBienSoanList || htcvBienSoanList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HTCVBienSoan found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcvBienSoanList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHTCVBienSoan,
    updateHTCVBienSoan,
    getDetailsHTCVBienSoan,
    deleteHTCVBienSoan,
    getAllHTCVBienSoan,
    deleteManyHTCVBienSoan,
    getAllType,
    getHTCVBienSoanByQuanNhanId
}