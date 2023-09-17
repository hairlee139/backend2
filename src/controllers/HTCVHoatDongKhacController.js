const HTCVHoatDongKhacService = require('../services/HTCVHoatDongKhacService')

const createHTCVHoatDongKhac = async (req, res) => {
    try {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HTCVHoatDongKhacService.createHTCVHoatDongKhac(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHTCVHoatDongKhac = async (req, res) => {
    try {
        const htcvhoatdongkhacId = req.params.id
        const data = req.body
        if (!htcvhoatdongkhacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvhoatdongkhacId is required'
            })
        }
        const response = await HTCVHoatDongKhacService.updateHTCVHoatDongKhac(htcvhoatdongkhacId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getHTCVHoatDongKhacByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await HTCVHoatDongKhacService.getHTCVHoatDongKhacByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsHTCVHoatDongKhac = async (req, res) => {
    try {
        const htcvhoatdongkhacId = req.params.id
        if (!htcvhoatdongkhacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvhoatdongkhacId is required'
            })
        }
        const response = await HTCVHoatDongKhacService.getDetailsHTCVHoatDongKhac(htcvhoatdongkhacId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHTCVHoatDongKhac = async (req, res) => {
    try {
        const htcvhoatdongkhacId = req.params.id
        if (!htcvhoatdongkhacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvhoatdongkhacId is required'
            })
        }
        const response = await HTCVHoatDongKhacService.deleteHTCVHoatDongKhac(htcvhoatdongkhacId)
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
        const response = await HTCVHoatDongKhacService.deleteManyHTCVHoatDongKhac(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHTCVHoatDongKhac = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HTCVHoatDongKhacService.getAllHTCVHoatDongKhac(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HTCVHoatDongKhacService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHTCVHoatDongKhac,
    updateHTCVHoatDongKhac,
    getDetailsHTCVHoatDongKhac,
    deleteHTCVHoatDongKhac,
    getAllHTCVHoatDongKhac,
    deleteMany,
    getAllType,
    getHTCVHoatDongKhacByQuanNhanId,
}
