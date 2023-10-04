const HinhThucDeTaiService = require('../services/HinhThucDeTaiService')

const createHinhThucDeTai = async (req, res) => {
    try {
        const { HinhThucDeTaiId, TenHinhThucDeTai, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!HinhThucDeTaiId || !TenHinhThucDeTai) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HinhThucDeTaiService.createHinhThucDeTai(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHinhThucDeTai = async (req, res) => {
    try {
        const hinhthucdetaiId = req.params.id
        const data = req.body
        if (!hinhthucdetaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'hinhthucdetaiId is required'
            })
        }
        const response = await HinhThucDeTaiService.updateHinhThucDeTai(hinhthucdetaiId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsHinhThucDeTai = async (req, res) => {
    try {
        const hinhthucdetaiId = req.params.id
        if (!hinhthucdetaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthucdetaiId is required'
            })
        }
        const response = await HinhThucDeTaiService.getDetailsHinhThucDeTai(hinhthucdetaiId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHinhThucDeTai = async (req, res) => {
    try {
        const hinhthucdetaiId = req.params.id
        if (!hinhthucdetaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthucdetaiId is required'
            })
        }
        const response = await HinhThucDeTaiService.deleteHinhThucDeTai(hinhthucdetaiId)
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
        const response = await HinhThucDeTaiService.deleteManyHinhThucDeTai(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHinhThucDeTai = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HinhThucDeTaiService.getAllHinhThucDeTai(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HinhThucDeTaiService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHinhThucDeTai,
    updateHinhThucDeTai,
    getDetailsHinhThucDeTai,
    deleteHinhThucDeTai,
    getAllHinhThucDeTai,
    deleteMany,
    getAllType
}
