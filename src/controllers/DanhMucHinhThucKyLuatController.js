const DanhMucKyLuatService = require('../services/DanhMucHinhThucKyLuatService')

const createDanhMucKyLuat = async (req, res) => {
    try {
        const { DanhMucKyLuatId, TenDanhMucKyLuat, HienThi, GhiChu } = req.body
        if (!DanhMucKyLuatId || !TenDanhMucKyLuat) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DanhMucKyLuatService.createDanhMucKyLuat(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDanhMucKyLuat = async (req, res) => {
    try {
        const danhmuckyluatId = req.params.id
        const data = req.body
        if (!danhmuckyluatId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'danhmuckyluatId is required'
            })
        }
        const response = await DanhMucKyLuatService.updateDanhMucKyLuat(danhmuckyluatId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDanhMucKyLuat = async (req, res) => {
    try {
        const danhmuckyluatId = req.params.id
        if (!danhmuckyluatId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuckyluatId is required'
            })
        }
        const response = await DanhMucKyLuatService.getDetailsDanhMucKyLuat(danhmuckyluatId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDanhMucKyLuat = async (req, res) => {
    try {
        const danhmuckyluatId = req.params.id
        if (!danhmuckyluatId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuckyluatId is required'
            })
        }
        const response = await DanhMucKyLuatService.deleteDanhMucKyLuat(danhmuckyluatId)
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
        const response = await DanhMucKyLuatService.deleteManyDanhMucKyLuat(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDanhMucKyLuat = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DanhMucKyLuatService.getAllDanhMucKyLuat(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DanhMucKyLuatService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDanhMucKyLuat,
    updateDanhMucKyLuat,
    getDetailsDanhMucKyLuat,
    deleteDanhMucKyLuat,
    getAllDanhMucKyLuat,
    deleteMany,
    getAllType
}
