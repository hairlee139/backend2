const LoaiGiaiThuongService = require('../services/LoaiGiaiThuongService')

const createLoaiGiaiThuong = async (req, res) => {
    try {
        const { LoaiGiaiThuongId, TenLoaiGiaiThuong, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!LoaiGiaiThuongId || !TenLoaiGiaiThuong) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await LoaiGiaiThuongService.createLoaiGiaiThuong(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateLoaiGiaiThuong = async (req, res) => {
    try {
        const loaigiaithuongId = req.params.id
        const data = req.body
        if (!loaigiaithuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'loaigiaithuongId is required'
            })
        }
        const response = await LoaiGiaiThuongService.updateLoaiGiaiThuong(loaigiaithuongId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsLoaiGiaiThuong = async (req, res) => {
    try {
        const loaigiaithuongId = req.params.id
        if (!loaigiaithuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaigiaithuongId is required'
            })
        }
        const response = await LoaiGiaiThuongService.getDetailsLoaiGiaiThuong(loaigiaithuongId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteLoaiGiaiThuong = async (req, res) => {
    try {
        const loaigiaithuongId = req.params.id
        if (!loaigiaithuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The loaigiaithuongId is required'
            })
        }
        const response = await LoaiGiaiThuongService.deleteLoaiGiaiThuong(loaigiaithuongId)
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
        const response = await LoaiGiaiThuongService.deleteManyLoaiGiaiThuong(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllLoaiGiaiThuong = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await LoaiGiaiThuongService.getAllLoaiGiaiThuong(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await LoaiGiaiThuongService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createLoaiGiaiThuong,
    updateLoaiGiaiThuong,
    getDetailsLoaiGiaiThuong,
    deleteLoaiGiaiThuong,
    getAllLoaiGiaiThuong,
    deleteMany,
    getAllType
}
