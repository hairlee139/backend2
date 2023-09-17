const TaiSanService = require('../services/TaiSanService')

const createTaiSan = async (req, res) => {
    try {
        const { TaiSanId, QuanNhanId, TenTaiSan, LoaiTaiSan, GiaTri, DienTich, HoatDongKinhTe, TrangThai, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await TaiSanService.createTaiSan(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateTaiSan = async (req, res) => {
    try {
        const taisanId = req.params.id
        const data = req.body
        if (!taisanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taisanId is required'
            })
        }
        const response = await TaiSanService.updateTaiSan(taisanId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getTaiSanByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await TaiSanService.getTaiSanByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsTaiSan = async (req, res) => {
    try {
        const taisanId = req.params.id
        if (!taisanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taisanId is required'
            })
        }
        const response = await TaiSanService.getDetailsTaiSan(taisanId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteTaiSan = async (req, res) => {
    try {
        const taisanId = req.params.id
        if (!taisanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taisanId is required'
            })
        }
        const response = await TaiSanService.deleteTaiSan(taisanId)
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
        const response = await TaiSanService.deleteManyTaiSan(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllTaiSan = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await TaiSanService.getAllTaiSan(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await TaiSanService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createTaiSan,
    updateTaiSan,
    getDetailsTaiSan,
    deleteTaiSan,
    getAllTaiSan,
    deleteMany,
    getAllType,
    getTaiSanByQuanNhanId,
}
