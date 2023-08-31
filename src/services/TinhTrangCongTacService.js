const TinhTrangCongTac = require("../models/TinhTrangCongTacModel")

const createTinhTrangCongTac = (newTinhTrangCongTac) => {
    return new Promise(async (resolve, reject) => {
        const { code,QuanNhanId,QuyetDinh,NgayQuyetDinh,TrangThaiCongTac,KetThuc,TrangThai,edituser,edittime,GhiChu} = newTinhTrangCongTac
        try {
            // const checkTinhTrangCongTac = await TinhTrangCongTac.findOne({
            //     TinhTrangCongTacId: TinhTrangCongTacId
            // })
            // if (checkTinhTrangCongTac !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'TinhTrangCongTac is already'
            //     })
            // }
            const newTinhTrangCongTac = await TinhTrangCongTac.create({
                code,QuanNhanId,QuyetDinh,NgayQuyetDinh,TrangThaiCongTac,KetThuc,TrangThai,edituser,edittime,GhiChu
            })
            if (newTinhTrangCongTac) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newTinhTrangCongTac
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateTinhTrangCongTac = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTinhTrangCongTac = await TinhTrangCongTac.findOne({
                _id: id
            })
            if (checkTinhTrangCongTac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedTinhTrangCongTac = await TinhTrangCongTac.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedTinhTrangCongTac
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteTinhTrangCongTac = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkTinhTrangCongTac = await TinhTrangCongTac.findOne({
                _id: id
            })
            if (checkTinhTrangCongTac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await TinhTrangCongTac.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyTinhTrangCongTac = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await TinhTrangCongTac.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsTinhTrangCongTac = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const tinhtrangcongtac = await TinhTrangCongTac.findOne({
                _id: id
            })
            if (tinhtrangcongtac === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: tinhtrangcongtac
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllTinhTrangCongTac = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalTinhTrangCongTac = await TinhTrangCongTac.count()
            let allTinhTrangCongTac = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await TinhTrangCongTac.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalTinhTrangCongTac,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalTinhTrangCongTac / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allTinhTrangCongTacSort = await TinhTrangCongTac.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allTinhTrangCongTacSort,
                    total: totalTinhTrangCongTac,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalTinhTrangCongTac / limit)
                })
            }
            if(!limit) {
                allTinhTrangCongTac = await TinhTrangCongTac.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allTinhTrangCongTac = await TinhTrangCongTac.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allTinhTrangCongTac,
                total: totalTinhTrangCongTac,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalTinhTrangCongTac / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await TinhTrangCongTac.distinct('QuanNhanId')
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
const getTinhTrangCongTacByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const tinhTrangCongTacList = await TinhTrangCongTac.find({
                QuanNhanId: id
            });
            
            if (!tinhTrangCongTacList || tinhTrangCongTacList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No TinhTrangCongTac found for the given QuanNhanId'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data:  tinhTrangCongTacList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createTinhTrangCongTac,
    updateTinhTrangCongTac,
    getDetailsTinhTrangCongTac,
    deleteTinhTrangCongTac,
    getAllTinhTrangCongTac,
    deleteManyTinhTrangCongTac,
    getAllType,
    getTinhTrangCongTacByQuanNhanId
}