const express = require("express");
const router = express.Router()
const StaffAdminGroupController = require('../controllers/StaffAdminGroupController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', StaffAdminGroupController.createStaffAdminGroup)
router.put('/update/:id', authMiddleWare, StaffAdminGroupController.updateStaffAdminGroup)
router.get('/get-details/:id', StaffAdminGroupController.getDetailsStaffAdminGroup)
router.delete('/delete/:id', authMiddleWare, StaffAdminGroupController.deleteStaffAdminGroup)
router.get('/get-all', StaffAdminGroupController.getAllStaffAdminGroup)
router.post('/delete-many', authMiddleWare, StaffAdminGroupController.deleteMany)
router.get('/get-all-type', StaffAdminGroupController.getAllType)

module.exports = router