const StaffPriorityService = require('../services/StaffPriorityService')

const createStaffPriority = async (req, res) => {
    try {
        const { objectcode,
            thetype,
            prioritycode,
            forman,
            func,
            thecode,
            extensioncode,
            tablename,
            inherit,
            edituser,
            edittime,
            lock,
            whois,
            unitcode,
            syscomponentcode,} = req.body
        if (!objectcode) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await StaffPriorityService.createStaffPriority(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateStaffPriority = async (req, res) => {
    try {
        const objectcode = req.params.id
        const data = req.body
        if (!objectcode) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The objectcode is required'
            })
        }
        const response = await StaffPriorityService.updateStaffPriority(objectcode, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsStaffPriority = async (req, res) => {
    try {
        const objectcode = req.params.id
        if (!objectcode) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The objectcode is required'
            })
        }
        const response = await StaffPriorityService.getDetailsStaffPriority(objectcode)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteStaffPriority = async (req, res) => {
    try {
        const objectcode = req.params.id
        if (!objectcode) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The objectcode is required'
            })
        }
        const response = await StaffPriorityService.deleteStaffPriority(objectcode)
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
        const response = await StaffPriorityService.deleteManyStaffPriority(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllStaffPriority = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await StaffPriorityService.getAllStaffPriority(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await StaffPriorityService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createStaffPriority,
    updateStaffPriority,
    getDetailsStaffPriority,
    deleteStaffPriority,
    getAllStaffPriority,
    deleteMany,
    getAllType
}
