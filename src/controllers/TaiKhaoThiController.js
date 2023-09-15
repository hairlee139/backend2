const TaiKhaoThiService = require('../services/TaiKhaoThiService')

const createTaiKhaoThi = async (req, res) => {
    try {
        const { TaiKhaoThiId, QuanNhanId, ThoiDiem, Quy, Nam, HocKy, HinhThucKhaoThi, MaLopHocPhan, MonHoc, KhoiLuongCongViec, FileCM, SoGioQuyDoi, TrangThai, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await TaiKhaoThiService.createTaiKhaoThi(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateTaiKhaoThi = async (req, res) => {
    try {
        const taikhaothiId = req.params.id
        const data = req.body
        if (!taikhaothiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taikhaothiId is required'
            })
        }
        const response = await TaiKhaoThiService.updateTaiKhaoThi(taikhaothiId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getTaiKhaoThiByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await TaiKhaoThiService.getTaiKhaoThiByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsTaiKhaoThi = async (req, res) => {
    try {
        const taikhaothiId = req.params.id
        if (!taikhaothiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taikhaothiId is required'
            })
        }
        const response = await TaiKhaoThiService.getDetailsTaiKhaoThi(taikhaothiId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteTaiKhaoThi = async (req, res) => {
    try {
        const taikhaothiId = req.params.id
        if (!taikhaothiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taikhaothiId is required'
            })
        }
        const response = await TaiKhaoThiService.deleteTaiKhaoThi(taikhaothiId)
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
        const response = await TaiKhaoThiService.deleteManyTaiKhaoThi(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllTaiKhaoThi = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await TaiKhaoThiService.getAllTaiKhaoThi(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await TaiKhaoThiService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createTaiKhaoThi,
    updateTaiKhaoThi,
    getDetailsTaiKhaoThi,
    deleteTaiKhaoThi,
    getAllTaiKhaoThi,
    deleteMany,
    getAllType,
    getTaiKhaoThiByQuanNhanId,
}
