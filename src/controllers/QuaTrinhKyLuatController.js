const QuaTrinhKyLuatService = require('../services/QuaTrinhKyLuatService')

const createQuaTrinhKyLuat = async (req, res) => {
    try {
        const { QuaTrinhKyLuatId, QuanNhanId, SoQuyetDinh, NgayQuyetDinh, TenQuyetDinh, CapKyLuat, HinhThucKyLuat, TrangThai, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await QuaTrinhKyLuatService.createQuaTrinhKyLuat(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateQuaTrinhKyLuat = async (req, res) => {
    try {
        const quatrinhkyluatId = req.params.id
        const data = req.body
        if (!quatrinhkyluatId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhkyluatId is required'
            })
        }
        const response = await QuaTrinhKyLuatService.updateQuaTrinhKyLuat(quatrinhkyluatId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getQuaTrinhKyLuatByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuaTrinhKyLuatService.getQuaTrinhKyLuatByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsQuaTrinhKyLuat = async (req, res) => {
    try {
        const quatrinhkyluatId = req.params.id
        if (!quatrinhkyluatId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhkyluatId is required'
            })
        }
        const response = await QuaTrinhKyLuatService.getDetailsQuaTrinhKyLuat(quatrinhkyluatId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteQuaTrinhKyLuat = async (req, res) => {
    try {
        const quatrinhkyluatId = req.params.id
        if (!quatrinhkyluatId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhkyluatId is required'
            })
        }
        const response = await QuaTrinhKyLuatService.deleteQuaTrinhKyLuat(quatrinhkyluatId)
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
        const response = await QuaTrinhKyLuatService.deleteManyQuaTrinhKyLuat(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllQuaTrinhKyLuat = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await QuaTrinhKyLuatService.getAllQuaTrinhKyLuat(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await QuaTrinhKyLuatService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createQuaTrinhKyLuat,
    updateQuaTrinhKyLuat,
    getDetailsQuaTrinhKyLuat,
    deleteQuaTrinhKyLuat,
    getAllQuaTrinhKyLuat,
    deleteMany,
    getAllType,
    getQuaTrinhKyLuatByQuanNhanId,
}
