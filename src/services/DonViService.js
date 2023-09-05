const DonVi = require("../models/DonViModel")
const { getAllHocViFromDonVi } = require('../services/HocViService');
const createDonVi = (newDonVi) => {
    return new Promise(async (resolve, reject) => {
        const { code,
            codeview,
            name,
            note,
            edituser,
            edittime,
            lock,
            lockdate,
            managelevelcode,
            unitcode,
            parentcode,
            comparelevel,
            theorder,
            phone,
            email,
            managestaff,
            whois,
            thucluc,
            bienche
        } = newDonVi
        try {
            const checkDonVi = await DonVi.findOne({
                code: code
            })
            if (checkDonVi !== null) {
                resolve({
                    status: 'ERR',
                    message: 'Don vi is already'
                })
            }
            else{
            const newDonVi = await DonVi.create({
                code,
                codeview,
                name,
                note,
                edituser,
                edittime,
                lock,
                lockdate,
                managelevelcode,
                unitcode,
                parentcode,
                comparelevel,
                theorder,
                phone,
                email,
                managestaff,
                whois,
                thucluc,
                bienche
            })
            if (newDonVi) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newDonVi
                })
            }}
        } catch (e) {
            reject(e)
        }
    })
}

const updateDonVi = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDonVi = await DonVi.findOne({
                _id: id
            })
            if (checkDonVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Don vi is not defined'
                })
            }

            const updatedDonVi = await DonVi.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedDonVi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteDonVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkDonVi = await DonVi.findOne({
                _id: id
            })
            if (checkDonVi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Don vi is not defined'
                })
            }

            await DonVi.findByIdAndDelete(id)
            resolve({
                status: 'OK',
                message: 'Delete Don vi success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const deleteManyDonVi = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await DonVi.deleteMany({ _id: ids })
            resolve({
                status: 'OK',
                message: 'Delete Don vi success',
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getDetailsDonVi = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const donvi = await DonVi.findOne({
                _id: id
            })
            if (donvi === null) {
                resolve({
                    status: 'ERR',
                    message: 'Don vi is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: donvi
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllDonVi = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            const totalDonVi = await DonVi.count()
            let allDonVi = []
            if (filter) {
                const label = filter[0];
                const allObjectFilter = await DonVi.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allObjectFilter,
                    total: totalDonVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDonVi / limit)
                })
            }
            if (sort) {
                const objectSort = {}
                objectSort[sort[1]] = sort[0]
                const allDonViSort = await DonVi.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: allDonViSort,
                    total: totalDonVi,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(totalDonVi / limit)
                })
            }
            if(!limit) {
                allDonVi = await DonVi.find().sort({createdAt: -1, updatedAt: -1})
            }else {
                allDonVi = await DonVi.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            }
            resolve({
                status: 'OK',
                message: 'Success',
                data: allDonVi,
                total: totalDonVi,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalDonVi / limit)
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllType = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allType = await DonVi.distinct('code')
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
const getDonViConOnly = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const donviList = await DonVi.find({
                parentcode: id
            });
            
            if (!donviList || donviList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No Don vi con found for the given QuanNhanId'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data:  donviList
            });
        } catch (error) {
            reject(error);
        }
    });
};
const getDonViConByTen = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const donviList = await DonVi.find({
                parentcode: id
            });
            
            if (!donviList || donviList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No Don vi con found for the given QuanNhanId'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data:  donviList.map(donvi => donvi.name)
            });
        } catch (error) {
            reject(error);
        }
    });
};
const getDonViConOnly2 = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const donvi = await DonVi.find({
                _id: id
            });
            if (!donvi || donvi.length === 0) {
                return {
                    status: 'ERR',
                    message: 'No donvi found'
                };
            }
            const donvicodes = donvi.map(item => item.code.toString());
            const donviList = await DonVi.find({
                parentcode: donvicodes
            });
            
            if (!donviList || donviList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No Don vi con found for the given QuanNhanId'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data:  donviList
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getDonVifromcode = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const donviList = await DonVi.find({
                code: id
            });
            
            if (!donviList || donviList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No Don vi con found for the given QuanNhanId'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data:  donviList
            });
        } catch (error) {
            reject(error);
        }
    });
};
const getDonVifromObjectId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const donviList = await DonVi.find({
                _id: id
            });
            
            if (!donviList || donviList.length === 0) {
                resolve({
                    status: 'ERR',
                    message: 'No Don vi con found for the given QuanNhanId'
                });
            }
            
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data:  donviList
            });
        } catch (error) {
            reject(error);
        }
    });
};
const getDonViCon = async (parentCode, data) => {
    try {
        const donviList = await DonVi.find({
            parentcode: parentCode
        });

        const results = [];

        for (const donvi of donviList) {
            const subDonViList = await getDonViCon(donvi.code, data);
            results.push({
                ...donvi.toObject(),
                children: subDonViList
            });
        }

        return results;
    } catch (error) {
        throw error;
    }
};
const getDonViConWithHocViCounts = async (id) => {
    try {
        // Lấy danh sách đơn vị con của đơn vị cha
        const donViConResult = await getDonViConOnly(id);
        if (donViConResult.status === 'ERR') {
            return donViConResult; // Trả về lỗi nếu không tìm thấy đơn vị con
        }

        // Lấy số lượng học vị của từng đơn vị con
        const donViConList = donViConResult.data;
        const donViConWithHocViCounts = [];

        for (const donViCon of donViConList) {
            const hocViCounts = await getAllHocViFromDonVi(donViCon.code);
            donViConWithHocViCounts.push({
                donViCon,
                hocViCounts,
            });
        }

        //Trả về danh sách đơn vị con cùng với số lượng học vị
        return {
            status: 'OK',
            message: 'SUCCESS',
            data: donViConWithHocViCounts,
        };
    } catch (error) {
        return {
            status: 'ERR',
            message:  error.message,
        };
    }
};



module.exports = {
    createDonVi,
    updateDonVi,
    getDetailsDonVi,
    deleteDonVi,
    getAllDonVi,
    deleteManyDonVi,
    getAllType,
    getDonViCon,
    getDonViConOnly,
    getDonViConOnly2,
    getDonVifromcode,
    getDonViConByTen,
    getDonViConWithHocViCounts,
    getDonVifromObjectId
}