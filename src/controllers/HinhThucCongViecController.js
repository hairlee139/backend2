const HinhThucCongViecService = require('../services/HinhThucCongViecService')

const createHinhThucCongViec = async (req, res) => {
    try {
        const { HinhThucCongViecId, TenHinhThucCongViec, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!HinhThucCongViecId || !TenHinhThucCongViec) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HinhThucCongViecService.createHinhThucCongViec(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHinhThucCongViec = async (req, res) => {
    try {
        const hinhthuccongviecId = req.params.id
        const data = req.body
        if (!hinhthuccongviecId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'hinhthuccongviecId is required'
            })
        }
        const response = await HinhThucCongViecService.updateHinhThucCongViec(hinhthuccongviecId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsHinhThucCongViec = async (req, res) => {
    try {
        const hinhthuccongviecId = req.params.id
        if (!hinhthuccongviecId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthuccongviecId is required'
            })
        }
        const response = await HinhThucCongViecService.getDetailsHinhThucCongViec(hinhthuccongviecId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHinhThucCongViec = async (req, res) => {
    try {
        const hinhthuccongviecId = req.params.id
        if (!hinhthuccongviecId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthuccongviecId is required'
            })
        }
        const response = await HinhThucCongViecService.deleteHinhThucCongViec(hinhthuccongviecId)
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
        const response = await HinhThucCongViecService.deleteManyHinhThucCongViec(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHinhThucCongViec = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HinhThucCongViecService.getAllHinhThucCongViec(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HinhThucCongViecService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHinhThucCongViec,
    updateHinhThucCongViec,
    getDetailsHinhThucCongViec,
    deleteHinhThucCongViec,
    getAllHinhThucCongViec,
    deleteMany,
    getAllType
}
