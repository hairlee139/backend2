const DanhMucCapBacService = require('../services/DanhMucCapBacService')

const createDanhMucCapBac = async (req, res) => {
    try {
        const { DanhMucCapBacId, TenDanhMucCapBac, GhiChu } = req.body
        if (!DanhMucCapBacId || !TenDanhMucCapBac) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DanhMucCapBacService.createDanhMucCapBac(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDanhMucCapBac = async (req, res) => {
    try {
        const danhmuccapbacId = req.params.id
        const data = req.body
        if (!danhmuccapbacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'danhmuccapbacId is required'
            })
        }
        const response = await DanhMucCapBacService.updateDanhMucCapBac(danhmuccapbacId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDanhMucCapBac = async (req, res) => {
    try {
        const danhmuccapbacId = req.params.id
        if (!danhmuccapbacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuccapbacId is required'
            })
        }
        const response = await DanhMucCapBacService.getDetailsDanhMucCapBac(danhmuccapbacId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDanhMucCapBac = async (req, res) => {
    try {
        const danhmuccapbacId = req.params.id
        if (!danhmuccapbacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuccapbacId is required'
            })
        }
        const response = await DanhMucCapBacService.deleteDanhMucCapBac(danhmuccapbacId)
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
        const response = await DanhMucCapBacService.deleteManyDanhMucCapBac(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDanhMucCapBac = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DanhMucCapBacService.getAllDanhMucCapBac(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DanhMucCapBacService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDanhMucCapBac,
    updateDanhMucCapBac,
    getDetailsDanhMucCapBac,
    deleteDanhMucCapBac,
    getAllDanhMucCapBac,
    deleteMany,
    getAllType
}
