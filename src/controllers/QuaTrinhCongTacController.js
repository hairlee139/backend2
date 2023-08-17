const QuaTrinhCongTacService = require('../services/QuaTrinhCongTacService')

const createQuaTrinhCongTac = async (req, res) => {
    try {
        const { QuaTrinhCongTacId,QuanNhanId, SoQuyetDinh, NgayQuyetDinh,  ChucVu,  DonVi, KetThuc, DonViSinhHoatHocThuat,  TrangThai, edituser, edittime,GhiChu  } = req.body
        if ( !QuanNhanId || !ChucVu || !DonVi || !DonViSinhHoatHocThuat) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await QuaTrinhCongTacService.createQuaTrinhCongTac(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateQuaTrinhCongTac = async (req, res) => {
    try {
        const quatrinhcongtacId = req.params.id
        const data = req.body
        if (!quatrinhcongtacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhcongtacId is required'
            })
        }
        const response = await QuaTrinhCongTacService.updateQuaTrinhCongTac(quatrinhcongtacId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getQuaTrinhCongTacByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuaTrinhCongTacService.getQuaTrinhCongTacByQuanNhanId(quannhanId,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsQuaTrinhCongTac = async (req, res) => {
    try {
        const quatrinhcongtacId = req.params.id
        if (!quatrinhcongtacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhcongtacId is required'
            })
        }
        const response = await QuaTrinhCongTacService.getDetailsQuaTrinhCongTac(quatrinhcongtacId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteQuaTrinhCongTac = async (req, res) => {
    try {
        const quatrinhcongtacId = req.params.id
        if (!quatrinhcongtacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhcongtacId is required'
            })
        }
        const response = await QuaTrinhCongTacService.deleteQuaTrinhCongTac(quatrinhcongtacId)
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
        const response = await QuaTrinhCongTacService.deleteManyQuaTrinhCongTac(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllQuaTrinhCongTac = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await QuaTrinhCongTacService.getAllQuaTrinhCongTac(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await QuaTrinhCongTacService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createQuaTrinhCongTac,
    updateQuaTrinhCongTac,
    getDetailsQuaTrinhCongTac,
    deleteQuaTrinhCongTac,
    getAllQuaTrinhCongTac,
    deleteMany,
    getAllType,
    getQuaTrinhCongTacByQuanNhanId,
}
