const NgoaiNgu = require("../models/NgoaiNguModel")

const createNgoaiNgu = (newNgoaiNgu) => {
    return new Promise(async (resolve, reject) => {
        const { code,QuanNhanId,NgonNgu,LoaiBang,NamNhan,CapDo,TuongDuong,HinhThucBang,TrangThai,edituser,edittime,GhiChu} = newNgoaiNgu
        try {
            // const checkNgoaiNgu = await NgoaiNgu.findOne({
            //     NgoaiNguId: NgoaiNguId
            // })
            // if (checkNgoaiNgu !== null) {
            //     resolve({
            //         status: 'ERR',
            //         message: 'NgoaiNgu is already'
            //     })
            // }
            const newNgoaiNgu = await NgoaiNgu.create({
                code,QuanNhanId,NgonNgu,LoaiBang,NamNhan,CapDo,TuongDuong,HinhThucBang,TrangThai,edituser,edittime,GhiChu
            })
            if (newNgoaiNgu) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newNgoaiNgu
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateNgoaiNgu = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNgoaiNgu = await NgoaiNgu.findOne({
                _id: id
            })
            if (checkNgoaiNgu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            const updatedNgoaiNgu = await NgoaiNgu.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedNgoaiNgu
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteNgoaiNgu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkNgoaiNgu = await NgoaiNgu.findOne({
                _id: id
            })
            if (checkNgoaiNgu === null) {
                resolve({
                    status: 'ERR',
                    message: 'Qua Trinh Cong Tac is not defined'
                })
            }

            await NgoaiNgu.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyNgoaiNgu = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await NgoaiNgu.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Qua Trinh Cong Tac success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsNgoaiNgu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaingu = await NgoaiNgu.findOne({
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

const getAllNgoaiNgu = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalNgoaiNgu = await NgoaiNgu.count()
            let allNgoaiNgu = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await NgoaiNgu.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalNgoaiNgu,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalNgoaiNgu / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allNgoaiNguSort = await NgoaiNgu.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allNgoaiNguSort,
                    total: totalNgoaiNgu,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalNgoaiNgu / limit)
                })
            }
            if(!limit) {
                allNgoaiNgu = await NgoaiNgu.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allNgoaiNgu = await NgoaiNgu.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allNgoaiNgu,
                total: totalNgoaiNgu,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalNgoaiNgu / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await NgoaiNgu.distinct('QuanNhanId')
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
const getNgoaiNguByQuanNhanId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const ngoaiNguList = await NgoaiNgu.find({
                QuanNhanId: id
            });
            
            if (!ngoaiNguList || ngoaiNguList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No NgoaiNgu found for the given QuanNhanId'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data:  ngoaiNguList
            });
        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    createNgoaiNgu,
    updateNgoaiNgu,
    getDetailsNgoaiNgu,
    deleteNgoaiNgu,
    getAllNgoaiNgu,
    deleteManyNgoaiNgu,
    getAllType,
    getNgoaiNguByQuanNhanId
}