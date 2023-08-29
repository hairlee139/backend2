const DanhMucTinhService = require('../services/DanhMucTinhService')

const createDanhMucTinh = async (req, res) => {
    try {
        const { DanhMucTinhId, TenDanhMucTinh, HienThi, GhiChu } = req.body
        if (!DanhMucTinhId || !TenDanhMucTinh) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DanhMucTinhService.createDanhMucTinh(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDanhMucTinh = async (req, res) => {
    try {
        const danhmuctinhId = req.params.id
        const data = req.body
        if (!danhmuctinhId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'danhmuctinhId is required'
            })
        }
        const response = await DanhMucTinhService.updateDanhMucTinh(danhmuctinhId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDanhMucTinh = async (req, res) => {
    try {
        const danhmuctinhId = req.params.id
        if (!danhmuctinhId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuctinhId is required'
            })
        }
        const response = await DanhMucTinhService.getDetailsDanhMucTinh(danhmuctinhId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDanhMucTinh = async (req, res) => {
    try {
        const danhmuctinhId = req.params.id
        if (!danhmuctinhId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuctinhId is required'
            })
        }
        const response = await DanhMucTinhService.deleteDanhMucTinh(danhmuctinhId)
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
        const response = await DanhMucTinhService.deleteManyDanhMucTinh(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDanhMucTinh = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DanhMucTinhService.getAllDanhMucTinh(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DanhMucTinhService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDanhMucTinh,
    updateDanhMucTinh,
    getDetailsDanhMucTinh,
    deleteDanhMucTinh,
    getAllDanhMucTinh,
    deleteMany,
    getAllType
}
