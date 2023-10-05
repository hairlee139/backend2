const LoaiTapChiService = require('../services/LoaiTapChiService')

const createLoaiTapChi = async (req, res) => {
    try {
        const { LoaiTapChiId, TenLoaiTapChi, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!LoaiTapChiId || !TenLoaiTapChi) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await LoaiTapChiService.createLoaiTapChi(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateLoaiTapChi = async (req, res) => {
    try {
        const loaitapchiId = req.params.id
        const data = req.body
        if (!loaitapchiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'loaitapchiId is required'
            })
        }
        const response = await LoaiTapChiService.updateLoaiTapChi(loaitapchiId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsLoaiTapChi = async (req, res) => {
    try {
        const loaitapchiId = req.params.id
        if (!loaitapchiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaitapchiId is required'
            })
        }
        const response = await LoaiTapChiService.getDetailsLoaiTapChi(loaitapchiId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteLoaiTapChi = async (req, res) => {
    try {
        const loaitapchiId = req.params.id
        if (!loaitapchiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaitapchiId is required'
            })
        }
        const response = await LoaiTapChiService.deleteLoaiTapChi(loaitapchiId)
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
        const response = await LoaiTapChiService.deleteManyLoaiTapChi(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLoaiTapChi = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await LoaiTapChiService.getAllLoaiTapChi(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await LoaiTapChiService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createLoaiTapChi,
    updateLoaiTapChi,
    getDetailsLoaiTapChi,
    deleteLoaiTapChi,
    getAllLoaiTapChi,
    deleteMany,
    getAllType
}
