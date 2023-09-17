const HopDongService = require('../services/HopDongService')

const createHopDong = async (req, res) => {
    try {
        const { HopDongId, QuanNhanId, TenHopDong, BenA, DonViChuTri, GiaTriHopDong, ThoiDiemKetThuc, ThoiDiemBatDau, NguoiChuTri, SoThanhVien, CacThanhVien, NgayThanhLy, Tai, FileCM, TrangThai, CacHTCV, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HopDongService.createHopDong(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHopDong = async (req, res) => {
    try {
        const hopdongId = req.params.id
        const data = req.body
        if (!hopdongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hopdongId is required'
            })
        }
        const response = await HopDongService.updateHopDong(hopdongId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getHopDongByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await HopDongService.getHopDongByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsHopDong = async (req, res) => {
    try {
        const hopdongId = req.params.id
        if (!hopdongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hopdongId is required'
            })
        }
        const response = await HopDongService.getDetailsHopDong(hopdongId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHopDong = async (req, res) => {
    try {
        const hopdongId = req.params.id
        if (!hopdongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hopdongId is required'
            })
        }
        const response = await HopDongService.deleteHopDong(hopdongId)
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
        const response = await HopDongService.deleteManyHopDong(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHopDong = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HopDongService.getAllHopDong(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HopDongService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const updateHTCVLists = async (req, res) => {
    try {
        const id = req.params.id;
        const { HTCVList } = req.body;

        const response = await HopDongService.updateHTCVLists(
            id,
            HTCVList
        );

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
module.exports = {
    createHopDong,
    updateHopDong,
    getDetailsHopDong,
    deleteHopDong,
    getAllHopDong,
    deleteMany,
    getAllType,
    getHopDongByQuanNhanId,
    updateHTCVLists
}
