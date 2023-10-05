const LoaiDangKyService = require('../services/LoaiDangKyService')

const createLoaiDangKy = async (req, res) => {
    try {
        const { LoaiDangKyId, TenLoaiDangKy, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!LoaiDangKyId || !TenLoaiDangKy) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await LoaiDangKyService.createLoaiDangKy(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateLoaiDangKy = async (req, res) => {
    try {
        const loaidangkyId = req.params.id
        const data = req.body
        if (!loaidangkyId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'loaidangkyId is required'
            })
        }
        const response = await LoaiDangKyService.updateLoaiDangKy(loaidangkyId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsLoaiDangKy = async (req, res) => {
    try {
        const loaidangkyId = req.params.id
        if (!loaidangkyId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaidangkyId is required'
            })
        }
        const response = await LoaiDangKyService.getDetailsLoaiDangKy(loaidangkyId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteLoaiDangKy = async (req, res) => {
    try {
        const loaidangkyId = req.params.id
        if (!loaidangkyId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaidangkyId is required'
            })
        }
        const response = await LoaiDangKyService.deleteLoaiDangKy(loaidangkyId)
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
        const response = await LoaiDangKyService.deleteManyLoaiDangKy(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLoaiDangKy = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await LoaiDangKyService.getAllLoaiDangKy(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await LoaiDangKyService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createLoaiDangKy,
    updateLoaiDangKy,
    getDetailsLoaiDangKy,
    deleteLoaiDangKy,
    getAllLoaiDangKy,
    deleteMany,
    getAllType
}
