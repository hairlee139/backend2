const HinhThucGiangDayService = require('../services/HinhThucGiangDayService')

const createHinhThucGiangDay = async (req, res) => {
    try {
        const { HinhThucGiangDayId, TenHinhThucGiangDay, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!HinhThucGiangDayId || !TenHinhThucGiangDay) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HinhThucGiangDayService.createHinhThucGiangDay(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHinhThucGiangDay = async (req, res) => {
    try {
        const hinhthucgiangdayId = req.params.id
        const data = req.body
        if (!hinhthucgiangdayId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'hinhthucgiangdayId is required'
            })
        }
        const response = await HinhThucGiangDayService.updateHinhThucGiangDay(hinhthucgiangdayId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsHinhThucGiangDay = async (req, res) => {
    try {
        const hinhthucgiangdayId = req.params.id
        if (!hinhthucgiangdayId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthucgiangdayId is required'
            })
        }
        const response = await HinhThucGiangDayService.getDetailsHinhThucGiangDay(hinhthucgiangdayId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHinhThucGiangDay = async (req, res) => {
    try {
        const hinhthucgiangdayId = req.params.id
        if (!hinhthucgiangdayId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthucgiangdayId is required'
            })
        }
        const response = await HinhThucGiangDayService.deleteHinhThucGiangDay(hinhthucgiangdayId)
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
        const response = await HinhThucGiangDayService.deleteManyHinhThucGiangDay(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHinhThucGiangDay = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HinhThucGiangDayService.getAllHinhThucGiangDay(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HinhThucGiangDayService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHinhThucGiangDay,
    updateHinhThucGiangDay,
    getDetailsHinhThucGiangDay,
    deleteHinhThucGiangDay,
    getAllHinhThucGiangDay,
    deleteMany,
    getAllType
}
