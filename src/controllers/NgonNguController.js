const NgonNguService = require('../services/NgonNguService')

const createNgonNgu = async (req, res) => {
    try {
        const { NgonNguId, TenNgonNgu, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!NgonNguId || !TenNgonNgu) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await NgonNguService.createNgonNgu(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateNgonNgu = async (req, res) => {
    try {
        constngonnguId = req.params.id
        const data = req.body
        if (!ngonnguId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'ngonnguId is required'
            })
        }
        const response = await NgonNguService.updateNgonNgu(ngonnguId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsNgonNgu = async (req, res) => {
    try {
        constngonnguId = req.params.id
        if (!ngonnguId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'ThengonnguId is required'
            })
        }
        const response = await NgonNguService.getDetailsNgonNgu(ngonnguId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteNgonNgu = async (req, res) => {
    try {
        constngonnguId = req.params.id
        if (!ngonnguId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'ThengonnguId is required'
            })
        }
        const response = await NgonNguService.deleteNgonNgu(ngonnguId)
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
        const response = await NgonNguService.deleteManyNgonNgu(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllNgonNgu = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await NgonNguService.getAllNgonNgu(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await NgonNguService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createNgonNgu,
    updateNgonNgu,
    getDetailsNgonNgu,
    deleteNgonNgu,
    getAllNgonNgu,
    deleteMany,
    getAllType
}
