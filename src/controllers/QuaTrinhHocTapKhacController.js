const QuaTrinhHocTapKhacService = require('../services/QuaTrinhHocTapKhacService')

const createQuaTrinhHocTapKhac = async (req, res) => {
    try {
        const { code, QuanNhanId, Ten, Loai, Truong, NamNhan, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId || !Ten || !Loai || !Truong || !NamNhan) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await QuaTrinhHocTapKhacService.createQuaTrinhHocTapKhac(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateQuaTrinhHocTapKhac = async (req, res) => {
    try {
        const quatrinhhoctapkhacId = req.params.id
        const data = req.body
        if (!quatrinhhoctapkhacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhhoctapkhacId is required'
            })
        }
        const response = await QuaTrinhHocTapKhacService.updateQuaTrinhHocTapKhac(quatrinhhoctapkhacId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getQuaTrinhHocTapKhacByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuaTrinhHocTapKhacService.getQuaTrinhHocTapKhacByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsQuaTrinhHocTapKhac = async (req, res) => {
    try {
        const quatrinhhoctapkhacId = req.params.id
        if (!quatrinhhoctapkhacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhhoctapkhacId is required'
            })
        }
        const response = await QuaTrinhHocTapKhacService.getDetailsQuaTrinhHocTapKhac(quatrinhhoctapkhacId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteQuaTrinhHocTapKhac = async (req, res) => {
    try {
        const quatrinhhoctapkhacId = req.params.id
        if (!quatrinhhoctapkhacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhhoctapkhacId is required'
            })
        }
        const response = await QuaTrinhHocTapKhacService.deleteQuaTrinhHocTapKhac(quatrinhhoctapkhacId)
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
        const response = await QuaTrinhHocTapKhacService.deleteManyQuaTrinhHocTapKhac(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllQuaTrinhHocTapKhac = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await QuaTrinhHocTapKhacService.getAllQuaTrinhHocTapKhac(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await QuaTrinhHocTapKhacService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createQuaTrinhHocTapKhac,
    updateQuaTrinhHocTapKhac,
    getDetailsQuaTrinhHocTapKhac,
    deleteQuaTrinhHocTapKhac,
    getAllQuaTrinhHocTapKhac,
    deleteMany,
    getAllType,
    getQuaTrinhHocTapKhacByQuanNhanId,
}
