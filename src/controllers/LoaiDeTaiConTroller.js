const LoaiDeTaiService = require('../services/LoaiDeTaiService')

const createLoaiDeTai = async (req, res) => {
    try {
        const { LoaiDeTaiId, TenLoaiDeTai, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!LoaiDeTaiId || !TenLoaiDeTai) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await LoaiDeTaiService.createLoaiDeTai(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateLoaiDeTai = async (req, res) => {
    try {
        const loaidetaiId = req.params.id
        const data = req.body
        if (!loaidetaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'loaidetaiId is required'
            })
        }
        const response = await LoaiDeTaiService.updateLoaiDeTai(loaidetaiId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsLoaiDeTai = async (req, res) => {
    try {
        const loaidetaiId = req.params.id
        if (!loaidetaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaidetaiId is required'
            })
        }
        const response = await LoaiDeTaiService.getDetailsLoaiDeTai(loaidetaiId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteLoaiDeTai = async (req, res) => {
    try {
        const loaidetaiId = req.params.id
        if (!loaidetaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaidetaiId is required'
            })
        }
        const response = await LoaiDeTaiService.deleteLoaiDeTai(loaidetaiId)
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
        const response = await LoaiDeTaiService.deleteManyLoaiDeTai(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLoaiDeTai = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await LoaiDeTaiService.getAllLoaiDeTai(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await LoaiDeTaiService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createLoaiDeTai,
    updateLoaiDeTai,
    getDetailsLoaiDeTai,
    deleteLoaiDeTai,
    getAllLoaiDeTai,
    deleteMany,
    getAllType
}
