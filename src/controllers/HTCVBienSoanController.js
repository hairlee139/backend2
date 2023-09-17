const HTCVBienSoanService = require('../services/HTCVBienSoanService')

const createHTCVBienSoan = async (req, res) => {
    try {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, Trang, SoGioQuyDoi, VaiTro, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HTCVBienSoanService.createHTCVBienSoan(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHTCVBienSoan = async (req, res) => {
    try {
        const htcvbiensoanId = req.params.id
        const data = req.body
        if (!htcvbiensoanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvbiensoanId is required'
            })
        }
        const response = await HTCVBienSoanService.updateHTCVBienSoan(htcvbiensoanId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getHTCVBienSoanByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await HTCVBienSoanService.getHTCVBienSoanByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsHTCVBienSoan = async (req, res) => {
    try {
        const htcvbiensoanId = req.params.id
        if (!htcvbiensoanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvbiensoanId is required'
            })
        }
        const response = await HTCVBienSoanService.getDetailsHTCVBienSoan(htcvbiensoanId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHTCVBienSoan = async (req, res) => {
    try {
        const htcvbiensoanId = req.params.id
        if (!htcvbiensoanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvbiensoanId is required'
            })
        }
        const response = await HTCVBienSoanService.deleteHTCVBienSoan(htcvbiensoanId)
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
        const response = await HTCVBienSoanService.deleteManyHTCVBienSoan(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHTCVBienSoan = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HTCVBienSoanService.getAllHTCVBienSoan(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HTCVBienSoanService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHTCVBienSoan,
    updateHTCVBienSoan,
    getDetailsHTCVBienSoan,
    deleteHTCVBienSoan,
    getAllHTCVBienSoan,
    deleteMany,
    getAllType,
    getHTCVBienSoanByQuanNhanId,
}
