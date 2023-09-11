const LoaiHoiDongService = require('../services/LoaiHoiDongService')

const createLoaiHoiDong = async (req, res) => {
    try {
        const { LoaiHoiDongId, TenLoaiHoiDong, GhiChu } = req.body
        if (!LoaiHoiDongId || !TenLoaiHoiDong) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await LoaiHoiDongService.createLoaiHoiDong(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateLoaiHoiDong = async (req, res) => {
    try {
        const loaihoidongId = req.params.id
        const data = req.body
        if (!loaihoidongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'loaihoidongId is required'
            })
        }
        const response = await LoaiHoiDongService.updateLoaiHoiDong(loaihoidongId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsLoaiHoiDong = async (req, res) => {
    try {
        const loaihoidongId = req.params.id
        if (!loaihoidongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaihoidongId is required'
            })
        }
        const response = await LoaiHoiDongService.getDetailsLoaiHoiDong(loaihoidongId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteLoaiHoiDong = async (req, res) => {
    try {
        const loaihoidongId = req.params.id
        if (!loaihoidongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaihoidongId is required'
            })
        }
        const response = await LoaiHoiDongService.deleteLoaiHoiDong(loaihoidongId)
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
        const response = await LoaiHoiDongService.deleteManyLoaiHoiDong(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLoaiHoiDong = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await LoaiHoiDongService.getAllLoaiHoiDong(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await LoaiHoiDongService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createLoaiHoiDong,
    updateLoaiHoiDong,
    getDetailsLoaiHoiDong,
    deleteLoaiHoiDong,
    getAllLoaiHoiDong,
    deleteMany,
    getAllType
}
