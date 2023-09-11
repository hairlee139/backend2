const HinhThucDaoTaoService = require('../services/HinhThucDaoTaoService')

const createHinhThucDaoTao = async (req, res) => {
    try {
        const { HinhThucDaoTaoId, TenHinhThucDaoTao, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!HinhThucDaoTaoId || !TenHinhThucDaoTao) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HinhThucDaoTaoService.createHinhThucDaoTao(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHinhThucDaoTao = async (req, res) => {
    try {
        const hinhthucdaotaoId = req.params.id
        const data = req.body
        if (!hinhthucdaotaoId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'hinhthucdaotaoId is required'
            })
        }
        const response = await HinhThucDaoTaoService.updateHinhThucDaoTao(hinhthucdaotaoId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsHinhThucDaoTao = async (req, res) => {
    try {
        const hinhthucdaotaoId = req.params.id
        if (!hinhthucdaotaoId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthucdaotaoId is required'
            })
        }
        const response = await HinhThucDaoTaoService.getDetailsHinhThucDaoTao(hinhthucdaotaoId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHinhThucDaoTao = async (req, res) => {
    try {
        const hinhthucdaotaoId = req.params.id
        if (!hinhthucdaotaoId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthucdaotaoId is required'
            })
        }
        const response = await HinhThucDaoTaoService.deleteHinhThucDaoTao(hinhthucdaotaoId)
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
        const response = await HinhThucDaoTaoService.deleteManyHinhThucDaoTao(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHinhThucDaoTao = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HinhThucDaoTaoService.getAllHinhThucDaoTao(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HinhThucDaoTaoService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHinhThucDaoTao,
    updateHinhThucDaoTao,
    getDetailsHinhThucDaoTao,
    deleteHinhThucDaoTao,
    getAllHinhThucDaoTao,
    deleteMany,
    getAllType
}
