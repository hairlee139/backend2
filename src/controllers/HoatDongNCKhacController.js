const HoatDongNCKhacService = require('../services/HoatDongNCKhacService')

const createHoatDongNCKhac = async (req, res) => {
    try {
        const { HoatDongKhacId, QuanNhanId, NhomNghienCuu, LoaiHoatDong, NoiDungThucHien, MoTaThem, ThoiDiemThucHien, Quy, Nam, SoLuongTacGia, FileCM, Tai, TrangThai, CacHTCV, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HoatDongNCKhacService.createHoatDongNCKhac(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateHoatDongNCKhac = async (req, res) => {
    try {
        const hoatdongnckhkhacId = req.params.id
        const data = req.body
        if (!hoatdongnckhkhacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hoatdongnckhkhacId is required'
            })
        }
        const response = await HoatDongNCKhacService.updateHoatDongNCKhac(hoatdongnckhkhacId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getHoatDongNCKhacByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await HoatDongNCKhacService.getHoatDongNCKhacByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsHoatDongNCKhac = async (req, res) => {
    try {
        const hoatdongnckhkhacId = req.params.id
        if (!hoatdongnckhkhacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hoatdongnckhkhacId is required'
            })
        }
        const response = await HoatDongNCKhacService.getDetailsHoatDongNCKhac(hoatdongnckhkhacId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHoatDongNCKhac = async (req, res) => {
    try {
        const hoatdongnckhkhacId = req.params.id
        if (!hoatdongnckhkhacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hoatdongnckhkhacId is required'
            })
        }
        const response = await HoatDongNCKhacService.deleteHoatDongNCKhac(hoatdongnckhkhacId)
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
        const response = await HoatDongNCKhacService.deleteManyHoatDongNCKhac(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHoatDongNCKhac = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HoatDongNCKhacService.getAllHoatDongNCKhac(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HoatDongNCKhacService.getAllType()
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

        const response = await HoatDongNCKhacService.updateHTCVLists(
            id,
            HTCVList
        );

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
module.exports = {
    createHoatDongNCKhac,
    updateHoatDongNCKhac,
    getDetailsHoatDongNCKhac,
    deleteHoatDongNCKhac,
    getAllHoatDongNCKhac,
    deleteMany,
    getAllType,
    getHoatDongNCKhacByQuanNhanId,
    updateHTCVLists
}
