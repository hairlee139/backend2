const ChucVuService = require('../services/ChucVuService')

const createChucVu = async (req, res) => {
    try {
        const { code, name, GhiChu } = req.body
        if (!code || !name) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ChucVuService.createChucVu(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateChucVu = async (req, res) => {
    try {
        const chucvuId = req.params.id
        const data = req.body
        if (!chucvuId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'chucvuId is required'
            })
        }
        const response = await ChucVuService.updateChucVu(chucvuId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsChucVu = async (req, res) => {
    try {
        const chucvuId = req.params.id
        if (!chucvuId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The chucvuId is required'
            })
        }
        const response = await ChucVuService.getDetailsChucVu(chucvuId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteChucVu = async (req, res) => {
    try {
        const chucvuId = req.params.id
        if (!chucvuId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The chucvuId is required'
            })
        }
        const response = await ChucVuService.deleteChucVu(chucvuId)
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
        const response = await ChucVuService.deleteManyChucVu(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllChucVu = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await ChucVuService.getAllChucVu(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await ChucVuService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createChucVu,
    updateChucVu,
    getDetailsChucVu,
    deleteChucVu,
    getAllChucVu,
    deleteMany,
    getAllType
}
