const LoaiTaiSanService = require('../services/LoaiTaiSanService')

const createLoaiTaiSan = async (req, res) => {
    try {
        const { LoaiTaiSanId, TenLoaiTaiSan, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!LoaiTaiSanId || !TenLoaiTaiSan) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await LoaiTaiSanService.createLoaiTaiSan(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateLoaiTaiSan = async (req, res) => {
    try {
        const loaitaisanId = req.params.id
        const data = req.body
        if (!loaitaisanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'loaitaisanId is required'
            })
        }
        const response = await LoaiTaiSanService.updateLoaiTaiSan(loaitaisanId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsLoaiTaiSan = async (req, res) => {
    try {
        const loaitaisanId = req.params.id
        if (!loaitaisanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaitaisanId is required'
            })
        }
        const response = await LoaiTaiSanService.getDetailsLoaiTaiSan(loaitaisanId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteLoaiTaiSan = async (req, res) => {
    try {
        const loaitaisanId = req.params.id
        if (!loaitaisanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaitaisanId is required'
            })
        }
        const response = await LoaiTaiSanService.deleteLoaiTaiSan(loaitaisanId)
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
        const response = await LoaiTaiSanService.deleteManyLoaiTaiSan(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLoaiTaiSan = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await LoaiTaiSanService.getAllLoaiTaiSan(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await LoaiTaiSanService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createLoaiTaiSan,
    updateLoaiTaiSan,
    getDetailsLoaiTaiSan,
    deleteLoaiTaiSan,
    getAllLoaiTaiSan,
    deleteMany,
    getAllType
}
