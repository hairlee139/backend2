const HTCVHopDongService = require('../services/HTCVHopDongService')

const createHTCVHopDong = async (req, res) => {
    try {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HTCVHopDongService.createHTCVHopDong(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHTCVHopDong = async (req, res) => {
    try {
        const htcvhopdongId = req.params.id
        const data = req.body
        if (!htcvhopdongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvhopdongId is required'
            })
        }
        const response = await HTCVHopDongService.updateHTCVHopDong(htcvhopdongId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getHTCVHopDongByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await HTCVHopDongService.getHTCVHopDongByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsHTCVHopDong = async (req, res) => {
    try {
        const htcvhopdongId = req.params.id
        if (!htcvhopdongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvhopdongId is required'
            })
        }
        const response = await HTCVHopDongService.getDetailsHTCVHopDong(htcvhopdongId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHTCVHopDong = async (req, res) => {
    try {
        const htcvhopdongId = req.params.id
        if (!htcvhopdongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvhopdongId is required'
            })
        }
        const response = await HTCVHopDongService.deleteHTCVHopDong(htcvhopdongId)
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
        const response = await HTCVHopDongService.deleteManyHTCVHopDong(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHTCVHopDong = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HTCVHopDongService.getAllHTCVHopDong(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HTCVHopDongService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHTCVHopDong,
    updateHTCVHopDong,
    getDetailsHTCVHopDong,
    deleteHTCVHopDong,
    getAllHTCVHopDong,
    deleteMany,
    getAllType,
    getHTCVHopDongByQuanNhanId,
}
