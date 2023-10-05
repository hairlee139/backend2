const DinhMucCMKTService = require('../services/DinhMucCMKTService')

const createDinhMucCMKT = async (req, res) => {
    try {
        const { DinhMucCMKTId, ChucDanh, QuyDinhChung, GiaoDucTheChat, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!DinhMucCMKTId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DinhMucCMKTService.createDinhMucCMKT(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDinhMucCMKT = async (req, res) => {
    try {
        const dinhmuccmktId = req.params.id
        const data = req.body
        if (!dinhmuccmktId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'dinhmuccmktId is required'
            })
        }
        const response = await DinhMucCMKTService.updateDinhMucCMKT(dinhmuccmktId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDinhMucCMKT = async (req, res) => {
    try {
        const dinhmuccmktId = req.params.id
        if (!dinhmuccmktId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The dinhmuccmktId is required'
            })
        }
        const response = await DinhMucCMKTService.getDetailsDinhMucCMKT(dinhmuccmktId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDinhMucCMKT = async (req, res) => {
    try {
        const dinhmuccmktId = req.params.id
        if (!dinhmuccmktId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The dinhmuccmktId is required'
            })
        }
        const response = await DinhMucCMKTService.deleteDinhMucCMKT(dinhmuccmktId)
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
        const response = await DinhMucCMKTService.deleteManyDinhMucCMKT(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDinhMucCMKT = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DinhMucCMKTService.getAllDinhMucCMKT(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DinhMucCMKTService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDinhMucCMKT,
    updateDinhMucCMKT,
    getDetailsDinhMucCMKT,
    deleteDinhMucCMKT,
    getAllDinhMucCMKT,
    deleteMany,
    getAllType
}
