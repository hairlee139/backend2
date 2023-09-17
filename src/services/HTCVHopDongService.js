const HTCVHopDong = require("../models/HTCVHopDongModel")

const createHTCVHopDong = (newHTCVHopDong) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu } = newHTCVHopDong
        try {
            // const checkHTCVHopDong = await HTCVHopDong.findOne({
            //     HTCVHopDongId: HTCVHopDongId
            // })
            // if (checkHTCVHopDong !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HTCVHopDong is already'
            //     })
            // }
            const newHTCVHopDong = await HTCVHopDong.create({
                HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu
            })
            if (newHTCVHopDong) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHTCVHopDong
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHTCVHopDong = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVHopDong = await HTCVHopDong.findOne({
                _id: id
            })
            if (checkHTCVHopDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedHTCVHopDong = await HTCVHopDong.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHTCVHopDong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHTCVHopDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVHopDong = await HTCVHopDong.findOne({
                _id: id
            })
            if (checkHTCVHopDong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await HTCVHopDong.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHTCVHopDong = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HTCVHopDong.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHTCVHopDong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcvsangchehopdong = await HTCVHopDong.findOne({
                _id: id
            })
            if (htcvsangchehopdong === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcvsangchehopdong
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllHTCVHopDong = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHTCVHopDong = await HTCVHopDong.count()
            let allHTCVHopDong = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HTCVHopDong.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHTCVHopDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVHopDong / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHTCVHopDongSort = await HTCVHopDong.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHTCVHopDongSort,
                    total: totalHTCVHopDong,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVHopDong / limit)
                })
            }
            if (!limit) {
                allHTCVHopDong = await HTCVHopDong.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHTCVHopDong = await HTCVHopDong.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHTCVHopDong,
                total: totalHTCVHopDong,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHTCVHopDong / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HTCVHopDong.distinct('QuanNhanId')
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
const getHTCVHopDongByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcvHopDongList = await HTCVHopDong.find({
                QuanNhanId: id
            });

            if (!htcvHopDongList || htcvHopDongList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HTCVHopDong found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcvHopDongList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHTCVHopDong,
    updateHTCVHopDong,
    getDetailsHTCVHopDong,
    deleteHTCVHopDong,
    getAllHTCVHopDong,
    deleteManyHTCVHopDong,
    getAllType,
    getHTCVHopDongByQuanNhanId
}