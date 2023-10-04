const HinhThucKhenThuongService = require('../services/HinhThucKhenThuongService')

const createHinhThucKhenThuong = async (req, res) => {
    try {
        const { HinhThucKhenThuongId, TenHinhThucKhenThuong, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!HinhThucKhenThuongId || !TenHinhThucKhenThuong) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HinhThucKhenThuongService.createHinhThucKhenThuong(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHinhThucKhenThuong = async (req, res) => {
    try {
        const hinhthuckhenthuongId = req.params.id
        const data = req.body
        if (!hinhthuckhenthuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'hinhthuckhenthuongId is required'
            })
        }
        const response = await HinhThucKhenThuongService.updateHinhThucKhenThuong(hinhthuckhenthuongId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsHinhThucKhenThuong = async (req, res) => {
    try {
        const hinhthuckhenthuongId = req.params.id
        if (!hinhthuckhenthuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthuckhenthuongId is required'
            })
        }
        const response = await HinhThucKhenThuongService.getDetailsHinhThucKhenThuong(hinhthuckhenthuongId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHinhThucKhenThuong = async (req, res) => {
    try {
        const hinhthuckhenthuongId = req.params.id
        if (!hinhthuckhenthuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hinhthuckhenthuongId is required'
            })
        }
        const response = await HinhThucKhenThuongService.deleteHinhThucKhenThuong(hinhthuckhenthuongId)
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
        const response = await HinhThucKhenThuongService.deleteManyHinhThucKhenThuong(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHinhThucKhenThuong = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HinhThucKhenThuongService.getAllHinhThucKhenThuong(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HinhThucKhenThuongService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHinhThucKhenThuong,
    updateHinhThucKhenThuong,
    getDetailsHinhThucKhenThuong,
    deleteHinhThucKhenThuong,
    getAllHinhThucKhenThuong,
    deleteMany,
    getAllType
}
