const CapHoiDongService = require('../services/CapHoiDongService')

const createCapHoiDong = async (req, res) => {
    try {
        const { CapHoiDongId, TenCapHoiDong, GhiChu, TenLoaiHoiDong } = req.body
        if (!CapHoiDongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await CapHoiDongService.createCapHoiDong(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateCapHoiDong = async (req, res) => {
    try {
        const caphoidongId = req.params.id
        const data = req.body
        if (!caphoidongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'caphoidongId is required'
            })
        }
        const response = await CapHoiDongService.updateCapHoiDong(caphoidongId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsCapHoiDong = async (req, res) => {
    try {
        const caphoidongId = req.params.id
        if (!caphoidongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The caphoidongId is required'
            })
        }
        const response = await CapHoiDongService.getDetailsCapHoiDong(caphoidongId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteCapHoiDong = async (req, res) => {
    try {
        const caphoidongId = req.params.id
        if (!caphoidongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The caphoidongId is required'
            })
        }
        const response = await CapHoiDongService.deleteCapHoiDong(caphoidongId)
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
        const response = await CapHoiDongService.deleteManyCapHoiDong(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllCapHoiDong = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await CapHoiDongService.getAllCapHoiDong(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await CapHoiDongService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllTypeByLoaiHoiDong = async (req, res) => {
    try {
        const response = await CapHoiDongService.getAllTypeByLoaiHoiDong()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getAllTypeByCapHoiDong = async (req, res) => {
    try {
        const response = await CapHoiDongService.getAllTypeByCapHoiDong()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
module.exports = {
    createCapHoiDong,
    updateCapHoiDong,
    getDetailsCapHoiDong,
    deleteCapHoiDong,
    getAllCapHoiDong,
    deleteMany,
    getAllType,
    getAllTypeByLoaiHoiDong,
    getAllTypeByCapHoiDong
}
