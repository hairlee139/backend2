const HTCVSangCheService = require('../services/HTCVSangCheService')

const createHTCVSangChe = async (req, res) => {
    try {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HTCVSangCheService.createHTCVSangChe(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHTCVSangChe = async (req, res) => {
    try {
        const htcvsangcheId = req.params.id
        const data = req.body
        if (!htcvsangcheId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvsangcheId is required'
            })
        }
        const response = await HTCVSangCheService.updateHTCVSangChe(htcvsangcheId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getHTCVSangCheByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await HTCVSangCheService.getHTCVSangCheByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsHTCVSangChe = async (req, res) => {
    try {
        const htcvsangcheId = req.params.id
        if (!htcvsangcheId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvsangcheId is required'
            })
        }
        const response = await HTCVSangCheService.getDetailsHTCVSangChe(htcvsangcheId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHTCVSangChe = async (req, res) => {
    try {
        const htcvsangcheId = req.params.id
        if (!htcvsangcheId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvsangcheId is required'
            })
        }
        const response = await HTCVSangCheService.deleteHTCVSangChe(htcvsangcheId)
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
        const response = await HTCVSangCheService.deleteManyHTCVSangChe(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHTCVSangChe = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HTCVSangCheService.getAllHTCVSangChe(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HTCVSangCheService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHTCVSangChe,
    updateHTCVSangChe,
    getDetailsHTCVSangChe,
    deleteHTCVSangChe,
    getAllHTCVSangChe,
    deleteMany,
    getAllType,
    getHTCVSangCheByQuanNhanId,
}
