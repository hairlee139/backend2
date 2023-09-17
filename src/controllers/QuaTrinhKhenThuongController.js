const QuaTrinhKhenThuongService = require('../services/QuaTrinhKhenThuongService')

const createQuaTrinhKhenThuong = async (req, res) => {
    try {
        const { QuaTrinhKhenThuongId, QuanNhanId, SoQuyetDinh, NgayQuyetDinh, TenQuyetDinh, LoaiKhenThuong, CapKhenThuong, TrangThai, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await QuaTrinhKhenThuongService.createQuaTrinhKhenThuong(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateQuaTrinhKhenThuong = async (req, res) => {
    try {
        const quatrinhkhenthuongId = req.params.id
        const data = req.body
        if (!quatrinhkhenthuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhkhenthuongId is required'
            })
        }
        const response = await QuaTrinhKhenThuongService.updateQuaTrinhKhenThuong(quatrinhkhenthuongId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getQuaTrinhKhenThuongByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuaTrinhKhenThuongService.getQuaTrinhKhenThuongByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsQuaTrinhKhenThuong = async (req, res) => {
    try {
        const quatrinhkhenthuongId = req.params.id
        if (!quatrinhkhenthuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhkhenthuongId is required'
            })
        }
        const response = await QuaTrinhKhenThuongService.getDetailsQuaTrinhKhenThuong(quatrinhkhenthuongId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteQuaTrinhKhenThuong = async (req, res) => {
    try {
        const quatrinhkhenthuongId = req.params.id
        if (!quatrinhkhenthuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhkhenthuongId is required'
            })
        }
        const response = await QuaTrinhKhenThuongService.deleteQuaTrinhKhenThuong(quatrinhkhenthuongId)
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
        const response = await QuaTrinhKhenThuongService.deleteManyQuaTrinhKhenThuong(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllQuaTrinhKhenThuong = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await QuaTrinhKhenThuongService.getAllQuaTrinhKhenThuong(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await QuaTrinhKhenThuongService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createQuaTrinhKhenThuong,
    updateQuaTrinhKhenThuong,
    getDetailsQuaTrinhKhenThuong,
    deleteQuaTrinhKhenThuong,
    getAllQuaTrinhKhenThuong,
    deleteMany,
    getAllType,
    getQuaTrinhKhenThuongByQuanNhanId,
}
