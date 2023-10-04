const ThongKeHocVi = require("../models/ThongKeHocViModel")

const createThongKeHocVi = (newThongKeHocVi) => {
    return new Promise(async (resolve, reject) => {
        const { DonViId, Nam, TienSyKhoaHoc, TienSy, ThacSy, KySu, CuNhan, Khac, edituser, edittime, GhiChu  } = newThongKeHocVi
        try {
            const checkThongKeHocVi = await ThongKeHocVi.findOne({
                DonViId: DonViId, Nam: Nam
            })
            if (checkThongKeHocVi !== null) {
                resolve({
                    status: 'ERR',
                    message: 'ThongKeHocVi is already'
                })
            }
            else{
            const newThongKeHocVi = await ThongKeHocVi.create({
                DonViId, Nam, TienSyKhoaHoc, TienSy, ThacSy, KySu, CuNhan, Khac, edituser, edittime, GhiChu             })
            if (newThongKeHocVi) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newThongKeHocVi
                })
            }
        } 
    }
    catch (e) {
            reject(e)
        }
    })
}

const updateThongKeHocVi = (donviid,nam, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkThongKeHocVi = await ThongKeHocVi.findOne({
                DonViId: donviid, Nam : nam
            })
            if (checkThongKeHocVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedThongKeHocVi = await ThongKeHocVi.findOneAndUpdate(
                { DonViId: donviid, Nam: nam },
                { $set: data },
                { new: true }
            )            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedThongKeHocVi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteThongKeHocVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkThongKeHocVi = await ThongKeHocVi.findOne({
                _id: id
            })
            if (checkThongKeHocVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await ThongKeHocVi.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyThongKeHocVi = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await ThongKeHocVi.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsThongKeHocVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const thongkehocvi = await ThongKeHocVi.findOne({
                _id: id
            })
            if (thongkehocvi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: thongkehocvi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllThongKeHocVi = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalThongKeHocVi = await ThongKeHocVi.count()
            let allThongKeHocVi = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await ThongKeHocVi.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalThongKeHocVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalThongKeHocVi / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allThongKeHocViSort = await ThongKeHocVi.find().limit(limit).skip(page * limit).sort(objectSort).sort({ createdAt: -1, updatedAt: -1 })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allThongKeHocViSort,
                    total: totalThongKeHocVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalThongKeHocVi / limit)
                })
            }
            if (!limit) {
                allThongKeHocVi = await ThongKeHocVi.find().sort({ createdAt: -1, updatedAt: -1 })
            } else {
                allThongKeHocVi = await ThongKeHocVi.find().limit(limit).skip(page * limit).sort({ createdAt: -1, updatedAt: -1 })
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allThongKeHocVi,
                total: totalThongKeHocVi,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalThongKeHocVi / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await ThongKeHocVi.distinct('DonViId')
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
const getThongKeHocViByDonViId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const quaTrinhCongTacList = await ThongKeHocVi.find({
                DonViId: id
            });

            if (!quaTrinhCongTacList || quaTrinhCongTacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No ThongKeHocVi found for the given DonViId'
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
    createThongKeHocVi,
    updateThongKeHocVi,
    getDetailsThongKeHocVi,
    deleteThongKeHocVi,
    getAllThongKeHocVi,
    deleteManyThongKeHocVi,
    getAllType,
    getThongKeHocViByDonViId
}