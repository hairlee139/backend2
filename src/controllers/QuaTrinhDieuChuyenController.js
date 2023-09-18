const DieuChuyenCanBoService = require('../services/QuaTrinhDieuChuyenService')

const createDieuChuyenCanBo = async (req, res) => {
    try {
        const { DieuChuyenCanBoId, QuanNhanId, SoQuyetDinh, NgayQuyetDinh, DonViQuyetDinh, ChucVuHienTai, DonViHienTai, DonViDen, ChucVuDen, NgayDenNhanChuc, TrangThai, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DieuChuyenCanBoService.createDieuChuyenCanBo(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDieuChuyenCanBo = async (req, res) => {
    try {
        const quatrinhdieuchuyenId = req.params.id
        const data = req.body
        if (!quatrinhdieuchuyenId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhdieuchuyenId is required'
            })
        }
        const response = await DieuChuyenCanBoService.updateDieuChuyenCanBo(quatrinhdieuchuyenId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getDieuChuyenCanBoByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await DieuChuyenCanBoService.getDieuChuyenCanBoByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsDieuChuyenCanBo = async (req, res) => {
    try {
        const quatrinhdieuchuyenId = req.params.id
        if (!quatrinhdieuchuyenId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhdieuchuyenId is required'
            })
        }
        const response = await DieuChuyenCanBoService.getDetailsDieuChuyenCanBo(quatrinhdieuchuyenId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDieuChuyenCanBo = async (req, res) => {
    try {
        const quatrinhdieuchuyenId = req.params.id
        if (!quatrinhdieuchuyenId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhdieuchuyenId is required'
            })
        }
        const response = await DieuChuyenCanBoService.deleteDieuChuyenCanBo(quatrinhdieuchuyenId)
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
        const response = await DieuChuyenCanBoService.deleteManyDieuChuyenCanBo(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDieuChuyenCanBo = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DieuChuyenCanBoService.getAllDieuChuyenCanBo(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DieuChuyenCanBoService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createDieuChuyenCanBo,
    updateDieuChuyenCanBo,
    getDetailsDieuChuyenCanBo,
    deleteDieuChuyenCanBo,
    getAllDieuChuyenCanBo,
    deleteMany,
    getAllType,
    getDieuChuyenCanBoByQuanNhanId,
}
