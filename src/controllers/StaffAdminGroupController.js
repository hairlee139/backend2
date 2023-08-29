const StaffAdminGroupService = require('../services/StaffAdminGroupService')

const createStaffAdminGroup = async (req, res) => {
    try {
        const { objectcode ,
            thetype ,
            admingroupcode ,
            edituser ,
            edittime,
            lock,
            whois,} = req.body
        if (!objectcode) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await StaffAdminGroupService.createStaffAdminGroup(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateStaffAdminGroup = async (req, res) => {
    try {
        const objectcode = req.params.id
        const data = req.body
        if (!objectcode) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The objectcode is required'
            })
        }
        const response = await StaffAdminGroupService.updateStaffAdminGroup(objectcode, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsStaffAdminGroup = async (req, res) => {
    try {
        const objectcode = req.params.id
        if (!objectcode) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The objectcode is required'
            })
        }
        const response = await StaffAdminGroupService.getDetailsStaffAdminGroup(objectcode)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteStaffAdminGroup = async (req, res) => {
    try {
        const objectcode = req.params.id
        if (!objectcode) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The objectcode is required'
            })
        }
        const response = await StaffAdminGroupService.deleteStaffAdminGroup(objectcode)
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
        const response = await StaffAdminGroupService.deleteManyStaffAdminGroup(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllStaffAdminGroup = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await StaffAdminGroupService.getAllStaffAdminGroup(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await StaffAdminGroupService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createStaffAdminGroup,
    updateStaffAdminGroup,
    getDetailsStaffAdminGroup,
    deleteStaffAdminGroup,
    getAllStaffAdminGroup,
    deleteMany,
    getAllType
}
