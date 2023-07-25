const LoaiQuanNhanService = require('../services/LoaiQuanNhanService')

const createLoaiQuanNhan = async (req, res) => {
    try {
        const { LoaiQuanNhanId, TenLoaiQuanNhan, GhiChu } = req.body
        if (!LoaiQuanNhanId || !TenLoaiQuanNhan) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await LoaiQuanNhanService.createLoaiQuanNhan(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateLoaiQuanNhan = async (req, res) => {
    try {
        const loaiquannhanId = req.params.id
        const data = req.body
        if (!loaiquannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'loaiquannhanId is required'
            })
        }
        const response = await LoaiQuanNhanService.updateLoaiQuanNhan(loaiquannhanId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsLoaiQuanNhan = async (req, res) => {
    try {
        const loaiquannhanId = req.params.id
        if (!loaiquannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaiquannhanId is required'
            })
        }
        const response = await LoaiQuanNhanService.getDetailsLoaiQuanNhan(loaiquannhanId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteLoaiQuanNhan = async (req, res) => {
    try {
        const loaiquannhanId = req.params.id
        if (!loaiquannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaiquannhanId is required'
            })
        }
        const response = await LoaiQuanNhanService.deleteLoaiQuanNhan(loaiquannhanId)
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
        const response = await LoaiQuanNhanService.deleteManyLoaiQuanNhan(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLoaiQuanNhan = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await LoaiQuanNhanService.getAllLoaiQuanNhan(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await LoaiQuanNhanService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createLoaiQuanNhan,
    updateLoaiQuanNhan,
    getDetailsLoaiQuanNhan,
    deleteLoaiQuanNhan,
    getAllLoaiQuanNhan,
    deleteMany,
    getAllType
}
