const NhomQuyenService = require('../services/NhomQuyenService')

const createNhomQuyen = async (req, res) => {
    try {
        const { NhomQuyenId, TenNhomQuyen,HienThi,Quyen, GhiChu } = req.body
        if (!NhomQuyenId || !TenNhomQuyen || !Quyen) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await NhomQuyenService.createNhomQuyen(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateNhomQuyen = async (req, res) => {
    try {
        const nhomquyenId = req.params.id
        const data = req.body
        if (!nhomquyenId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'nhomquyenId is required'
            })
        }
        const response = await NhomQuyenService.updateNhomQuyen(nhomquyenId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsNhomQuyen = async (req, res) => {
    try {
        const nhomquyenId = req.params.id
        if (!nhomquyenId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The nhomquyenId is required'
            })
        }
        const response = await NhomQuyenService.getDetailsNhomQuyen(nhomquyenId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteNhomQuyen = async (req, res) => {
    try {
        const nhomquyenId = req.params.id
        if (!nhomquyenId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The nhomquyenId is required'
            })
        }
        const response = await NhomQuyenService.deleteNhomQuyen(nhomquyenId)
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
        const response = await NhomQuyenService.deleteManyNhomQuyen(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllNhomQuyen = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await NhomQuyenService.getAllNhomQuyen(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await NhomQuyenService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createNhomQuyen,
    updateNhomQuyen,
    getDetailsNhomQuyen,
    deleteNhomQuyen,
    getAllNhomQuyen,
    deleteMany,
    getAllType
}
