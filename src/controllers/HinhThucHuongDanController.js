const HinhThucHuongDanService = require('../services/HinhThucHuongDanService')

const createHinhThucHuongDan = async (req, res) => {
    try {
        const { HinhThucHuongDanId, TenHinhThucHuongDan, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!HinhThucHuongDanId || !TenHinhThucHuongDan) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HinhThucHuongDanService.createHinhThucHuongDan(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHinhThucHuongDan = async (req, res) => {
    try {
        const hinhthuchuongdanId = req.params.id
        const data = req.body
        if (!hinhthuchuongdanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'hinhthuchuongdanId is required'
            })
        }
        const response = await HinhThucHuongDanService.updateHinhThucHuongDan(hinhthuchuongdanId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsHinhThucHuongDan = async (req, res) => {
    try {
        const hinhthuchuongdanId = req.params.id
        if (!hinhthuchuongdanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthuchuongdanId is required'
            })
        }
        const response = await HinhThucHuongDanService.getDetailsHinhThucHuongDan(hinhthuchuongdanId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHinhThucHuongDan = async (req, res) => {
    try {
        const hinhthuchuongdanId = req.params.id
        if (!hinhthuchuongdanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthuchuongdanId is required'
            })
        }
        const response = await HinhThucHuongDanService.deleteHinhThucHuongDan(hinhthuchuongdanId)
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
        const response = await HinhThucHuongDanService.deleteManyHinhThucHuongDan(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHinhThucHuongDan = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HinhThucHuongDanService.getAllHinhThucHuongDan(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HinhThucHuongDanService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHinhThucHuongDan,
    updateHinhThucHuongDan,
    getDetailsHinhThucHuongDan,
    deleteHinhThucHuongDan,
    getAllHinhThucHuongDan,
    deleteMany,
    getAllType
}
