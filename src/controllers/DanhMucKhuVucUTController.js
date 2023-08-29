const DanhMucKhuVucUTService = require('../services/DanhMucKhuVucUTService')

const createDanhMucKhuVucUT = async (req, res) => {
    try {
        const { DanhMucKhuVucUTId, TenDanhMucKhuVucUT, HienThi, GhiChu } = req.body
        if (!DanhMucKhuVucUTId || !TenDanhMucKhuVucUT) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DanhMucKhuVucUTService.createDanhMucKhuVucUT(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDanhMucKhuVucUT = async (req, res) => {
    try {
        const danhmuckhuvucutId = req.params.id
        const data = req.body
        if (!danhmuckhuvucutId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'danhmuckhuvucutId is required'
            })
        }
        const response = await DanhMucKhuVucUTService.updateDanhMucKhuVucUT(danhmuckhuvucutId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDanhMucKhuVucUT = async (req, res) => {
    try {
        const danhmuckhuvucutId = req.params.id
        if (!danhmuckhuvucutId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuckhuvucutId is required'
            })
        }
        const response = await DanhMucKhuVucUTService.getDetailsDanhMucKhuVucUT(danhmuckhuvucutId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDanhMucKhuVucUT = async (req, res) => {
    try {
        const danhmuckhuvucutId = req.params.id
        if (!danhmuckhuvucutId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuckhuvucutId is required'
            })
        }
        const response = await DanhMucKhuVucUTService.deleteDanhMucKhuVucUT(danhmuckhuvucutId)
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
        const response = await DanhMucKhuVucUTService.deleteManyDanhMucKhuVucUT(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDanhMucKhuVucUT = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DanhMucKhuVucUTService.getAllDanhMucKhuVucUT(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DanhMucKhuVucUTService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDanhMucKhuVucUT,
    updateDanhMucKhuVucUT,
    getDetailsDanhMucKhuVucUT,
    deleteDanhMucKhuVucUT,
    getAllDanhMucKhuVucUT,
    deleteMany,
    getAllType
}
