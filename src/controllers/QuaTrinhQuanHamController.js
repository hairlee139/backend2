const QuaTrinhQuanHamService = require('../services/QuaTrinhQuanHamService')

const createQuaTrinhQuanHam = async (req, res) => {
    try {
        const { code,QuanNhanId,QuyetDinh,NgayQuyetDinh,QuanHam,edituser,edittime,GhiChu} = req.body
        if ( !code || !QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await QuaTrinhQuanHamService.createQuaTrinhQuanHam(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateQuaTrinhQuanHam = async (req, res) => {
    try {
        const quatrinhquanhamId = req.params.id
        const data = req.body
        if (!quatrinhquanhamId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhquanhamId is required'
            })
        }
        const response = await QuaTrinhQuanHamService.updateQuaTrinhQuanHam(quatrinhquanhamId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getQuaTrinhQuanHamByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuaTrinhQuanHamService.getQuaTrinhQuanHamByQuanNhanId(quannhanId,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsQuaTrinhQuanHam = async (req, res) => {
    try {
        const quatrinhquanhamId = req.params.id
        if (!quatrinhquanhamId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhquanhamId is required'
            })
        }
        const response = await QuaTrinhQuanHamService.getDetailsQuaTrinhQuanHam(quatrinhquanhamId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteQuaTrinhQuanHam = async (req, res) => {
    try {
        const quatrinhquanhamId = req.params.id
        if (!quatrinhquanhamId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhquanhamId is required'
            })
        }
        const response = await QuaTrinhQuanHamService.deleteQuaTrinhQuanHam(quatrinhquanhamId)
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
        const response = await QuaTrinhQuanHamService.deleteManyQuaTrinhQuanHam(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllQuaTrinhQuanHam = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await QuaTrinhQuanHamService.getAllQuaTrinhQuanHam(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await QuaTrinhQuanHamService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createQuaTrinhQuanHam,
    updateQuaTrinhQuanHam,
    getDetailsQuaTrinhQuanHam,
    deleteQuaTrinhQuanHam,
    getAllQuaTrinhQuanHam,
    deleteMany,
    getAllType,
    getQuaTrinhQuanHamByQuanNhanId,
}
