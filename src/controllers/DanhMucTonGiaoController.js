const DanhMucTonGiaoService = require('../services/DanhMucTonGiaoService')

const createDanhMucTonGiao = async (req, res) => {
    try {
        const { DanhMucTonGiaoId, TenDanhMucTonGiao, HienThi, GhiChu } = req.body
        if (!DanhMucTonGiaoId || !TenDanhMucTonGiao) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DanhMucTonGiaoService.createDanhMucTonGiao(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDanhMucTonGiao = async (req, res) => {
    try {
        const danhmuctongiaoId = req.params.id
        const data = req.body
        if (!danhmuctongiaoId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'danhmuctongiaoId is required'
            })
        }
        const response = await DanhMucTonGiaoService.updateDanhMucTonGiao(danhmuctongiaoId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDanhMucTonGiao = async (req, res) => {
    try {
        const danhmuctongiaoId = req.params.id
        if (!danhmuctongiaoId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuctongiaoId is required'
            })
        }
        const response = await DanhMucTonGiaoService.getDetailsDanhMucTonGiao(danhmuctongiaoId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDanhMucTonGiao = async (req, res) => {
    try {
        const danhmuctongiaoId = req.params.id
        if (!danhmuctongiaoId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuctongiaoId is required'
            })
        }
        const response = await DanhMucTonGiaoService.deleteDanhMucTonGiao(danhmuctongiaoId)
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
        const response = await DanhMucTonGiaoService.deleteManyDanhMucTonGiao(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDanhMucTonGiao = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DanhMucTonGiaoService.getAllDanhMucTonGiao(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DanhMucTonGiaoService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDanhMucTonGiao,
    updateDanhMucTonGiao,
    getDetailsDanhMucTonGiao,
    deleteDanhMucTonGiao,
    getAllDanhMucTonGiao,
    deleteMany,
    getAllType
}
