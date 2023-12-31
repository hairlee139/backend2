const QuanNhanService = require('../services/QuanNhanService')

const createQuanNhan = async (req, res) => {
    try {
        const { QuanNhanId, HoTen, NgaySinh, GioiTinh, QueQuan, DiaChi, SoDienThoai, Email, HoatDong, QuanHam, DonVi, LoaiQN } = req.body
        if (!QuanNhanId || !HoTen || !NgaySinh || !GioiTinh || !QueQuan || !DiaChi || !HoatDong) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await QuanNhanService.createQuanNhan(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getQuanNhanByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuanNhanService.getQuanNhanByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};

const getObjectIdByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuanNhanService.getObjectIdByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getQuanNhanFromDonVi = async (req, res) => {
    try {
        const donviId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!donviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuanNhanService.getQuanNhanFromDonVi(donviId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getQuanNhanFromDonViCon = async (req, res) => {
    try {
        const donviId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!donviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuanNhanService.getQuanNhanFromDonViCon(donviId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const updateQuanNhan = async (req, res) => {
    try {
        const quannhanId = req.params.id
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quannhanId is required'
            })
        }
        const response = await QuanNhanService.updateQuanNhan(quannhanId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsQuanNhan = async (req, res) => {
    try {
        const quannhanId = req.params.id
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quannhanId is required'
            })
        }
        const response = await QuanNhanService.getDetailsQuanNhan(quannhanId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteQuanNhan = async (req, res) => {
    try {
        const quannhanId = req.params.id
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quannhanId is required'
            })
        }
        const response = await QuanNhanService.deleteQuanNhan(quannhanId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteMany = async (req, res) => {
    try {
        const ids = req.body.ids
        if (!ids) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ids is required'
            })
        }
        const response = await QuanNhanService.deleteManyQuanNhan(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllQuanNhan = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await QuanNhanService.getAllQuanNhan(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await QuanNhanService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getSoLuongQuanNhanFromDonVi = async (req, res) => {
    try {
        const DonViId = req.params.id 
        const data = req.body
        if (!DonViId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'DonViId is not defined'
            });
        }

        const response = await QuanNhanService.getSoLuongQuanNhanFromDonVi(DonViId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getAllDoTuoiFromDonVi = async (req, res) => {
    try {
        const DonViId = req.params.id 
        const data = req.body
        if (!DonViId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'DonViId is not defined'
            });
        }

        const response = await QuanNhanService.getAllDoTuoiFromDonVi(DonViId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getAllQuanHamFromDonVi = async (req, res) => {
    try {
        const donviId = req.params.id // Lấy donviId của user đang đăng nhập từ request
        const data = req.body
        if (!donviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'donviId is not defined'
            });
        }
        
        const response = await QuanNhanService.getAllQuanHamFromDonVi(donviId,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const updateQuanNhanLists = async (req, res) => {
    try {
      const id = req.params.id;
      const { departmentlist, leveltitlelist } = req.body;
  
      const response = await QuanNhanService.updateQuanNhanLists(
        id,
        departmentlist,
        leveltitlelist
      );
  
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
  const update2ListsQuanNhan = async (req, res) => {
    try {
      const { _id, index } = req.params; // Thêm _id vào params
      const { newLevelTitle, newDepartment } = req.body;
  
      const response = await QuanNhanService.update2ListsQuanNhan(
        _id, // Truyền _id vào hàm service
        index,
        newLevelTitle,
        newDepartment
      );
  
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };
  const delete2ListsQuanNhan = async (req, res) => {
    const { _id, index } = req.params;

    try {
        const result = await QuanNhanService.delete2ListsQuanNhan(_id, index);

        if (result.status === 'OK') {
            return res.status(200).json({ message: result.message });
        } else {
            return res.status(404).json({ message: result.message });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
const getTaiFromDonVi = async (req, res) => {
    try {
        const donviId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!donviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuanNhanService.getTaiFromDonVi(donviId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
module.exports = {
    createQuanNhan,
    updateQuanNhan,
    getDetailsQuanNhan,
    deleteQuanNhan,
    getAllQuanNhan,
    deleteMany,
    getAllType,
    getQuanNhanByQuanNhanId,
    getQuanNhanFromDonVi,
    getObjectIdByQuanNhanId,
    getSoLuongQuanNhanFromDonVi,
    getAllQuanHamFromDonVi,
    getAllDoTuoiFromDonVi,
    getQuanNhanFromDonViCon,
    updateQuanNhanLists,
    update2ListsQuanNhan,
    delete2ListsQuanNhan,
    getTaiFromDonVi
}
