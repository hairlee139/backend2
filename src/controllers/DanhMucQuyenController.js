const DanhMucQuyenService = require('../services/DanhMucQuyenService')

const createDanhMucQuyen = async (req, res) => {
    try {
        const { DanhMucQuyenId, TenDanhMucQuyen,ChiTiet, GhiChu } = req.body
        if (!DanhMucQuyenId || !TenDanhMucQuyen) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DanhMucQuyenService.createDanhMucQuyen(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDanhMucQuyen = async (req, res) => {
    try {
        const danhmucquyenId = req.params.id
        const data = req.body
        if (!danhmucquyenId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'danhmucquyenId is required'
            })
        }
        const response = await DanhMucQuyenService.updateDanhMucQuyen(danhmucquyenId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDanhMucQuyen = async (req, res) => {
    try {
        const danhmucquyenId = req.params.id
        if (!danhmucquyenId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmucquyenId is required'
            })
        }
        const response = await DanhMucQuyenService.getDetailsDanhMucQuyen(danhmucquyenId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDanhMucQuyen = async (req, res) => {
    try {
        const danhmucquyenId = req.params.id
        if (!danhmucquyenId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmucquyenId is required'
            })
        }
        const response = await DanhMucQuyenService.deleteDanhMucQuyen(danhmucquyenId)
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
        const response = await DanhMucQuyenService.deleteManyDanhMucQuyen(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDanhMucQuyen = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DanhMucQuyenService.getAllDanhMucQuyen(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DanhMucQuyenService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDanhMucQuyen,
    updateDanhMucQuyen,
    getDetailsDanhMucQuyen,
    deleteDanhMucQuyen,
    getAllDanhMucQuyen,
    deleteMany,
    getAllType
}
