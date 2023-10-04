const HuongDanNCKHService = require('../services/HuongDanNCKHService')

const createHuongDanNCKH = async (req, res) => {
    try {
        const { HuongDanNCKHId, QuanNhanId, Ten, LoaiDeTai, DonViChuTri, ThoiGianBatDau, ThoiGianDuKienKetThuc, CacSinhVien, PhanLoaiKetQua, HinhThucKhenThuong, NgayNghiemThu, FileCM, Tai, TrangThai, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HuongDanNCKHService.createHuongDanNCKH(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHuongDanNCKH = async (req, res) => {
    try {
        const huongdannckhId = req.params.id
        const data = req.body
        if (!huongdannckhId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The huongdannckhId is required'
            })
        }
        const response = await HuongDanNCKHService.updateHuongDanNCKH(huongdannckhId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getHuongDanNCKHByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await HuongDanNCKHService.getHuongDanNCKHByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsHuongDanNCKH = async (req, res) => {
    try {
        const huongdannckhId = req.params.id
        if (!huongdannckhId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The huongdannckhId is required'
            })
        }
        const response = await HuongDanNCKHService.getDetailsHuongDanNCKH(huongdannckhId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHuongDanNCKH = async (req, res) => {
    try {
        const huongdannckhId = req.params.id
        if (!huongdannckhId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The huongdannckhId is required'
            })
        }
        const response = await HuongDanNCKHService.deleteHuongDanNCKH(huongdannckhId)
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
        const response = await HuongDanNCKHService.deleteManyHuongDanNCKH(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHuongDanNCKH = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HuongDanNCKHService.getAllHuongDanNCKH(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HuongDanNCKHService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHuongDanNCKH,
    updateHuongDanNCKH,
    getDetailsHuongDanNCKH,
    deleteHuongDanNCKH,
    getAllHuongDanNCKH,
    deleteMany,
    getAllType,
    getHuongDanNCKHByQuanNhanId,
}
