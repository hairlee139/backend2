const BienSoanService = require('../services/BienSoanService')

const createBienSoan = async (req, res) => {
    try {
        const { BienSoanId, QuanNhanId, Ten, LoaiTaiLieu, SoTrang, MaXuatBan, TenNhaXuatBan, NgayXuatBan, SoTacGia, CacTacGia, Quy, Nam, NgonNguSach, NhomNghienCuu, Tai, FileCM, CacHTCV, TrangThai, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await BienSoanService.createBienSoan(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateBienSoan = async (req, res) => {
    try {
        const biensoanId = req.params.id
        const data = req.body
        if (!biensoanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The biensoanId is required'
            })
        }
        const response = await BienSoanService.updateBienSoan(biensoanId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getBienSoanByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await BienSoanService.getBienSoanByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsBienSoan = async (req, res) => {
    try {
        const biensoanId = req.params.id
        if (!biensoanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The biensoanId is required'
            })
        }
        const response = await BienSoanService.getDetailsBienSoan(biensoanId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteBienSoan = async (req, res) => {
    try {
        const biensoanId = req.params.id
        if (!biensoanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The biensoanId is required'
            })
        }
        const response = await BienSoanService.deleteBienSoan(biensoanId)
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
        const response = await BienSoanService.deleteManyBienSoan(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllBienSoan = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await BienSoanService.getAllBienSoan(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await BienSoanService.getAllType()
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

        const response = await BienSoanService.updateHTCVLists(
            id,
            HTCVList
        );

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
module.exports = {
    createBienSoan,
    updateBienSoan,
    getDetailsBienSoan,
    deleteBienSoan,
    getAllBienSoan,
    deleteMany,
    getAllType,
    getBienSoanByQuanNhanId,
    updateHTCVLists
}
