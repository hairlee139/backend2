const DinhMucMienGiamService = require('../services/DinhMucMienGiamService')

const createDinhMucMienGiam = async (req, res) => {
    try {
        const { DinhMucMienGiamId, DoiTuong, TyLeMienGiam, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!DinhMucMienGiamId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DinhMucMienGiamService.createDinhMucMienGiam(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDinhMucMienGiam = async (req, res) => {
    try {
        const dinhmucmiengiamId = req.params.id
        const data = req.body
        if (!dinhmucmiengiamId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'dinhmucmiengiamId is required'
            })
        }
        const response = await DinhMucMienGiamService.updateDinhMucMienGiam(dinhmucmiengiamId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDinhMucMienGiam = async (req, res) => {
    try {
        const dinhmucmiengiamId = req.params.id
        if (!dinhmucmiengiamId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The dinhmucmiengiamId is required'
            })
        }
        const response = await DinhMucMienGiamService.getDetailsDinhMucMienGiam(dinhmucmiengiamId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDinhMucMienGiam = async (req, res) => {
    try {
        const dinhmucmiengiamId = req.params.id
        if (!dinhmucmiengiamId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The dinhmucmiengiamId is required'
            })
        }
        const response = await DinhMucMienGiamService.deleteDinhMucMienGiam(dinhmucmiengiamId)
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
        const response = await DinhMucMienGiamService.deleteManyDinhMucMienGiam(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDinhMucMienGiam = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DinhMucMienGiamService.getAllDinhMucMienGiam(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DinhMucMienGiamService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDinhMucMienGiam,
    updateDinhMucMienGiam,
    getDetailsDinhMucMienGiam,
    deleteDinhMucMienGiam,
    getAllDinhMucMienGiam,
    deleteMany,
    getAllType
}
