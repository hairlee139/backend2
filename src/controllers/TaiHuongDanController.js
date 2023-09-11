const TaiHuongDanService = require('../services/TaiHuongDanService')

const createTaiHuongDan = async (req, res) => {
    try {
        const { TaiHuongDanId, QuanNhanId, HinhThucHuongDan, HocVien, Lop, DeTai, NgayBatDau, Quy, Nam, SoCBHuongDan, DinhMuc, SoGioChuan, TrangThai, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await TaiHuongDanService.createTaiHuongDan(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateTaiHuongDan = async (req, res) => {
    try {
        const taihuongdanId = req.params.id
        const data = req.body
        if (!taihuongdanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taihuongdanId is required'
            })
        }
        const response = await TaiHuongDanService.updateTaiHuongDan(taihuongdanId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getTaiHuongDanByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await TaiHuongDanService.getTaiHuongDanByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsTaiHuongDan = async (req, res) => {
    try {
        const taihuongdanId = req.params.id
        if (!taihuongdanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taihuongdanId is required'
            })
        }
        const response = await TaiHuongDanService.getDetailsTaiHuongDan(taihuongdanId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteTaiHuongDan = async (req, res) => {
    try {
        const taihuongdanId = req.params.id
        if (!taihuongdanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taihuongdanId is required'
            })
        }
        const response = await TaiHuongDanService.deleteTaiHuongDan(taihuongdanId)
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
        const response = await TaiHuongDanService.deleteManyTaiHuongDan(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllTaiHuongDan = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await TaiHuongDanService.getAllTaiHuongDan(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await TaiHuongDanService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createTaiHuongDan,
    updateTaiHuongDan,
    getDetailsTaiHuongDan,
    deleteTaiHuongDan,
    getAllTaiHuongDan,
    deleteMany,
    getAllType,
    getTaiHuongDanByQuanNhanId,
}
