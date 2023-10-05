const LoaiTaiLieuService = require('../services/LoaiTaiLieuService')

const createLoaiTaiLieu = async (req, res) => {
    try {
        const { LoaiTaiLieuId, TenLoaiTaiLieu, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!LoaiTaiLieuId || !TenLoaiTaiLieu) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await LoaiTaiLieuService.createLoaiTaiLieu(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateLoaiTaiLieu = async (req, res) => {
    try {
        const loaitailieuId = req.params.id
        const data = req.body
        if (!loaitailieuId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'loaitailieuId is required'
            })
        }
        const response = await LoaiTaiLieuService.updateLoaiTaiLieu(loaitailieuId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsLoaiTaiLieu = async (req, res) => {
    try {
        const loaitailieuId = req.params.id
        if (!loaitailieuId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaitailieuId is required'
            })
        }
        const response = await LoaiTaiLieuService.getDetailsLoaiTaiLieu(loaitailieuId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteLoaiTaiLieu = async (req, res) => {
    try {
        const loaitailieuId = req.params.id
        if (!loaitailieuId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaitailieuId is required'
            })
        }
        const response = await LoaiTaiLieuService.deleteLoaiTaiLieu(loaitailieuId)
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
        const response = await LoaiTaiLieuService.deleteManyLoaiTaiLieu(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLoaiTaiLieu = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await LoaiTaiLieuService.getAllLoaiTaiLieu(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await LoaiTaiLieuService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createLoaiTaiLieu,
    updateLoaiTaiLieu,
    getDetailsLoaiTaiLieu,
    deleteLoaiTaiLieu,
    getAllLoaiTaiLieu,
    deleteMany,
    getAllType
}
