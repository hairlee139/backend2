const TinhTrangCongTacService = require('../services/TinhTrangCongTacService')

const createTinhTrangCongTac = async (req, res) => {
    try {
        const { code, QuanNhanId, QuyetDinh, NgayQuyetDinh, TrangThaiCongTac, KetThuc, TrangThai, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await TinhTrangCongTacService.createTinhTrangCongTac(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateTinhTrangCongTac = async (req, res) => {
    try {
        const tinhtrangcongtacId = req.params.id
        const data = req.body
        if (!tinhtrangcongtacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The tinhtrangcongtacId is required'
            })
        }
        const response = await TinhTrangCongTacService.updateTinhTrangCongTac(tinhtrangcongtacId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getTinhTrangCongTacByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await TinhTrangCongTacService.getTinhTrangCongTacByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsTinhTrangCongTac = async (req, res) => {
    try {
        const tinhtrangcongtacId = req.params.id
        if (!tinhtrangcongtacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The tinhtrangcongtacId is required'
            })
        }
        const response = await TinhTrangCongTacService.getDetailsTinhTrangCongTac(tinhtrangcongtacId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteTinhTrangCongTac = async (req, res) => {
    try {
        const tinhtrangcongtacId = req.params.id
        if (!tinhtrangcongtacId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The tinhtrangcongtacId is required'
            })
        }
        const response = await TinhTrangCongTacService.deleteTinhTrangCongTac(tinhtrangcongtacId)
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
        const response = await TinhTrangCongTacService.deleteManyTinhTrangCongTac(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllTinhTrangCongTac = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await TinhTrangCongTacService.getAllTinhTrangCongTac(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await TinhTrangCongTacService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createTinhTrangCongTac,
    updateTinhTrangCongTac,
    getDetailsTinhTrangCongTac,
    deleteTinhTrangCongTac,
    getAllTinhTrangCongTac,
    deleteMany,
    getAllType,
    getTinhTrangCongTacByQuanNhanId,
}
