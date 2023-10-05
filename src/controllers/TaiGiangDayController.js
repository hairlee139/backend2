const TaiGiangDayService = require('../services/TaiGiangDayService')
const TongTaiService = require('../services/TongTaiService')

const createTaiGiangDay = async (req, res) => {
    try {
        const { code, QuanNhanId, MaLop, MaMonHoc, TenMonHoc, SoTinChi, GioChuan, SiSo, HTDT, KetThuc, Quy, LoaiHinhDT, Nam, HocKy, HTThi, SoTiet, FileCM, THCSDT, TrangThai, CacHTCV, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await TaiGiangDayService.createTaiGiangDay(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateTaiGiangDay = async (req, res) => {
    try {
        const taigiangdayId = req.params.id
        const data = req.body
        if (!taigiangdayId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taigiangdayId is required'
            })
        }
        const response = await TaiGiangDayService.updateTaiGiangDay(taigiangdayId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getTaiGiangDayByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await TaiGiangDayService.getTaiGiangDayByQuanNhanId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getTongTaiFromId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await TongTaiService.getTongTaiFromId(quannhanId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsTaiGiangDay = async (req, res) => {
    try {
        const taigiangdayId = req.params.id
        if (!taigiangdayId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taigiangdayId is required'
            })
        }
        const response = await TaiGiangDayService.getDetailsTaiGiangDay(taigiangdayId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteTaiGiangDay = async (req, res) => {
    try {
        const taigiangdayId = req.params.id
        if (!taigiangdayId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The taigiangdayId is required'
            })
        }
        const response = await TaiGiangDayService.deleteTaiGiangDay(taigiangdayId)
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
        const response = await TaiGiangDayService.deleteManyTaiGiangDay(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllTaiGiangDay = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await TaiGiangDayService.getAllTaiGiangDay(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await TaiGiangDayService.getAllType()
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

        const response = await TaiGiangDayService.updateHTCVLists(
            id,
            HTCVList
        );

        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
module.exports = {
    createTaiGiangDay,
    updateTaiGiangDay,
    getDetailsTaiGiangDay,
    deleteTaiGiangDay,
    getAllTaiGiangDay,
    deleteMany,
    getAllType,
    getTaiGiangDayByQuanNhanId,
    updateHTCVLists,
    getTongTaiFromId
}
