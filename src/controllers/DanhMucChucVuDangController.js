const DanhMucChucVuDangService = require('../services/DanhMucChucVuDangService')

const createDanhMucChucVuDang = async (req, res) => {
    try {
        const { DanhMucChucVuDangId, TenDanhMucChucVuDang, HienThi, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!DanhMucChucVuDangId || !TenDanhMucChucVuDang) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DanhMucChucVuDangService.createDanhMucChucVuDang(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDanhMucChucVuDang = async (req, res) => {
    try {
        const danhmucchucvudangId = req.params.id
        const data = req.body
        if (!danhmucchucvudangId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'danhmucchucvuId is required'
            })
        }
        const response = await DanhMucChucVuDangService.updateDanhMucChucVuDang(danhmucchucvudangId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDanhMucChucVuDang = async (req, res) => {
    try {
        const danhmucchucvudangId = req.params.id
        if (!danhmucchucvudangId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmucchucvuId is required'
            })
        }
        const response = await DanhMucChucVuDangService.getDetailsDanhMucChucVuDang(danhmucchucvudangId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDanhMucChucVuDang = async (req, res) => {
    try {
        const danhmucchucvudangId = req.params.id
        if (!danhmucchucvudangId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The danhmucchucvuId is required'
            })
        }
        const response = await DanhMucChucVuDangService.deleteDanhMucChucVuDang(danhmucchucvudangId)
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
        const response = await DanhMucChucVuDangService.deleteManyDanhMucChucVuDang(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDanhMucChucVuDang = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DanhMucChucVuDangService.getAllDanhMucChucVuDang(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DanhMucChucVuDangService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDanhMucChucVuDang,
    updateDanhMucChucVuDang,
    getDetailsDanhMucChucVuDang,
    deleteDanhMucChucVuDang,
    getAllDanhMucChucVuDang,
    deleteMany,
    getAllType
}
