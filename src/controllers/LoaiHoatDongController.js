const LoaiHoatDongService = require('../services/LoaiHoatDongService')

const createLoaiHoatDong = async (req, res) => {
    try {
        const { LoaiHoatDongId, TenLoaiHoatDong, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!LoaiHoatDongId || !TenLoaiHoatDong) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await LoaiHoatDongService.createLoaiHoatDong(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateLoaiHoatDong = async (req, res) => {
    try {
        const loaihoatdongId = req.params.id
        const data = req.body
        if (!loaihoatdongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'loaihoatdongId is required'
            })
        }
        const response = await LoaiHoatDongService.updateLoaiHoatDong(loaihoatdongId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsLoaiHoatDong = async (req, res) => {
    try {
        const loaihoatdongId = req.params.id
        if (!loaihoatdongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaihoatdongId is required'
            })
        }
        const response = await LoaiHoatDongService.getDetailsLoaiHoatDong(loaihoatdongId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteLoaiHoatDong = async (req, res) => {
    try {
        const loaihoatdongId = req.params.id
        if (!loaihoatdongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaihoatdongId is required'
            })
        }
        const response = await LoaiHoatDongService.deleteLoaiHoatDong(loaihoatdongId)
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
        const response = await LoaiHoatDongService.deleteManyLoaiHoatDong(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLoaiHoatDong = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await LoaiHoatDongService.getAllLoaiHoatDong(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await LoaiHoatDongService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createLoaiHoatDong,
    updateLoaiHoatDong,
    getDetailsLoaiHoatDong,
    deleteLoaiHoatDong,
    getAllLoaiHoatDong,
    deleteMany,
    getAllType
}
