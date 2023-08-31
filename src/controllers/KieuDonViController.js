const KieuDonViService = require('../services/KieuDonViService')

const createKieuDonVi = async (req, res) => {
    try {
        const { code, codeview, name, currentgrade, lowergrade,position, note, edituser, edittime, lock, lockdate } = req.body
        if (!code || !currentgrade || !lowergrade) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await KieuDonViService.createKieuDonVi(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateKieuDonVi = async (req, res) => {
    try {
        const kieudonviId = req.params.id
        const data = req.body
        if (!kieudonviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'kieudonviId is required'
            })
        }
        const response = await KieuDonViService.updateKieuDonVi(kieudonviId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsKieuDonVi = async (req, res) => {
    try {
        const kieudonviId = req.params.id
        if (!kieudonviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The kieudonviId is required'
            })
        }
        const response = await KieuDonViService.getDetailsKieuDonVi(kieudonviId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteKieuDonVi = async (req, res) => {
    try {
        const kieudonviId = req.params.id
        if (!kieudonviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The kieudonviId is required'
            })
        }
        const response = await KieuDonViService.deleteKieuDonVi(kieudonviId)
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
        const response = await KieuDonViService.deleteManyKieuDonVi(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllKieuDonVi = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await KieuDonViService.getAllKieuDonVi(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await KieuDonViService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createKieuDonVi,
    updateKieuDonVi,
    getDetailsKieuDonVi,
    deleteKieuDonVi,
    getAllKieuDonVi,
    deleteMany,
    getAllType
}
