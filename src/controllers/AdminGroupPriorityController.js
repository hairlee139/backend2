const AdminGroupPriorityService = require('../services/AdminGroupPriorityService')
const AdminGroup = require('../models/AdminGroupModel')
const AdminGroupPriority = require('../models/AdminGroupPriorityModel')
const createAdminGroupPriority = async (req, res) => {
    try {
        const { objectcode ,
            thetype ,
            prioritycode ,
            forman,
            func,
            inherit,
            edituser ,
            edittime,
            lock,
            whois ,
            unitcode ,
            thecode ,
            extensioncode ,
            tablename ,
            syscomponentcode ,
            addn,
            edit,
            dele,   } = req.body
        if (!objectcode) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await AdminGroupPriorityService.createAdminGroupPriority(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateAdminGroupPriority = async (req, res) => {
    try {
        const objectcode = req.params.id
        const data = req.body
        if (!objectcode) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The objectcode is required'
            })
        }
        const response = await AdminGroupPriorityService.updateAdminGroupPriority(objectcode, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsAdminGroupPriority = async (req, res) => {
    try {
        const objectcode = req.params.id
        if (!objectcode) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The objectcode is required'
            })
        }
        console.log(objectcode)
        // const response = await AdminGroupPriorityService.getDetailsAdminGroupPriority(objectcode).populate("objectcode")
        const response = await AdminGroupPriority.findById(objectcode).populate("objectcode").populate("prioritycode")
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteAdminGroupPriority = async (req, res) => {
    try {
        const objectcode = req.params.id
        if (!objectcode) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The objectcode is required'
            })
        }
        const response = await AdminGroupPriorityService.deleteAdminGroupPriority(objectcode)
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
        const response = await AdminGroupPriorityService.deleteManyAdminGroupPriority(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllAdminGroupPriority = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await AdminGroupPriorityService.getAllAdminGroupPriority(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await AdminGroupPriorityService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createAdminGroupPriority,
    updateAdminGroupPriority,
    getDetailsAdminGroupPriority,
    deleteAdminGroupPriority,
    getAllAdminGroupPriority,
    deleteMany,
    getAllType
}
