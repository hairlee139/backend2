const DanhMucHuyenService = require('../services/DanhMucHuyenService')

const createDanhMucHuyen = async (req, res) => {
    try {
        const { DanhMucHuyenId, TenDanhMucHuyen, TenDanhMucTinh, HienThi, GhiChu } = req.body
        if (!DanhMucHuyenId || !TenDanhMucHuyen || !TenDanhMucTinh) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DanhMucHuyenService.createDanhMucHuyen(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDanhMucHuyen = async (req, res) => {
    try {
        const danhmuchuyenId = req.params.id
        const data = req.body
        if (!danhmuchuyenId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'danhmuchuyenId is required'
            })
        }
        const response = await DanhMucHuyenService.updateDanhMucHuyen(danhmuchuyenId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDanhMucHuyen = async (req, res) => {
    try {
        const danhmuchuyenId = req.params.id
        if (!danhmuchuyenId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuchuyenId is required'
            })
        }
        const response = await DanhMucHuyenService.getDetailsDanhMucHuyen(danhmuchuyenId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDanhMucHuyen = async (req, res) => {
    try {
        const danhmuchuyenId = req.params.id
        if (!danhmuchuyenId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmuchuyenId is required'
            })
        }
        const response = await DanhMucHuyenService.deleteDanhMucHuyen(danhmuchuyenId)
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
        const response = await DanhMucHuyenService.deleteManyDanhMucHuyen(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDanhMucHuyen = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DanhMucHuyenService.getAllDanhMucHuyen(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DanhMucHuyenService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDanhMucHuyen,
    updateDanhMucHuyen,
    getDetailsDanhMucHuyen,
    deleteDanhMucHuyen,
    getAllDanhMucHuyen,
    deleteMany,
    getAllType
}
