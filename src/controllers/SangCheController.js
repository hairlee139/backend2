const SangCheService = require('../services/SangCheService')

const createSangChe = async (req, res) => {
    try {
        const { SangCheId, QuanNhanId, TenSangChe, LoaiDangKy, DonViCap, NhomNghienCuu, ThoiDiemDangKy, SoTacGia, CacTacGia, Quy, Nam, FileCM, Tai, TrangThai, CacHTCV, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await SangCheService.createSangChe(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateSangChe = async (req, res) => {
    try {
        const sangcheId = req.params.id
        const data = req.body
        if (!sangcheId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The sangcheId is required'
            })
        }
        const response = await SangCheService.updateSangChe(sangcheId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getSangCheByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await SangCheService.getSangCheByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsSangChe = async (req, res) => {
    try {
        const sangcheId = req.params.id
        if (!sangcheId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The sangcheId is required'
            })
        }
        const response = await SangCheService.getDetailsSangChe(sangcheId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteSangChe = async (req, res) => {
    try {
        const sangcheId = req.params.id
        if (!sangcheId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The sangcheId is required'
            })
        }
        const response = await SangCheService.deleteSangChe(sangcheId)
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
        const response = await SangCheService.deleteManySangChe(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllSangChe = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await SangCheService.getAllSangChe(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await SangCheService.getAllType()
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

        const response = await SangCheService.updateHTCVLists(
            id,
            HTCVList
        );

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
module.exports = {
    createSangChe,
    updateSangChe,
    getDetailsSangChe,
    deleteSangChe,
    getAllSangChe,
    deleteMany,
    getAllType,
    getSangCheByQuanNhanId,
    updateHTCVLists
}
