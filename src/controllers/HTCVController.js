const HTCVService = require('../services/HTCVService')

const createHTCV = async (req, res) => {
    try {
        const { HinhThucCV, QuanNhanId, HoTen, KhoiLuongCV, DonVi, SoTietCV, SoGioQuyDoi, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HTCVService.createHTCV(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHTCV = async (req, res) => {
    try {
        const htcvId = req.params.id
        const data = req.body
        if (!htcvId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvId is required'
            })
        }
        const response = await HTCVService.updateHTCV(htcvId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getHTCVByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await HTCVService.getHTCVByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsHTCV = async (req, res) => {
    try {
        const htcvId = req.params.id
        if (!htcvId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvId is required'
            })
        }
        const response = await HTCVService.getDetailsHTCV(htcvId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHTCV = async (req, res) => {
    try {
        const htcvId = req.params.id
        if (!htcvId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The htcvId is required'
            })
        }
        const response = await HTCVService.deleteHTCV(htcvId)
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
        const response = await HTCVService.deleteManyHTCV(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHTCV = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HTCVService.getAllHTCV(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HTCVService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createHTCV,
    updateHTCV,
    getDetailsHTCV,
    deleteHTCV,
    getAllHTCV,
    deleteMany,
    getAllType,
    getHTCVByQuanNhanId,
}
