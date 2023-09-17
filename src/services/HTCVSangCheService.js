const HTCVSangChe = require("../models/HTCVSangCheModel")

const createHTCVSangChe = (newHTCVSangChe) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu } = newHTCVSangChe
        try {
            // const checkHTCVSangChe = await HTCVSangChe.findOne({
            //     HTCVSangCheId: HTCVSangCheId
            // })
            // if (checkHTCVSangChe !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HTCVSangChe is already'
            //     })
            // }
            const newHTCVSangChe = await HTCVSangChe.create({
                HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu
            })
            if (newHTCVSangChe) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHTCVSangChe
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHTCVSangChe = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVSangChe = await HTCVSangChe.findOne({
                _id: id
            })
            if (checkHTCVSangChe === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedHTCVSangChe = await HTCVSangChe.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHTCVSangChe
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHTCVSangChe = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVSangChe = await HTCVSangChe.findOne({
                _id: id
            })
            if (checkHTCVSangChe === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await HTCVSangChe.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHTCVSangChe = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HTCVSangChe.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHTCVSangChe = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcv = await HTCVSangChe.findOne({
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

const getAllHTCVSangChe = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHTCVSangChe = await HTCVSangChe.count()
            let allHTCVSangChe = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HTCVSangChe.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHTCVSangChe,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVSangChe / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHTCVSangCheSort = await HTCVSangChe.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHTCVSangCheSort,
                    total: totalHTCVSangChe,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVSangChe / limit)
                })
            }
            if (!limit) {
                allHTCVSangChe = await HTCVSangChe.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHTCVSangChe = await HTCVSangChe.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHTCVSangChe,
                total: totalHTCVSangChe,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHTCVSangChe / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HTCVSangChe.distinct('QuanNhanId')
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
const getHTCVSangCheByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcvSangCheList = await HTCVSangChe.find({
                QuanNhanId: id
            });

            if (!htcvSangCheList || htcvSangCheList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HTCVSangChe found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcvSangCheList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHTCVSangChe,
    updateHTCVSangChe,
    getDetailsHTCVSangChe,
    deleteHTCVSangChe,
    getAllHTCVSangChe,
    deleteManyHTCVSangChe,
    getAllType,
    getHTCVSangCheByQuanNhanId
}