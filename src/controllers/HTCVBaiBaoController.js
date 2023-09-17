const HTCVBaiBaoService = require('../services/HTCVBaiBaoService')

const createHTCVBaiBao = async (req, res) => {
    try {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, SoGioQuyDoi, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HTCVBaiBaoService.createHTCVBaiBao(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHTCVBaiBao = async (req, res) => {
    try {
        const htcvbaibaoId = req.params.id
        const data = req.body
        if (!htcvbaibaoId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvbaibaoId is required'
            })
        }
        const response = await HTCVBaiBaoService.updateHTCVBaiBao(htcvbaibaoId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getHTCVBaiBaoByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await HTCVBaiBaoService.getHTCVBaiBaoByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsHTCVBaiBao = async (req, res) => {
    try {
        const htcvbaibaoId = req.params.id
        if (!htcvbaibaoId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvbaibaoId is required'
            })
        }
        const response = await HTCVBaiBaoService.getDetailsHTCVBaiBao(htcvbaibaoId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHTCVBaiBao = async (req, res) => {
    try {
        const htcvbaibaoId = req.params.id
        if (!htcvbaibaoId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvbaibaoId is required'
            })
        }
        const response = await HTCVBaiBaoService.deleteHTCVBaiBao(htcvbaibaoId)
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
        const response = await HTCVBaiBaoService.deleteManyHTCVBaiBao(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHTCVBaiBao = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HTCVBaiBaoService.getAllHTCVBaiBao(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HTCVBaiBaoService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHTCVBaiBao,
    updateHTCVBaiBao,
    getDetailsHTCVBaiBao,
    deleteHTCVBaiBao,
    getAllHTCVBaiBao,
    deleteMany,
    getAllType,
    getHTCVBaiBaoByQuanNhanId,
}
