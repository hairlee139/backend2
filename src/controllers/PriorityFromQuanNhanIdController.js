const PriorityFromQuanNhanId = require('../services/PriorityFromQuanNhanIdService')
const AdminGroupPriorityService = require('../services/AdminGroupPriorityService')

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
        const response = await PriorityFromQuanNhanId.getAllPriorityFromAdminGroup(adminGroupId,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getAdminGroupCodeFromUser = async (req, res) => {
    try {
        const userid = req.params.id // Lấy userid của user đang đăng nhập từ request
        const data = req.body
        if (!userid) {
            return res.status(200).json({
                status: 'ERR',
                message: 'userid is not defined'
            });
        }
        console.log("ABC"+req.params.id)
        const response = await PriorityFromQuanNhanId.getAdminGroupCodeFromUser(userid,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getPriorityFromUser = async (req, res) => {
    try {
        const userid = req.params.id // Lấy userid của user đang đăng nhập từ request
        const data = req.body
        if (!userid) {
            return res.status(200).json({
                status: 'ERR',
                message: 'userid is not defined'
            });
        }
        console.log("UserId "+req.params.id)
        const response = await PriorityFromQuanNhanId.getPriorityFromUser(userid,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getChucVuDonViFromUser = async (req, res) => {
    try {
        const quannhanId = req.params.id // Lấy quannhanId của user đang đăng nhập từ request
        const data = req.body
        if (!quannhanId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'quannhanId is not defined'
            });
        }
        console.log("ABC"+req.params.id)
        const response = await PriorityFromQuanNhanId.getChucVuDonViFromUser(quannhanId,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getAdminGroupFromChucVuDonVi = async (req, res) => {
    try {
        const departmentlist = req.params.departmentlist;
        const leveltitlelist = req.params.leveltitlelist;
        const result = await PriorityFromQuanNhanId.getAdminGroupFromChucVuDonVi(
            departmentlist,
            leveltitlelist
        );
        if (result.status === 'ERR') {
            return res.status(404).json(result);
        }

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'ERR',
            message: 'An error occurred while processing your request'
        });
    }
};

module.exports = {
    getAllPriorityFromAdminGroup,
    getChucVuDonViFromUser,
    getAdminGroupFromChucVuDonVi,
    getAdminGroupCodeFromUser,
    getPriorityFromUser
}
