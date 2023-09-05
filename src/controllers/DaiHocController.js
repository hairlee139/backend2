const DaiHocService = require('../services/DaiHocService')

const createDaiHoc = async (req, res) => {
    try {
        const { code, QuanNhanId, He, Nganh, Truong, QuocGia, NamNhan, TrangThai, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DaiHocService.createDaiHoc(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDaiHoc = async (req, res) => {
    try {
        const daihocId = req.params.id
        const data = req.body
        if (!daihocId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The daihocId is required'
            })
        }
        const response = await DaiHocService.updateDaiHoc(daihocId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getDaiHocByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await DaiHocService.getDaiHocByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsDaiHoc = async (req, res) => {
    try {
        const daihocId = req.params.id
        if (!daihocId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The daihocId is required'
            })
        }
        const response = await DaiHocService.getDetailsDaiHoc(daihocId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDaiHoc = async (req, res) => {
    try {
        const daihocId = req.params.id
        if (!daihocId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The daihocId is required'
            })
        }
        const response = await DaiHocService.deleteDaiHoc(daihocId)
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
        const response = await DaiHocService.deleteManyDaiHoc(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDaiHoc = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DaiHocService.getAllDaiHoc(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DaiHocService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDaiHoc,
    updateDaiHoc,
    getDetailsDaiHoc,
    deleteDaiHoc,
    getAllDaiHoc,
    deleteMany,
    getAllType,
    getDaiHocByQuanNhanId,
}
