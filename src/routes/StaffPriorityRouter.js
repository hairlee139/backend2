const express = require("express");
const router = express.Router()
const StaffPriorityController = require('../controllers/StaffPriorityController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', StaffPriorityController.createStaffPriority)
router.put('/update/:id', authMiddleWare, StaffPriorityController.updateStaffPriority)
router.get('/get-details/:id', StaffPriorityController.getDetailsStaffPriority)
router.delete('/delete/:id', authMiddleWare, StaffPriorityController.deleteStaffPriority)
router.get('/get-all', StaffPriorityController.getAllStaffPriority)
router.post('/delete-many', authMiddleWare, StaffPriorityController.deleteMany)
router.get('/get-all-type', StaffPriorityController.getAllType)

module.exports = router