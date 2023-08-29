const express = require("express");
const router = express.Router()
const AdminGroupPriorityController = require('../controllers/AdminGroupPriorityController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', AdminGroupPriorityController.createAdminGroupPriority)
router.put('/update/:id', authMiddleWare, AdminGroupPriorityController.updateAdminGroupPriority)
router.get('/get-details/:id', AdminGroupPriorityController.getDetailsAdminGroupPriority)
router.delete('/delete/:id', authMiddleWare, AdminGroupPriorityController.deleteAdminGroupPriority)
router.get('/get-all', AdminGroupPriorityController.getAllAdminGroupPriority)
router.post('/delete-many', authMiddleWare, AdminGroupPriorityController.deleteMany)
router.get('/get-all-type', AdminGroupPriorityController.getAllType)

module.exports = router