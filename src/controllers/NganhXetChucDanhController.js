const NganhXetChucDanhService = require('../services/NganhXetChucDanhService')

const createNganhXetChucDanh = async (req, res) => {
    try {
        const { NganhXetChucDanhId, TenNganhXetChucDanh, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!NganhXetChucDanhId || !TenNganhXetChucDanh) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await NganhXetChucDanhService.createNganhXetChucDanh(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateNganhXetChucDanh = async (req, res) => {
    try {
        const nganhxetchucdanhId = req.params.id
        const data = req.body
        if (!nganhxetchucdanhId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'nganhxetchucdanhId is required'
            })
        }
        const response = await NganhXetChucDanhService.updateNganhXetChucDanh(nganhxetchucdanhId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsNganhXetChucDanh = async (req, res) => {
    try {
        const nganhxetchucdanhId = req.params.id
        if (!nganhxetchucdanhId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The nganhxetchucdanhId is required'
            })
        }
        const response = await NganhXetChucDanhService.getDetailsNganhXetChucDanh(nganhxetchucdanhId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteNganhXetChucDanh = async (req, res) => {
    try {
        const nganhxetchucdanhId = req.params.id
        if (!nganhxetchucdanhId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The nganhxetchucdanhId is required'
            })
        }
        const response = await NganhXetChucDanhService.deleteNganhXetChucDanh(nganhxetchucdanhId)
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
        const response = await NganhXetChucDanhService.deleteManyNganhXetChucDanh(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllNganhXetChucDanh = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await NganhXetChucDanhService.getAllNganhXetChucDanh(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await NganhXetChucDanhService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createNganhXetChucDanh,
    updateNganhXetChucDanh,
    getDetailsNganhXetChucDanh,
    deleteNganhXetChucDanh,
    getAllNganhXetChucDanh,
    deleteMany,
    getAllType
}
