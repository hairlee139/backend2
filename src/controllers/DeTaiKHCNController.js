const DeTaiNCKHService = require('../services/DeTaiNCKHService')

const createDeTaiNCKH = async (req, res) => {
    try {
        const { DeTaiNCKHId, QuanNhanId, LoaiDeTai, MaDeTai, TenDeTai, TenDanhMucKhenThuong, KinhPhi, CNDeTai, DonViChuTri, ThoiGianDuKienKT, ThoiGianBatDau, GiaHanLan1, GiaHanLan2, SoThanhVien, CacThanhVien, HinhThucDeTai, ThuocCTDuAn, NgayNghiemThu, MoTaKetThuc, QLDVHV, FileCM, Tai, TrangThai, PhanLoaiKetQua, CacHTCV, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DeTaiNCKHService.createDeTaiNCKH(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDeTaiNCKH = async (req, res) => {
    try {
        const detaikhcnId = req.params.id
        const data = req.body
        if (!detaikhcnId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The detaikhcnId is required'
            })
        }
        const response = await DeTaiNCKHService.updateDeTaiNCKH(detaikhcnId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getDeTaiNCKHByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await DeTaiNCKHService.getDeTaiNCKHByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsDeTaiNCKH = async (req, res) => {
    try {
        const detaikhcnId = req.params.id
        if (!detaikhcnId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The detaikhcnId is required'
            })
        }
        const response = await DeTaiNCKHService.getDetailsDeTaiNCKH(detaikhcnId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDeTaiNCKH = async (req, res) => {
    try {
        const detaikhcnId = req.params.id
        if (!detaikhcnId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The detaikhcnId is required'
            })
        }
        const response = await DeTaiNCKHService.deleteDeTaiNCKH(detaikhcnId)
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
        const response = await DeTaiNCKHService.deleteManyDeTaiNCKH(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDeTaiNCKH = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DeTaiNCKHService.getAllDeTaiNCKH(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DeTaiNCKHService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const updateHTCVLists = async (req, res) => {
    try {
        const id = req.params.id;
        const { HTCVList } = req.body;

        const response = await DeTaiNCKHService.updateHTCVLists(
            id,
            HTCVList
        );

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
module.exports = {
    createDeTaiNCKH,
    updateDeTaiNCKH,
    getDetailsDeTaiNCKH,
    deleteDeTaiNCKH,
    getAllDeTaiNCKH,
    deleteMany,
    getAllType,
    getDeTaiNCKHByQuanNhanId,
    updateHTCVLists
}
