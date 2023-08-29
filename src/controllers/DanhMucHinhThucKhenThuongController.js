const DanhMucKhenThuongService = require('../services/DanhMucHinhThucKhenThuongService')

const createDanhMucKhenThuong = async (req, res) => {
    try {
        const { DanhMucKhenThuongId, TenDanhMucKhenThuong, HienThi, GhiChu } = req.body
        if (!DanhMucKhenThuongId || !TenDanhMucKhenThuong) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DanhMucKhenThuongService.createDanhMucKhenThuong(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDanhMucKhenThuong = async (req, res) => {
    try {
        const danhmuckhenthuongId = req.params.id
        const data = req.body
        if (!danhmuckhenthuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'danhmuckhenthuongId is required'
            })
        }
        const response = await DanhMucKhenThuongService.updateDanhMucKhenThuong(danhmuckhenthuongId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDanhMucKhenThuong = async (req, res) => {
    try {
        const danhmuckhenthuongId = req.params.id
        if (!danhmuckhenthuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuckhenthuongId is required'
            })
        }
        const response = await DanhMucKhenThuongService.getDetailsDanhMucKhenThuong(danhmuckhenthuongId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDanhMucKhenThuong = async (req, res) => {
    try {
        const danhmuckhenthuongId = req.params.id
        if (!danhmuckhenthuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuckhenthuongId is required'
            })
        }
        const response = await DanhMucKhenThuongService.deleteDanhMucKhenThuong(danhmuckhenthuongId)
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
        const response = await DanhMucKhenThuongService.deleteManyDanhMucKhenThuong(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDanhMucKhenThuong = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DanhMucKhenThuongService.getAllDanhMucKhenThuong(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DanhMucKhenThuongService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDanhMucKhenThuong,
    updateDanhMucKhenThuong,
    getDetailsDanhMucKhenThuong,
    deleteDanhMucKhenThuong,
    getAllDanhMucKhenThuong,
    deleteMany,
    getAllType
}
