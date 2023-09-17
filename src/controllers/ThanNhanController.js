const ThanNhanService = require('../services/ThanNhanService')

const createThanNhan = async (req, res) => {
    try {
        const { ThanNhanId, QuanNhanId, LoaiQuanHe, HoTen, QueQuan, NamSinh, NgheNghiep, SoDienThoai, NoiCongTac, ChucVu, TrangThai, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ThanNhanService.createThanNhan(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateThanNhan = async (req, res) => {
    try {
        const thannhanId = req.params.id
        const data = req.body
        if (!thannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The thannhanId is required'
            })
        }
        const response = await ThanNhanService.updateThanNhan(thannhanId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getThanNhanByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await ThanNhanService.getThanNhanByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsThanNhan = async (req, res) => {
    try {
        const thannhanId = req.params.id
        if (!thannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The thannhanId is required'
            })
        }
        const response = await ThanNhanService.getDetailsThanNhan(thannhanId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteThanNhan = async (req, res) => {
    try {
        const thannhanId = req.params.id
        if (!thannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The thannhanId is required'
            })
        }
        const response = await ThanNhanService.deleteThanNhan(thannhanId)
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
        const response = await ThanNhanService.deleteManyThanNhan(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllThanNhan = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await ThanNhanService.getAllThanNhan(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await ThanNhanService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createThanNhan,
    updateThanNhan,
    getDetailsThanNhan,
    deleteThanNhan,
    getAllThanNhan,
    deleteMany,
    getAllType,
    getThanNhanByQuanNhanId,
}
