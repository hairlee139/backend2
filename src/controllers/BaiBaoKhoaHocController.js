const BaiBaoKhoaHocService = require('../services/BaiBaoKhoaHocService')

const createBaiBaoKhoaHoc = async (req, res) => {
    try {
        const { BaiBaoKhoaHocId, QuanNhanId, TenBai, LoaiTapChiHoiThao, TenTapChiHoiThao, SoTapChi, DiemToiDa, KinhPhiHoTro, NganhXetChucDanh, TapSo, NgonNguBao, TrangBaiViet, ThoiDiemXuatBan, SoTacGia, CacTacGia, LienKet, Quy, Nam, Tai, ThuocDeTai, FileCM, NhomNghienCuu, TrangThai, CacHTCV, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await BaiBaoKhoaHocService.createBaiBaoKhoaHoc(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateBaiBaoKhoaHoc = async (req, res) => {
    try {
        const baibaokhoahocId = req.params.id
        const data = req.body
        if (!baibaokhoahocId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The baibaokhoahocId is required'
            })
        }
        const response = await BaiBaoKhoaHocService.updateBaiBaoKhoaHoc(baibaokhoahocId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getBaiBaoKhoaHocByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await BaiBaoKhoaHocService.getBaiBaoKhoaHocByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsBaiBaoKhoaHoc = async (req, res) => {
    try {
        const baibaokhoahocId = req.params.id
        if (!baibaokhoahocId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The baibaokhoahocId is required'
            })
        }
        const response = await BaiBaoKhoaHocService.getDetailsBaiBaoKhoaHoc(baibaokhoahocId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteBaiBaoKhoaHoc = async (req, res) => {
    try {
        const baibaokhoahocId = req.params.id
        if (!baibaokhoahocId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The baibaokhoahocId is required'
            })
        }
        const response = await BaiBaoKhoaHocService.deleteBaiBaoKhoaHoc(baibaokhoahocId)
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
        const response = await BaiBaoKhoaHocService.deleteManyBaiBaoKhoaHoc(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllBaiBaoKhoaHoc = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await BaiBaoKhoaHocService.getAllBaiBaoKhoaHoc(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await BaiBaoKhoaHocService.getAllType()
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

        const response = await BaiBaoKhoaHocService.updateHTCVLists(
            id,
            HTCVList
        );

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
module.exports = {
    createBaiBaoKhoaHoc,
    updateBaiBaoKhoaHoc,
    getDetailsBaiBaoKhoaHoc,
    deleteBaiBaoKhoaHoc,
    getAllBaiBaoKhoaHoc,
    deleteMany,
    getAllType,
    getBaiBaoKhoaHocByQuanNhanId,
    updateHTCVLists
}
