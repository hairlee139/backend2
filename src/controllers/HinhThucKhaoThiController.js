const HinhThucKhaoThiService = require('../services/HinhThucKhaoThiService')

const createHinhThucKhaoThi = async (req, res) => {
    try {
        const { HinhThucKhaoThiId, TenHinhThucKhaoThi, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!HinhThucKhaoThiId || !TenHinhThucKhaoThi) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HinhThucKhaoThiService.createHinhThucKhaoThi(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHinhThucKhaoThi = async (req, res) => {
    try {
        const hinhthuckhaothiId = req.params.id
        const data = req.body
        if (!hinhthuckhaothiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'hinhthuckhaothiId is required'
            })
        }
        const response = await HinhThucKhaoThiService.updateHinhThucKhaoThi(hinhthuckhaothiId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsHinhThucKhaoThi = async (req, res) => {
    try {
        const hinhthuckhaothiId = req.params.id
        if (!hinhthuckhaothiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthuckhaothiId is required'
            })
        }
        const response = await HinhThucKhaoThiService.getDetailsHinhThucKhaoThi(hinhthuckhaothiId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHinhThucKhaoThi = async (req, res) => {
    try {
        const hinhthuckhaothiId = req.params.id
        if (!hinhthuckhaothiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthuckhaothiId is required'
            })
        }
        const response = await HinhThucKhaoThiService.deleteHinhThucKhaoThi(hinhthuckhaothiId)
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
        const response = await HinhThucKhaoThiService.deleteManyHinhThucKhaoThi(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHinhThucKhaoThi = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HinhThucKhaoThiService.getAllHinhThucKhaoThi(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HinhThucKhaoThiService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHinhThucKhaoThi,
    updateHinhThucKhaoThi,
    getDetailsHinhThucKhaoThi,
    deleteHinhThucKhaoThi,
    getAllHinhThucKhaoThi,
    deleteMany,
    getAllType
}
