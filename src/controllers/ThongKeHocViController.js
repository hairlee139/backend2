const ThongKeHocViService = require('../services/ThongKeHocViService')

const createThongKeHocVi = async (req, res) => {
    try {
        const { DonViId, Nam, TienSyKhoaHoc, TienSy, ThacSy, KySu, CuNhan, Khac, edituser, edittime, GhiChu } = req.body
        if (!DonViId || !Nam) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ThongKeHocViService.createThongKeHocVi(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateThongKeHocVi = async (req, res) => {
    try {
        const donviid = req.params.donviid;
        const nam = req.params.nam;
        const data = req.body;
        if (!donviid || !nam) {
            return res.status(200).json({
                status: 'ERR',
                message: 'donviid, nam is required'
            })
        }
        const response = await ThongKeHocViService.updateThongKeHocVi(donviid,nam, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsThongKeHocVi = async (req, res) => {
    try {
        const thongkehocviId = req.params.id
        if (!thongkehocviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The thongkehocviId is required'
            })
        }
        const response = await ThongKeHocViService.getDetailsThongKeHocVi(thongkehocviId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteThongKeHocVi = async (req, res) => {
    try {
        const thongkehocviId = req.params.id
        if (!thongkehocviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The thongkehocviId is required'
            })
        }
        const response = await ThongKeHocViService.deleteThongKeHocVi(thongkehocviId)
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
        const response = await ThongKeHocViService.deleteManyThongKeHocVi(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllThongKeHocVi = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await ThongKeHocViService.getAllThongKeHocVi(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await ThongKeHocViService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getThongKeHocViByDonViId = async (req, res) => {
    try {
        const donviId = req.params.id // Lấy DonViId của user đang đăng nhập từ request
        const data = req.body
        if (!donviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User DonViId is not defined'
            });
        }

        const response = await ThongKeHocViService.getThongKeHocViByDonViId(donviId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
module.exports = {
    createThongKeHocVi,
    updateThongKeHocVi,
    getDetailsThongKeHocVi,
    deleteThongKeHocVi,
    getAllThongKeHocVi,
    deleteMany,
    getAllType,
    getThongKeHocViByDonViId
}
