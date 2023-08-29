const DanhMucChucVuService = require('../services/DanhMucChucVuService')

const createDanhMucChucVu = async (req, res) => {
    try {
        const { DanhMucChucVuId, TenDanhMucChucVu, HienThi, GhiChu } = req.body
        if (!DanhMucChucVuId || !TenDanhMucChucVu) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DanhMucChucVuService.createDanhMucChucVu(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDanhMucChucVu = async (req, res) => {
    try {
        const danhmuccapbacId = req.params.id
        const data = req.body
        if (!danhmuccapbacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'danhmucchucvuId is required'
            })
        }
        const response = await DanhMucChucVuService.updateDanhMucChucVu(danhmuccapbacId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDanhMucChucVu = async (req, res) => {
    try {
        const danhmuccapbacId = req.params.id
        if (!danhmuccapbacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmucchucvuId is required'
            })
        }
        const response = await DanhMucChucVuService.getDetailsDanhMucChucVu(danhmuccapbacId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDanhMucChucVu = async (req, res) => {
    try {
        const danhmuccapbacId = req.params.id
        if (!danhmuccapbacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmucchucvuId is required'
            })
        }
        const response = await DanhMucChucVuService.deleteDanhMucChucVu(danhmuccapbacId)
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
        const response = await DanhMucChucVuService.deleteManyDanhMucChucVu(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDanhMucChucVu = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DanhMucChucVuService.getAllDanhMucChucVu(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DanhMucChucVuService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDanhMucChucVu,
    updateDanhMucChucVu,
    getDetailsDanhMucChucVu,
    deleteDanhMucChucVu,
    getAllDanhMucChucVu,
    deleteMany,
    getAllType
}
