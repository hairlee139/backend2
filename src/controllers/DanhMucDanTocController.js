const DanhMucDanTocService = require('../services/DanhMucDanTocService')

const createDanhMucDanToc = async (req, res) => {
    try {
        const { DanhMucDanTocId, TenDanhMucDanToc, HienThi, GhiChu } = req.body
        if (!DanhMucDanTocId || !TenDanhMucDanToc) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DanhMucDanTocService.createDanhMucDanToc(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDanhMucDanToc = async (req, res) => {
    try {
        const danhmucdantocId = req.params.id
        const data = req.body
        if (!danhmucdantocId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'danhmucdantocId is required'
            })
        }
        const response = await DanhMucDanTocService.updateDanhMucDanToc(danhmucdantocId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDanhMucDanToc = async (req, res) => {
    try {
        const danhmucdantocId = req.params.id
        if (!danhmucdantocId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmucdantocId is required'
            })
        }
        const response = await DanhMucDanTocService.getDetailsDanhMucDanToc(danhmucdantocId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDanhMucDanToc = async (req, res) => {
    try {
        const danhmucdantocId = req.params.id
        if (!danhmucdantocId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmucdantocId is required'
            })
        }
        const response = await DanhMucDanTocService.deleteDanhMucDanToc(danhmucdantocId)
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
        const response = await DanhMucDanTocService.deleteManyDanhMucDanToc(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDanhMucDanToc = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DanhMucDanTocService.getAllDanhMucDanToc(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DanhMucDanTocService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDanhMucDanToc,
    updateDanhMucDanToc,
    getDetailsDanhMucDanToc,
    deleteDanhMucDanToc,
    getAllDanhMucDanToc,
    deleteMany,
    getAllType
}
