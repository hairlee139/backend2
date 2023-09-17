const HTCVGiaiThuongService = require('../services/HTCVGiaiThuongService')

const createHTCVGiaiThuong = async (req, res) => {
    try {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HTCVGiaiThuongService.createHTCVGiaiThuong(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHTCVGiaiThuong = async (req, res) => {
    try {
        const htcvgiaithuongId = req.params.id
        const data = req.body
        if (!htcvgiaithuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvgiaithuongId is required'
            })
        }
        const response = await HTCVGiaiThuongService.updateHTCVGiaiThuong(htcvgiaithuongId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getHTCVGiaiThuongByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await HTCVGiaiThuongService.getHTCVGiaiThuongByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsHTCVGiaiThuong = async (req, res) => {
    try {
        const htcvgiaithuongId = req.params.id
        if (!htcvgiaithuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvgiaithuongId is required'
            })
        }
        const response = await HTCVGiaiThuongService.getDetailsHTCVGiaiThuong(htcvgiaithuongId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHTCVGiaiThuong = async (req, res) => {
    try {
        const htcvgiaithuongId = req.params.id
        if (!htcvgiaithuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvgiaithuongId is required'
            })
        }
        const response = await HTCVGiaiThuongService.deleteHTCVGiaiThuong(htcvgiaithuongId)
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
        const response = await HTCVGiaiThuongService.deleteManyHTCVGiaiThuong(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHTCVGiaiThuong = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HTCVGiaiThuongService.getAllHTCVGiaiThuong(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HTCVGiaiThuongService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHTCVGiaiThuong,
    updateHTCVGiaiThuong,
    getDetailsHTCVGiaiThuong,
    deleteHTCVGiaiThuong,
    getAllHTCVGiaiThuong,
    deleteMany,
    getAllType,
    getHTCVGiaiThuongByQuanNhanId,
}
