const PhanLoaiKetQuaService = require('../services/PhanLoaiKetQuaHDNCKHService')

const createPhanLoaiKetQua = async (req, res) => {
    try {
        const { PhanLoaiKetQuaId, TenPhanLoaiKetQua, GhiChu, edituser, edittime, lock, lockdate } = req.body
        if (!PhanLoaiKetQuaId || !TenPhanLoaiKetQua) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await PhanLoaiKetQuaService.createPhanLoaiKetQua(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updatePhanLoaiKetQua = async (req, res) => {
    try {
        const phanloaiketquaId = req.params.id
        const data = req.body
        if (!phanloaiketquaId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'phanloaiketquaId is required'
            })
        }
        const response = await PhanLoaiKetQuaService.updatePhanLoaiKetQua(phanloaiketquaId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsPhanLoaiKetQua = async (req, res) => {
    try {
        const phanloaiketquaId = req.params.id
        if (!phanloaiketquaId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The phanloaiketquaId is required'
            })
        }
        const response = await PhanLoaiKetQuaService.getDetailsPhanLoaiKetQua(phanloaiketquaId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deletePhanLoaiKetQua = async (req, res) => {
    try {
        const phanloaiketquaId = req.params.id
        if (!phanloaiketquaId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The phanloaiketquaId is required'
            })
        }
        const response = await PhanLoaiKetQuaService.deletePhanLoaiKetQua(phanloaiketquaId)
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
        const response = await PhanLoaiKetQuaService.deleteManyPhanLoaiKetQua(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllPhanLoaiKetQua = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await PhanLoaiKetQuaService.getAllPhanLoaiKetQua(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await PhanLoaiKetQuaService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createPhanLoaiKetQua,
    updatePhanLoaiKetQua,
    getDetailsPhanLoaiKetQua,
    deletePhanLoaiKetQua,
    getAllPhanLoaiKetQua,
    deleteMany,
    getAllType
}
