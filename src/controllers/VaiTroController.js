const VaiTroService = require('../services/VaiTroService')

const createVaiTro = async (req, res) => {
    try {
        const { VaiTroId, TenVaiTro, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!VaiTroId || !TenVaiTro) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await VaiTroService.createVaiTro(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateVaiTro = async (req, res) => {
    try {
        const vaitroId = req.params.id
        const data = req.body
        if (!vaitroId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'vaitroId is required'
            })
        }
        const response = await VaiTroService.updateVaiTro(vaitroId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsVaiTro = async (req, res) => {
    try {
        const vaitroId = req.params.id
        if (!vaitroId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The vaitroId is required'
            })
        }
        const response = await VaiTroService.getDetailsVaiTro(vaitroId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteVaiTro = async (req, res) => {
    try {
        const vaitroId = req.params.id
        if (!vaitroId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The vaitroId is required'
            })
        }
        const response = await VaiTroService.deleteVaiTro(vaitroId)
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
        const response = await VaiTroService.deleteManyVaiTro(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllVaiTro = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await VaiTroService.getAllVaiTro(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await VaiTroService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createVaiTro,
    updateVaiTro,
    getDetailsVaiTro,
    deleteVaiTro,
    getAllVaiTro,
    deleteMany,
    getAllType
}
