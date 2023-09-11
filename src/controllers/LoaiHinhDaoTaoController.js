const LoaiHinhDaoTaoService = require('../services/LoaiHinhDaoTaoService')

const createLoaiHinhDaoTao = async (req, res) => {
    try {
        const { LoaiHinhDaoTaoId, TenLoaiHinhDaoTao, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!LoaiHinhDaoTaoId || !TenLoaiHinhDaoTao) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await LoaiHinhDaoTaoService.createLoaiHinhDaoTao(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateLoaiHinhDaoTao = async (req, res) => {
    try {
        const loaihinhdaotaoId = req.params.id
        const data = req.body
        if (!loaihinhdaotaoId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'loaihinhdaotaoId is required'
            })
        }
        const response = await LoaiHinhDaoTaoService.updateLoaiHinhDaoTao(loaihinhdaotaoId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsLoaiHinhDaoTao = async (req, res) => {
    try {
        const loaihinhdaotaoId = req.params.id
        if (!loaihinhdaotaoId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaihinhdaotaoId is required'
            })
        }
        const response = await LoaiHinhDaoTaoService.getDetailsLoaiHinhDaoTao(loaihinhdaotaoId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteLoaiHinhDaoTao = async (req, res) => {
    try {
        const loaihinhdaotaoId = req.params.id
        if (!loaihinhdaotaoId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaihinhdaotaoId is required'
            })
        }
        const response = await LoaiHinhDaoTaoService.deleteLoaiHinhDaoTao(loaihinhdaotaoId)
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
        const response = await LoaiHinhDaoTaoService.deleteManyLoaiHinhDaoTao(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLoaiHinhDaoTao = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await LoaiHinhDaoTaoService.getAllLoaiHinhDaoTao(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await LoaiHinhDaoTaoService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createLoaiHinhDaoTao,
    updateLoaiHinhDaoTao,
    getDetailsLoaiHinhDaoTao,
    deleteLoaiHinhDaoTao,
    getAllLoaiHinhDaoTao,
    deleteMany,
    getAllType
}
