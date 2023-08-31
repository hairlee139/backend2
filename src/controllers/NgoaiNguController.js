const NgoaiNguService = require('../services/NgoaiNguService')

const createNgoaiNgu = async (req, res) => {
    try {
        const { code,QuanNhanId,NgonNgu,LoaiBang,NamNhan,CapDo,TuongDuong,HinhThucBang,TrangThai,edituser,edittime,GhiChu} = req.body
        if ( !code || !QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await NgoaiNguService.createNgoaiNgu(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateNgoaiNgu = async (req, res) => {
    try {
        const ngoainguId = req.params.id
        const data = req.body
        if (!ngoainguId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ngoainguId is required'
            })
        }
        const response = await NgoaiNguService.updateNgoaiNgu(ngoainguId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getNgoaiNguByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await NgoaiNguService.getNgoaiNguByQuanNhanId(quannhanId,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsNgoaiNgu = async (req, res) => {
    try {
        const ngoainguId = req.params.id
        if (!ngoainguId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ngoainguId is required'
            })
        }
        const response = await NgoaiNguService.getDetailsNgoaiNgu(ngoainguId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteNgoaiNgu = async (req, res) => {
    try {
        const ngoainguId = req.params.id
        if (!ngoainguId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ngoainguId is required'
            })
        }
        const response = await NgoaiNguService.deleteNgoaiNgu(ngoainguId)
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
        const response = await NgoaiNguService.deleteManyNgoaiNgu(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllNgoaiNgu = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await NgoaiNguService.getAllNgoaiNgu(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await NgoaiNguService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createNgoaiNgu,
    updateNgoaiNgu,
    getDetailsNgoaiNgu,
    deleteNgoaiNgu,
    getAllNgoaiNgu,
    deleteMany,
    getAllType,
    getNgoaiNguByQuanNhanId,
}
