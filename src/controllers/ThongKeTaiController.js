const ThongKeTaiService = require('../services/ThongKeTaiService')

const createThongKeTai = async (req, res) => {
    try {
        const { QuanNhanId, Nam, TaiDaoTaoYeuCau, TaiNCKHYeuCau, TongTaiYeuCau, TaiThucDaoTaoYeuCau, TaiThucNCKHYeuCau, TongThucTai, edituser, edittime, GhiChu } = req.body
        if (!QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ThongKeTaiService.createThongKeTai(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateThongKeTai = async (req, res) => {
    try {
        const quannhanid = req.params.quannhanid;
        const nam = req.params.nam;
        const data = req.body;
        if (!quannhanid || !nam) {
            return res.status(200).json({
                status: 'ERR',
                message: 'quannhanid, nam is required'
            })
        }
        const response = await ThongKeTaiService.updateThongKeTai(quannhanid, nam, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsThongKeTai = async (req, res) => {
    try {
        const thongketaiId = req.params.id
        if (!thongketaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The thongketaiId is required'
            })
        }
        const response = await ThongKeTaiService.getDetailsThongKeTai(thongketaiId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteThongKeTai = async (req, res) => {
    try {
        const thongketaiId = req.params.id
        if (!thongketaiId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The thongketaiId is required'
            })
        }
        const response = await ThongKeTaiService.deleteThongKeTai(thongketaiId)
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
        const response = await ThongKeTaiService.deleteManyThongKeTai(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllThongKeTai = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await ThongKeTaiService.getAllThongKeTai(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await ThongKeTaiService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getThongKeTaiByQuanNhanId = async (req, res) => {
    try {
        const donviId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!donviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await ThongKeTaiService.getThongKeTaiByQuanNhanId(donviId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
module.exports = {
    createThongKeTai,
    updateThongKeTai,
    getDetailsThongKeTai,
    deleteThongKeTai,
    getAllThongKeTai,
    deleteMany,
    getAllType,
    getThongKeTaiByQuanNhanId
}
