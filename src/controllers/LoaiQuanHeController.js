const LoaiQuanHeService = require('../services/LoaiQuanHeService')

const createLoaiQuanHe = async (req, res) => {
    try {
        const { LoaiQuanHeId, TenLoaiQuanHe, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!LoaiQuanHeId || !TenLoaiQuanHe) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await LoaiQuanHeService.createLoaiQuanHe(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateLoaiQuanHe = async (req, res) => {
    try {
        const loaiquanheId = req.params.id
        const data = req.body
        if (!loaiquanheId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'loaiquanheId is required'
            })
        }
        const response = await LoaiQuanHeService.updateLoaiQuanHe(loaiquanheId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsLoaiQuanHe = async (req, res) => {
    try {
        const loaiquanheId = req.params.id
        if (!loaiquanheId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaiquanheId is required'
            })
        }
        const response = await LoaiQuanHeService.getDetailsLoaiQuanHe(loaiquanheId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteLoaiQuanHe = async (req, res) => {
    try {
        const loaiquanheId = req.params.id
        if (!loaiquanheId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaiquanheId is required'
            })
        }
        const response = await LoaiQuanHeService.deleteLoaiQuanHe(loaiquanheId)
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
        const response = await LoaiQuanHeService.deleteManyLoaiQuanHe(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLoaiQuanHe = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await LoaiQuanHeService.getAllLoaiQuanHe(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await LoaiQuanHeService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createLoaiQuanHe,
    updateLoaiQuanHe,
    getDetailsLoaiQuanHe,
    deleteLoaiQuanHe,
    getAllLoaiQuanHe,
    deleteMany,
    getAllType
}
