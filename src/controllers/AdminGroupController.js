const AdminGroupService = require('../services/AdminGroupService')

const createAdminGroup = async (req, res) => {
    try {
        const { code, codeview, name,  note,  edituser,edittime, lock, lockdate,  whois, unitcode, departmentlist, leveltitlelist, allunit, admin, staff  } = req.body
        if (!code) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await AdminGroupService.createAdminGroup(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateAdminGroup = async (req, res) => {
    try {
        const code = req.params.id
        const data = req.body
        if (!code) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The code is required'
            })
        }
        const response = await AdminGroupService.updateAdminGroup(code, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsAdminGroup = async (req, res) => {
    try {
        const code = req.params.id
        if (!code) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The code is required'
            })
        }
        const response = await AdminGroupService.getDetailsAdminGroup(code)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteAdminGroup = async (req, res) => {
    try {
        const code = req.params.id
        if (!code) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The code is required'
            })
        }
        const response = await AdminGroupService.deleteAdminGroup(code)
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
        const response = await AdminGroupService.deleteManyAdminGroup(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllAdminGroup = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await AdminGroupService.getAllAdminGroup(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await AdminGroupService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createAdminGroup,
    updateAdminGroup,
    getDetailsAdminGroup,
    deleteAdminGroup,
    getAllAdminGroup,
    deleteMany,
    getAllType
}
