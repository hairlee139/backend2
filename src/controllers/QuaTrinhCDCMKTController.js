const QuaTrinhCDCMKTService = require('../services/QuaTrinhCDCMKTService')

const createQuaTrinhCDCMKT = async (req, res) => {
    try {
        const { code, QuanNhanId, QuyetDinh, NgayQuyetDinh, CDCMKT, CaoNhat, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await QuaTrinhCDCMKTService.createQuaTrinhCDCMKT(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateQuaTrinhCDCMKT = async (req, res) => {
    try {
        const quatrinhCDCMKTId = req.params.id
        const data = req.body
        if (!quatrinhCDCMKTId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhCDCMKTId is required'
            })
        }
        const response = await QuaTrinhCDCMKTService.updateQuaTrinhCDCMKT(quatrinhCDCMKTId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getQuaTrinhCDCMKTByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuaTrinhCDCMKTService.getQuaTrinhCDCMKTByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsQuaTrinhCDCMKT = async (req, res) => {
    try {
        const quatrinhCDCMKTId = req.params.id
        if (!quatrinhCDCMKTId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhCDCMKTId is required'
            })
        }
        const response = await QuaTrinhCDCMKTService.getDetailsQuaTrinhCDCMKT(quatrinhCDCMKTId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteQuaTrinhCDCMKT = async (req, res) => {
    try {
        const quatrinhCDCMKTId = req.params.id
        if (!quatrinhCDCMKTId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhCDCMKTId is required'
            })
        }
        const response = await QuaTrinhCDCMKTService.deleteQuaTrinhCDCMKT(quatrinhCDCMKTId)
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
        const response = await QuaTrinhCDCMKTService.deleteManyQuaTrinhCDCMKT(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllQuaTrinhCDCMKT = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await QuaTrinhCDCMKTService.getAllQuaTrinhCDCMKT(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await QuaTrinhCDCMKTService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createQuaTrinhCDCMKT,
    updateQuaTrinhCDCMKT,
    getDetailsQuaTrinhCDCMKT,
    deleteQuaTrinhCDCMKT,
    getAllQuaTrinhCDCMKT,
    deleteMany,
    getAllType,
    getQuaTrinhCDCMKTByQuanNhanId,
}
