const QuaTrinhHocViService = require('../services/QuaTrinhHocViService')

const createQuaTrinhHocVi = async (req, res) => {
    try {
        const { code, QuanNhanId, QuyetDinh, NgayQuyetDinh, HocVi, CaoNhat, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await QuaTrinhHocViService.createQuaTrinhHocVi(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateQuaTrinhHocVi = async (req, res) => {
    try {
        const quatrinhHocViId = req.params.id
        const data = req.body
        if (!quatrinhHocViId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhHocViId is required'
            })
        }
        const response = await QuaTrinhHocViService.updateQuaTrinhHocVi(quatrinhHocViId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getQuaTrinhHocViByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuaTrinhHocViService.getQuaTrinhHocViByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsQuaTrinhHocVi = async (req, res) => {
    try {
        const quatrinhHocViId = req.params.id
        if (!quatrinhHocViId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhHocViId is required'
            })
        }
        const response = await QuaTrinhHocViService.getDetailsQuaTrinhHocVi(quatrinhHocViId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteQuaTrinhHocVi = async (req, res) => {
    try {
        const quatrinhHocViId = req.params.id
        if (!quatrinhHocViId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhHocViId is required'
            })
        }
        const response = await QuaTrinhHocViService.deleteQuaTrinhHocVi(quatrinhHocViId)
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
        const response = await QuaTrinhHocViService.deleteManyQuaTrinhHocVi(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllQuaTrinhHocVi = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await QuaTrinhHocViService.getAllQuaTrinhHocVi(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await QuaTrinhHocViService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createQuaTrinhHocVi,
    updateQuaTrinhHocVi,
    getDetailsQuaTrinhHocVi,
    deleteQuaTrinhHocVi,
    getAllQuaTrinhHocVi,
    deleteMany,
    getAllType,
    getQuaTrinhHocViByQuanNhanId,
}
