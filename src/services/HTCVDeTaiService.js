const HTCVDeTai = require("../models/HTCVDeTaiModel")

const createHTCVDeTai = (newHTCVDeTai) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu } = newHTCVDeTai
        try {
            // const checkHTCVDeTai = await HTCVDeTai.findOne({
            //     HTCVDeTaiId: HTCVDeTaiId
            // })
            // if (checkHTCVDeTai !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HTCVDeTai is already'
            //     })
            // }
            const newHTCVDeTai = await HTCVDeTai.create({
                HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu
            })
            if (newHTCVDeTai) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHTCVDeTai
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHTCVDeTai = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVDeTai = await HTCVDeTai.findOne({
                _id: id
            })
            if (checkHTCVDeTai === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai giang day is not defined'
                })
            }

            const updatedHTCVDeTai = await HTCVDeTai.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHTCVDeTai
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHTCVDeTai = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHTCVDeTai = await HTCVDeTai.findOne({
                _id: id
            })
            if (checkHTCVDeTai === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            await HTCVDeTai.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHTCVDeTai = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HTCVDeTai.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Tai Huong Dan success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHTCVDeTai = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcvdetai = await HTCVDeTai.findOne({
                _id: id
            })
            if (htcvdetai === null) {
                resolve({
                    status: 'ERR',
                    message: 'Tai Huong Dan is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcvdetai
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllHTCVDeTai = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHTCVDeTai = await HTCVDeTai.count()
            let allHTCVDeTai = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HTCVDeTai.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHTCVDeTai,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVDeTai / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHTCVDeTaiSort = await HTCVDeTai.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHTCVDeTaiSort,
                    total: totalHTCVDeTai,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHTCVDeTai / limit)
                })
            }
            if (!limit) {
                allHTCVDeTai = await HTCVDeTai.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHTCVDeTai = await HTCVDeTai.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHTCVDeTai,
                total: totalHTCVDeTai,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHTCVDeTai / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HTCVDeTai.distinct('QuanNhanId')
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
const getHTCVDeTaiByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const htcvdeTaiList = await HTCVDeTai.find({
                QuanNhanId: id
            });

            if (!htcvdeTaiList || htcvdeTaiList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HTCVDeTai found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: htcvdeTaiList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHTCVDeTai,
    updateHTCVDeTai,
    getDetailsHTCVDeTai,
    deleteHTCVDeTai,
    getAllHTCVDeTai,
    deleteManyHTCVDeTai,
    getAllType,
    getHTCVDeTaiByQuanNhanId
}