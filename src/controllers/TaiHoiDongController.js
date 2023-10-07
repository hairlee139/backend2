const TaiHoiDongService = require('../services/TaiHoiDongService')

const createTaiHoiDong = async (req, res) => {
    try {
        const { TaiHoiDongId, QuanNhanId, CapHoiDong, TenLoaiHoiDong, VaiTro, ThoiDiem, Quy, Nam, KhoiLuongCongViec, FileCM, SoGioQuyDoi, TrangThai, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await TaiHoiDongService.createTaiHoiDong(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateTaiHoiDong = async (req, res) => {
    try {
        const taihoidongId = req.params.id
        const data = req.body
        if (!taihoidongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taihoidongId is required'
            })
        }
        const response = await TaiHoiDongService.updateTaiHoiDong(taihoidongId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getTaiHoiDongByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await TaiHoiDongService.getTaiHoiDongByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsTaiHoiDong = async (req, res) => {
    try {
        const taihoidongId = req.params.id
        if (!taihoidongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taihoidongId is required'
            })
        }
        const response = await TaiHoiDongService.getDetailsTaiHoiDong(taihoidongId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteTaiHoiDong = async (req, res) => {
    try {
        const taihoidongId = req.params.id
        if (!taihoidongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taihoidongId is required'
            })
        }
        const response = await TaiHoiDongService.deleteTaiHoiDong(taihoidongId)
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
        const response = await TaiHoiDongService.deleteManyTaiHoiDong(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllTaiHoiDong = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await TaiHoiDongService.getAllTaiHoiDong(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await TaiHoiDongService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createTaiHoiDong,
    updateTaiHoiDong,
    getDetailsTaiHoiDong,
    deleteTaiHoiDong,
    getAllTaiHoiDong,
    deleteMany,
    getAllType,
    getTaiHoiDongByQuanNhanId,
}
