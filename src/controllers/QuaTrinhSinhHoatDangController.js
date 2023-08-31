const QuaTrinhSinhHoatDangService = require('../services/QuaTrinhSinhHoatDangService')

const createQuaTrinhSinhHoatDang = async (req, res) => {
    try {
        const { code,QuanNhanId,QuyetDinh,NgayQuyetDinh,ChucVu,DonVi,KetThuc,TrangThai,edituser,edittime,GhiChu} = req.body
        if ( !code || !QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await QuaTrinhSinhHoatDangService.createQuaTrinhSinhHoatDang(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateQuaTrinhSinhHoatDang = async (req, res) => {
    try {
        const quatrinhsinhhoatdangId = req.params.id
        const data = req.body
        if (!quatrinhsinhhoatdangId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhsinhhoatdangId is required'
            })
        }
        const response = await QuaTrinhSinhHoatDangService.updateQuaTrinhSinhHoatDang(quatrinhsinhhoatdangId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getQuaTrinhSinhHoatDangByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await QuaTrinhSinhHoatDangService.getQuaTrinhSinhHoatDangByQuanNhanId(quannhanId,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsQuaTrinhSinhHoatDang = async (req, res) => {
    try {
        const quatrinhsinhhoatdangId = req.params.id
        if (!quatrinhsinhhoatdangId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhsinhhoatdangId is required'
            })
        }
        const response = await QuaTrinhSinhHoatDangService.getDetailsQuaTrinhSinhHoatDang(quatrinhsinhhoatdangId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteQuaTrinhSinhHoatDang = async (req, res) => {
    try {
        const quatrinhsinhhoatdangId = req.params.id
        if (!quatrinhsinhhoatdangId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The quatrinhsinhhoatdangId is required'
            })
        }
        const response = await QuaTrinhSinhHoatDangService.deleteQuaTrinhSinhHoatDang(quatrinhsinhhoatdangId)
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
        const response = await QuaTrinhSinhHoatDangService.deleteManyQuaTrinhSinhHoatDang(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllQuaTrinhSinhHoatDang = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await QuaTrinhSinhHoatDangService.getAllQuaTrinhSinhHoatDang(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await QuaTrinhSinhHoatDangService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createQuaTrinhSinhHoatDang,
    updateQuaTrinhSinhHoatDang,
    getDetailsQuaTrinhSinhHoatDang,
    deleteQuaTrinhSinhHoatDang,
    getAllQuaTrinhSinhHoatDang,
    deleteMany,
    getAllType,
    getQuaTrinhSinhHoatDangByQuanNhanId,
}
