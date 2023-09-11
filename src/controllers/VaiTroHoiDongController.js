const VaiTroHoiDongService = require('../services/VaiTroHoiDongService')

const createVaiTroHoiDong = async (req, res) => {
    try {
        const { VaiTroHoiDongId, TenVaiTroHoiDong, GhiChu } = req.body
        if (!VaiTroHoiDongId || !TenVaiTroHoiDong) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await VaiTroHoiDongService.createVaiTroHoiDong(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateVaiTroHoiDong = async (req, res) => {
    try {
        const vaitrohoidongId = req.params.id
        const data = req.body
        if (!vaitrohoidongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'vaitrohoidongId is required'
            })
        }
        const response = await VaiTroHoiDongService.updateVaiTroHoiDong(vaitrohoidongId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsVaiTroHoiDong = async (req, res) => {
    try {
        const vaitrohoidongId = req.params.id
        if (!vaitrohoidongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The vaitrohoidongId is required'
            })
        }
        const response = await VaiTroHoiDongService.getDetailsVaiTroHoiDong(vaitrohoidongId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteVaiTroHoiDong = async (req, res) => {
    try {
        const vaitrohoidongId = req.params.id
        if (!vaitrohoidongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The vaitrohoidongId is required'
            })
        }
        const response = await VaiTroHoiDongService.deleteVaiTroHoiDong(vaitrohoidongId)
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
        const response = await VaiTroHoiDongService.deleteManyVaiTroHoiDong(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllVaiTroHoiDong = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await VaiTroHoiDongService.getAllVaiTroHoiDong(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await VaiTroHoiDongService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createVaiTroHoiDong,
    updateVaiTroHoiDong,
    getDetailsVaiTroHoiDong,
    deleteVaiTroHoiDong,
    getAllVaiTroHoiDong,
    deleteMany,
    getAllType
}
