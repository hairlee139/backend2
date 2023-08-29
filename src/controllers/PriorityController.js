const PriorityService = require('../services/PriorityService')
const AdminGroupPriorityService = require('../services/AdminGroupPriorityService')
const createPriority = async (req, res) => {
    try {
        const { code,
            description,
            showauth,
            name,
            lock,
            whois,
            groupcode,
            syscomponentcode,
            unitcode,
            addn,
            edit,
            dele, } = req.body
        if (!code) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await PriorityService.createPriority(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updatePriority = async (req, res) => {
    try {
        const code = req.params.id
        const data = req.body
        if (!code) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The code is required'
            })
        }
        const response = await PriorityService.updatePriority(code, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsPriority = async (req, res) => {
    try {
        const code = req.params.id
        if (!code) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The code is required'
            })
        }
        const response = await PriorityService.getDetailsPriority(code)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deletePriority = async (req, res) => {
    try {
        const code = req.params.id
        if (!code) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The code is required'
            })
        }
        const response = await PriorityService.deletePriority(code)
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
        const response = await PriorityService.deleteManyPriority(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllPriority = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await PriorityService.getAllPriority(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getAllPriorityFromAdminGroup = async (req, res) => {
    try {
        const adminGroupId = req.params.id // Lấy adminGroupId của user đang đăng nhập từ request
        const data = req.body
        if (!adminGroupId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'adminGroupId is not defined'
            });
        }
        console.log("ABC"+req.params.id)
        const response = await AdminGroupPriorityService.getAllPriorityFromAdminGroup(adminGroupId,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getAllType = async (req, res) => {
    try {
        const response = await PriorityService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createPriority,
    updatePriority,
    getDetailsPriority,
    deletePriority,
    getAllPriority,
    deleteMany,
    getAllType,
    getAllPriorityFromAdminGroup
}
