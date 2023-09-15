const HTCV = require("../models/HTCVModel")

const createHTCV = (newHTCV) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucCV, QuanNhanId, HoTen, KhoiLuongCV, DonVi, SoTietCV, SoGioQuyDoi, edituser, edittime, GhiChu } = newHTCV
        try {
            // const checkHTCV = await HTCV.findOne({
            //     HTCVId: HTCVId
            // })
            // if (checkHTCV !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HTCV is already'
            //     })
            // }
            const newHTCV = await HTCV.create({
                HinhThucCV, QuanNhanId, HoTen, KhoiLuongCV, DonVi, SoTietCV, SoGioQuyDoi, edituser, edittime, GhiChu
            })
            if (newHTCV) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHTCV
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHTCV = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCV = await HTCV.findOne({
                _id: id
            })
            if (checkHTCV === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedHTCV = await HTCV.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHTCV
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHTCV = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCV = await HTCV.findOne({
                _id: id
            })
            if (checkHTCV === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await HTCV.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHTCV = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HTCV.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHTCV = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcv = await HTCV.findOne({
                _id: id
            })
            if (htcv === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcv
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllHTCV = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHTCV = await HTCV.count()
            let allHTCV = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HTCV.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHTCV,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCV / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHTCVSort = await HTCV.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHTCVSort,
                    total: totalHTCV,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCV / limit)
                })
            }
            if (!limit) {
                allHTCV = await HTCV.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHTCV = await HTCV.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHTCV,
                total: totalHTCV,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHTCV / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HTCV.distinct('QuanNhanId')
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
const getHTCVByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhCongTacList = await HTCV.find({
                QuanNhanId: id
            });

            if (!quaTrinhCongTacList || quaTrinhCongTacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HTCV found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: quaTrinhCongTacList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHTCV,
    updateHTCV,
    getDetailsHTCV,
    deleteHTCV,
    getAllHTCV,
    deleteManyHTCV,
    getAllType,
    getHTCVByQuanNhanId
}