const QuaTrinhHocHamService = require('../services/QuaTrinhHocHamService')

const createQuaTrinhHocHam = async (req, res) => {
    try {
        const { code, QuanNhanId, QuyetDinh, NgayQuyetDinh, HocHam, CaoNhat, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await QuaTrinhHocHamService.createQuaTrinhHocHam(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateQuaTrinhHocHam = async (req, res) => {
    try {
        const quatrinhHocHamId = req.params.id
        const data = req.body
        if (!quatrinhHocHamId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhHocHamId is required'
            })
        }
        const response = await QuaTrinhHocHamService.updateQuaTrinhHocHam(quatrinhHocHamId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getQuaTrinhHocHamByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuaTrinhHocHamService.getQuaTrinhHocHamByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsQuaTrinhHocHam = async (req, res) => {
    try {
        const quatrinhHocHamId = req.params.id
        if (!quatrinhHocHamId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhHocHamId is required'
            })
        }
        const response = await QuaTrinhHocHamService.getDetailsQuaTrinhHocHam(quatrinhHocHamId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteQuaTrinhHocHam = async (req, res) => {
    try {
        const quatrinhHocHamId = req.params.id
        if (!quatrinhHocHamId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhHocHamId is required'
            })
        }
        const response = await QuaTrinhHocHamService.deleteQuaTrinhHocHam(quatrinhHocHamId)
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
        const response = await QuaTrinhHocHamService.deleteManyQuaTrinhHocHam(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllQuaTrinhHocHam = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await QuaTrinhHocHamService.getAllQuaTrinhHocHam(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await QuaTrinhHocHamService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createQuaTrinhHocHam,
    updateQuaTrinhHocHam,
    getDetailsQuaTrinhHocHam,
    deleteQuaTrinhHocHam,
    getAllQuaTrinhHocHam,
    deleteMany,
    getAllType,
    getQuaTrinhHocHamByQuanNhanId,
}
