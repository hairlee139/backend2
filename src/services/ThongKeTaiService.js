const ThongKeTai = require("../models/ThongKeTaiModel")

const createThongKeTai = (newThongKeTai) => {
    return new Promise(async (resolve, reject) => {
        const { QuanNhanId, Nam, TaiDaoTaoYeuCau, TaiNCKHYeuCau, TongTaiYeuCau, TaiThucDaoTaoYeuCau, TaiThucNCKHYeuCau, TongThucTai, edituser, edittime, GhiChu } = newThongKeTai
        try {
            const checkThongKeTai = await ThongKeTai.findOne({
                QuanNhanId: QuanNhanId
            })
            // if (checkThongKeTai !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'ThongKeTai is already'
            //     })
            // }
            // else {
            const newThongKeTai = await ThongKeTai.create({
                QuanNhanId, Nam, TaiDaoTaoYeuCau, TaiNCKHYeuCau, TongTaiYeuCau, TaiThucDaoTaoYeuCau, TaiThucNCKHYeuCau, TongThucTai, edituser, edittime, GhiChu
            })
            if (newThongKeTai) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newThongKeTai
                })
            }
        }
        //}
        catch (e) {
            reject(e)
        }
    })
}

const updateThongKeTai = (quannhanid, nam, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkThongKeTai = await ThongKeTai.findOne({
                QuanNhanId: quannhanid
            })
            if (checkThongKeTai === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedThongKeTai = await ThongKeTai.findOneAndUpdate(
                { QuanNhanId: quannhanid },
                { $set: data },
                { new: true }
            )
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedThongKeTai
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteThongKeTai = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkThongKeTai = await ThongKeTai.findOne({
                _id: id
            })
            if (checkThongKeTai === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await ThongKeTai.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyThongKeTai = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await ThongKeTai.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsThongKeTai = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const thongketai = await ThongKeTai.findOne({
                _id: id
            })
            if (thongketai === null) {
                resolve({
                    status: 'ERR',
                    message: 'Thong ke tai is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: thongketai
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllThongKeTai = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalThongKeTai = await ThongKeTai.count()
            let allThongKeTai = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await ThongKeTai.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalThongKeTai,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalThongKeTai / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allThongKeTaiSort = await ThongKeTai.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allThongKeTaiSort,
                    total: totalThongKeTai,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalThongKeTai / limit)
                })
            }
            if (!limit) {
                allThongKeTai = await ThongKeTai.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allThongKeTai = await ThongKeTai.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allThongKeTai,
                total: totalThongKeTai,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalThongKeTai / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await ThongKeTai.distinct('QuanNhanId')
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
const getThongKeTaiByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const thongketaiList = await ThongKeTai.find({
                QuanNhanId: id
            });

            if (!thongketaiList || thongketaiList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No ThongKeTai found for the given QuanNhanId'
                });
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: thongketaiList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createThongKeTai,
    updateThongKeTai,
    getDetailsThongKeTai,
    deleteThongKeTai,
    getAllThongKeTai,
    deleteManyThongKeTai,
    getAllType,
    getThongKeTaiByQuanNhanId
}