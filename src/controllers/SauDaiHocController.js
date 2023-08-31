const SauDaiHocService = require('../services/SauDaiHocService')

const createSauDaiHoc = async (req, res) => {
    try {
        const { code,QuanNhanId,LoaiBang,LinhVuc,TenLuanVan,Truong,QuocGia,NamNhan,TrangThai,edituser,edittime,GhiChu} = req.body
        if ( !code || !QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await SauDaiHocService.createSauDaiHoc(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateSauDaiHoc = async (req, res) => {
    try {
        const saudaihocId = req.params.id
        const data = req.body
        if (!saudaihocId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The saudaihocId is required'
            })
        }
        const response = await SauDaiHocService.updateSauDaiHoc(saudaihocId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getSauDaiHocByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await SauDaiHocService.getSauDaiHocByQuanNhanId(quannhanId,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsSauDaiHoc = async (req, res) => {
    try {
        const saudaihocId = req.params.id
        if (!saudaihocId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The saudaihocId is required'
            })
        }
        const response = await SauDaiHocService.getDetailsSauDaiHoc(saudaihocId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteSauDaiHoc = async (req, res) => {
    try {
        const saudaihocId = req.params.id
        if (!saudaihocId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The saudaihocId is required'
            })
        }
        const response = await SauDaiHocService.deleteSauDaiHoc(saudaihocId)
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
        const response = await SauDaiHocService.deleteManySauDaiHoc(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllSauDaiHoc = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await SauDaiHocService.getAllSauDaiHoc(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await SauDaiHocService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createSauDaiHoc,
    updateSauDaiHoc,
    getDetailsSauDaiHoc,
    deleteSauDaiHoc,
    getAllSauDaiHoc,
    deleteMany,
    getAllType,
    getSauDaiHocByQuanNhanId,
}
