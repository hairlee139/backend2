const HTCVDeTaiService = require('../services/HTCVDeTaiService')

const createHTCVDeTai = async (req, res) => {
    try {
        const { HinhThucCV, QuanNhanId, HoTen, DonVi, VaiTro, SoGioQuyDoi, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HTCVDeTaiService.createHTCVDeTai(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHTCVDeTai = async (req, res) => {
    try {
        const htcvdetaiId = req.params.id
        const data = req.body
        if (!htcvdetaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvdetaiId is required'
            })
        }
        const response = await HTCVDeTaiService.updateHTCVDeTai(htcvdetaiId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getHTCVDeTaiByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await HTCVDeTaiService.getHTCVDeTaiByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsHTCVDeTai = async (req, res) => {
    try {
        const htcvdetaiId = req.params.id
        if (!htcvdetaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvdetaiId is required'
            })
        }
        const response = await HTCVDeTaiService.getDetailsHTCVDeTai(htcvdetaiId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHTCVDeTai = async (req, res) => {
    try {
        const htcvdetaiId = req.params.id
        if (!htcvdetaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvdetaiId is required'
            })
        }
        const response = await HTCVDeTaiService.deleteHTCVDeTai(htcvdetaiId)
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
        const response = await HTCVDeTaiService.deleteManyHTCVDeTai(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHTCVDeTai = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HTCVDeTaiService.getAllHTCVDeTai(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HTCVDeTaiService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHTCVDeTai,
    updateHTCVDeTai,
    getDetailsHTCVDeTai,
    deleteHTCVDeTai,
    getAllHTCVDeTai,
    deleteMany,
    getAllType,
    getHTCVDeTaiByQuanNhanId,
}
