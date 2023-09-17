const GiaiThuongService = require('../services/GiaiThuongService')

const createGiaiThuong = async (req, res) => {
    try {
        const { GiaiThuongId, QuanNhanId, LoaiGiaiThuong, TenGiaiThuong, TenCongTrinh, NgayGiaiThuong, SoTacGia, CacTacGia, Quy, Nam, Tai, FileCM, TrangThai, CacHTCV, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await GiaiThuongService.createGiaiThuong(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateGiaiThuong = async (req, res) => {
    try {
        const giaithuongId = req.params.id
        const data = req.body
        if (!giaithuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The giaithuongId is required'
            })
        }
        const response = await GiaiThuongService.updateGiaiThuong(giaithuongId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getGiaiThuongByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await GiaiThuongService.getGiaiThuongByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsGiaiThuong = async (req, res) => {
    try {
        const giaithuongId = req.params.id
        if (!giaithuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The giaithuongId is required'
            })
        }
        const response = await GiaiThuongService.getDetailsGiaiThuong(giaithuongId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteGiaiThuong = async (req, res) => {
    try {
        const giaithuongId = req.params.id
        if (!giaithuongId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The giaithuongId is required'
            })
        }
        const response = await GiaiThuongService.deleteGiaiThuong(giaithuongId)
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
        const response = await GiaiThuongService.deleteManyGiaiThuong(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllGiaiThuong = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await GiaiThuongService.getAllGiaiThuong(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await GiaiThuongService.getAllType()
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

        const response = await GiaiThuongService.updateHTCVLists(
            id,
            HTCVList
        );

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
module.exports = {
    createGiaiThuong,
    updateGiaiThuong,
    getDetailsGiaiThuong,
    deleteGiaiThuong,
    getAllGiaiThuong,
    deleteMany,
    getAllType,
    getGiaiThuongByQuanNhanId,
    updateHTCVLists
}
