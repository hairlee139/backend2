const ChucVuDonViService = require('../services/ChucVuDonViService')

const createChucVuDonVi = async (req, res) => {
    try {
        const { chucvucode, donvicode,name, GhiChu } = req.body
        if (!donvicode) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await ChucVuDonViService.createChucVuDonVi(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateChucVuDonVi = async (req, res) => {
    try {
        const chucvudonviId = req.params.id
        const data = req.body
        if (!chucvudonviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'chucvudonviId is required'
            })
        }
        const response = await ChucVuDonViService.updateChucVuDonVi(chucvudonviId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsChucVuDonVi = async (req, res) => {
    try {
        const chucvudonviId = req.params.id
        if (!chucvudonviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The chucvudonviId is required'
            })
        }
        const response = await ChucVuDonViService.getDetailsChucVuDonVi(chucvudonviId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteChucVuDonVi = async (req, res) => {
    try {
        const chucvudonviId = req.params.id
        if (!chucvudonviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The chucvudonviId is required'
            })
        }
        const response = await ChucVuDonViService.deleteChucVuDonVi(chucvudonviId)
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
        const response = await ChucVuDonViService.deleteManyChucVuDonVi(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllChucVuDonVi = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await ChucVuDonViService.getAllChucVuDonVi(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await ChucVuDonViService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getChucVuByDonVi = async (req, res) => {
    try {
        const chucvudonviid = req.params.id // Lấy donvichaId của user đang đăng nhập từ request
        const data = req.body
        if (!chucvudonviid) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User chucvudonviid is not defined'
            });
        }

        const response = await ChucVuDonViService.getChucVuByDonVi(chucvudonviid,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDataChucVuByDonVi = async (req, res) => {
    try {
        const chucvudonviid = req.params.id // Lấy donvichaId của user đang đăng nhập từ request
        const data = req.body
        if (!chucvudonviid) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User chucvudonviid is not defined'
            });
        }

        const response = await ChucVuDonViService.getDataChucVuByDonVi(chucvudonviid,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
module.exports = {
    createChucVuDonVi,
    updateChucVuDonVi,
    getDetailsChucVuDonVi,
    deleteChucVuDonVi,
    getAllChucVuDonVi,
    deleteMany,
    getAllType,
    getChucVuByDonVi,
    getDataChucVuByDonVi
}
