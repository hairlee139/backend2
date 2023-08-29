const DanhMucXaService = require('../services/DanhMucXaService')

const createDanhMucXa = async (req, res) => {
    try {
        const { DanhMucXaId, TenDanhMucXa, TenDanhMucHuyen, TenDanhMucTinh, HienThi, GhiChu } = req.body
        if (!DanhMucXaId || !TenDanhMucXa || !TenDanhMucHuyen || !TenDanhMucTinh) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DanhMucXaService.createDanhMucXa(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDanhMucXa = async (req, res) => {
    try {
        const danhmucxaId = req.params.id
        const data = req.body
        if (!danhmucxaId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'danhmucxaId is required'
            })
        }
        const response = await DanhMucXaService.updateDanhMucXa(danhmucxaId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDanhMucXa = async (req, res) => {
    try {
        const danhmucxaId = req.params.id
        if (!danhmucxaId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmucxaId is required'
            })
        }
        const response = await DanhMucXaService.getDetailsDanhMucXa(danhmucxaId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDanhMucXa = async (req, res) => {
    try {
        const danhmucxaId = req.params.id
        if (!danhmucxaId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmucxaId is required'
            })
        }
        const response = await DanhMucXaService.deleteDanhMucXa(danhmucxaId)
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
        const response = await DanhMucXaService.deleteManyDanhMucXa(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDanhMucXa = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DanhMucXaService.getAllDanhMucXa(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllTypeHuyen = async (req, res) => {
    try {
        const response = await DanhMucXaService.getAllTypeHuyen()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllTypeTinh = async (req, res) => {
    try {
        const response = await DanhMucXaService.getAllTypeTinh()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDanhMucXa,
    updateDanhMucXa,
    getDetailsDanhMucXa,
    deleteDanhMucXa,
    getAllDanhMucXa,
    deleteMany,
    getAllTypeHuyen,
    getAllTypeTinh

}
