const HinhThucDeTai = require("../models/HinhThucDeTaiModel")

const createHinhThucDeTai = (newHinhThucDeTai) => {
    return new Promise(async (resolve, reject) => {
        const { HinhThucDeTaiId, TenHinhThucDeTai, lock, lockdate, edituser, edittime, GhiChu } = newHinhThucDeTai
        try {
            // const checkHinhThucDeTai = await HinhThucDeTai.findOne({
            //     HinhThucDeTaiId: HinhThucDeTaiId
            // })
            // if (checkHinhThucDeTai !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'HinhThucDeTai is already'
            //     })
            // }
            const newHinhThucDeTai = await HinhThucDeTai.create({
                HinhThucDeTaiId, TenHinhThucDeTai, lock, lockdate, edituser, edittime, GhiChu
            })
            if (newHinhThucDeTai) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newHinhThucDeTai
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateHinhThucDeTai = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucDeTai = await HinhThucDeTai.findOne({
                _id: id
            })
            if (checkHinhThucDeTai === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedHinhThucDeTai = await HinhThucDeTai.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedHinhThucDeTai
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteHinhThucDeTai = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkHinhThucDeTai = await HinhThucDeTai.findOne({
                _id: id
            })
            if (checkHinhThucDeTai === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await HinhThucDeTai.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyHinhThucDeTai = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await HinhThucDeTai.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsHinhThucDeTai = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await HinhThucDeTai.findOne({
                _id: id
            })
            if (ngoaingu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: ngoaingu
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllHinhThucDeTai = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalHinhThucDeTai = await HinhThucDeTai.count()
            let allHinhThucDeTai = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await HinhThucDeTai.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalHinhThucDeTai,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucDeTai / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allHinhThucDeTaiSort = await HinhThucDeTai.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allHinhThucDeTaiSort,
                    total: totalHinhThucDeTai,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalHinhThucDeTai / limit)
                })
            }
            if (!limit) {
                allHinhThucDeTai = await HinhThucDeTai.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allHinhThucDeTai = await HinhThucDeTai.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allHinhThucDeTai,
                total: totalHinhThucDeTai,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalHinhThucDeTai / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await HinhThucDeTai.distinct('TenHinhThucDeTai')
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
const getHinhThucDeTaiByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const hinhhthucdetaiList = await HinhThucDeTai.find({
                QuanNhanId: id
            });

            if (!hinhhthucdetaiList || hinhhthucdetaiList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No HinhThucDeTai found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: hinhhthucdetaiList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createHinhThucDeTai,
    updateHinhThucDeTai,
    getDetailsHinhThucDeTai,
    deleteHinhThucDeTai,
    getAllHinhThucDeTai,
    deleteManyHinhThucDeTai,
    getAllType,
    getHinhThucDeTaiByQuanNhanId
}