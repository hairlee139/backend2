const DinhMucChucDanhService = require('../services/DinhMucChucDanhService')

const createDinhMucChucDanh = async (req, res) => {
    try {
        const { DinhMucChucDanhId, ChucDanh, DinhMucThoiGian, DinhMucGioChuan, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!DinhMucChucDanhId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DinhMucChucDanhService.createDinhMucChucDanh(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDinhMucChucDanh = async (req, res) => {
    try {
        const dinhmucchucdanhId = req.params.id
        const data = req.body
        if (!dinhmucchucdanhId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'dinhmucchucdanhId is required'
            })
        }
        const response = await DinhMucChucDanhService.updateDinhMucChucDanh(dinhmucchucdanhId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDinhMucChucDanh = async (req, res) => {
    try {
        const dinhmucchucdanhId = req.params.id
        if (!dinhmucchucdanhId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The dinhmucchucdanhId is required'
            })
        }
        const response = await DinhMucChucDanhService.getDetailsDinhMucChucDanh(dinhmucchucdanhId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDinhMucChucDanh = async (req, res) => {
    try {
        const dinhmucchucdanhId = req.params.id
        if (!dinhmucchucdanhId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The dinhmucchucdanhId is required'
            })
        }
        const response = await DinhMucChucDanhService.deleteDinhMucChucDanh(dinhmucchucdanhId)
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
        const response = await DinhMucChucDanhService.deleteManyDinhMucChucDanh(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDinhMucChucDanh = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DinhMucChucDanhService.getAllDinhMucChucDanh(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DinhMucChucDanhService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDinhMucChucDanh,
    updateDinhMucChucDanh,
    getDetailsDinhMucChucDanh,
    deleteDinhMucChucDanh,
    getAllDinhMucChucDanh,
    deleteMany,
    getAllType
}
