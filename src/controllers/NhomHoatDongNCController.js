const NhomHoatDongNCService = require('../services/NhomHoatDongNCService')

const createNhomHoatDongNC = async (req, res) => {
    try {
        const { NhomHoatDongNCId, TenNhomHoatDongNC, LoaiHoatDong, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!TenNhomHoatDongNC) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await NhomHoatDongNCService.createNhomHoatDongNC(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateNhomHoatDongNC = async (req, res) => {
    try {
        const nhomhoatdongncId = req.params.id
        const data = req.body
        if (!nhomhoatdongncId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'nhomhoatdongncId is required'
            })
        }
        const response = await NhomHoatDongNCService.updateNhomHoatDongNC(nhomhoatdongncId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsNhomHoatDongNC = async (req, res) => {
    try {
        const nhomhoatdongncId = req.params.id
        if (!nhomhoatdongncId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The nhomhoatdongncId is required'
            })
        }
        const response = await NhomHoatDongNCService.getDetailsNhomHoatDongNC(nhomhoatdongncId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteNhomHoatDongNC = async (req, res) => {
    try {
        const nhomhoatdongncId = req.params.id
        if (!nhomhoatdongncId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The nhomhoatdongncId is required'
            })
        }
        const response = await NhomHoatDongNCService.deleteNhomHoatDongNC(nhomhoatdongncId)
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
        const response = await NhomHoatDongNCService.deleteManyNhomHoatDongNC(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllNhomHoatDongNC = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await NhomHoatDongNCService.getAllNhomHoatDongNC(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllTypeNhomHoatDong = async (req, res) => {
    try {
        const response = await NhomHoatDongNCService.getAllTypeNhomHoatDong()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getAllTypeLoaiHoatDong = async (req, res) => {
    try {
        const response = await NhomHoatDongNCService.getAllTypeLoaiHoatDong()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
module.exports = {
    createNhomHoatDongNC,
    updateNhomHoatDongNC,
    getDetailsNhomHoatDongNC,
    deleteNhomHoatDongNC,
    getAllNhomHoatDongNC,
    deleteMany,
    getAllTypeNhomHoatDong, getAllTypeLoaiHoatDong
}
