const DanhMucLoaiDonViService = require('../services/DanhMucLoaiDonViService')

const createDanhMucLoaiDonVi = async (req, res) => {
    try {
        const { DanhMucLoaiDonViId, TenDanhMucLoaiDonVi, HienThi, GhiChu } = req.body
        if (!DanhMucLoaiDonViId || !TenDanhMucLoaiDonVi) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DanhMucLoaiDonViService.createDanhMucLoaiDonVi(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDanhMucLoaiDonVi = async (req, res) => {
    try {
        const danhmucloaidonviId = req.params.id
        const data = req.body
        if (!danhmucloaidonviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'danhmucloaidonviId is required'
            })
        }
        const response = await DanhMucLoaiDonViService.updateDanhMucLoaiDonVi(danhmucloaidonviId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDanhMucLoaiDonVi = async (req, res) => {
    try {
        const danhmucloaidonviId = req.params.id
        if (!danhmucloaidonviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmucloaidonviId is required'
            })
        }
        const response = await DanhMucLoaiDonViService.getDetailsDanhMucLoaiDonVi(danhmucloaidonviId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDanhMucLoaiDonVi = async (req, res) => {
    try {
        const danhmucloaidonviId = req.params.id
        if (!danhmucloaidonviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmucloaidonviId is required'
            })
        }
        const response = await DanhMucLoaiDonViService.deleteDanhMucLoaiDonVi(danhmucloaidonviId)
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
        const response = await DanhMucLoaiDonViService.deleteManyDanhMucLoaiDonVi(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDanhMucLoaiDonVi = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DanhMucLoaiDonViService.getAllDanhMucLoaiDonVi(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DanhMucLoaiDonViService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDanhMucLoaiDonVi,
    updateDanhMucLoaiDonVi,
    getDetailsDanhMucLoaiDonVi,
    deleteDanhMucLoaiDonVi,
    getAllDanhMucLoaiDonVi,
    deleteMany,
    getAllType
}
