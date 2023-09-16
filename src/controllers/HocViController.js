const HocViService = require('../services/HocViService')

const createHocVi = async (req, res) => {
    try {
        const { QuanNhanId, TenHocVi, note, edituser, edittime, lock, lockdate} = req.body
        if ( !QuanNhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await HocViService.createHocVi(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.error(e);
        return res.status(404).json({
            message: e
        })
    }
}

const updateHocVi = async (req, res) => {
    try {
        const hocviId = req.params.id
        const data = req.body
        if (!hocviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hocviId is required'
            })
        }
        const response = await HocViService.updateHocVi(hocviId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getHocViByQuanNhanId = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy QuanNhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User QuanNhanId is not defined'
            });
        }

        const response = await HocViService.getHocViByQuanNhanId(quannhanId,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDetailsHocVi = async (req, res) => {
    try {
        const hocviId = req.params.id
        if (!hocviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hocviId is required'
            })
        }
        const response = await HocViService.getDetailsHocVi(hocviId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteHocVi = async (req, res) => {
    try {
        const hocviId = req.params.id
        if (!hocviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The hocviId is required'
            })
        }
        const response = await HocViService.deleteHocVi(hocviId)
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
        const response = await HocViService.deleteManyHocVi(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllHocVi = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await HocViService.getAllHocVi(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await HocViService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getAllHocViFromDonVi = async (req, res) => {
    try {
        const donviId = req.params.id // Lấy donviId của user đang đăng nhập từ request
        const data = req.body
        if (!donviId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'donviId is not defined'
            });
        }
        
        const response = await HocViService.getAllHocViFromDonVi(donviId,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
module.exports = {
    createHocVi,
    updateHocVi,
    getDetailsHocVi,
    deleteHocVi,
    getAllHocVi,
    deleteMany,
    getAllType,
    getHocViByQuanNhanId,
    getAllHocViFromDonVi
}
