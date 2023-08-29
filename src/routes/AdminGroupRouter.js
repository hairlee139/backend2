const express = require("express");
const router = express.Router()
const AdminGroupController = require('../controllers/AdminGroupController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', AdminGroupController.createAdminGroup)
router.put('/update/:id', authMiddleWare, AdminGroupController.updateAdminGroup)
router.get('/get-details/:id', AdminGroupController.getDetailsAdminGroup)
router.delete('/delete/:id', authMiddleWare, AdminGroupController.deleteAdminGroup)
router.get('/get-all', AdminGroupController.getAllAdminGroup)
router.post('/delete-many', authMiddleWare, AdminGroupController.deleteMany)
router.get('/get-all-type', AdminGroupController.getAllType)

module.exports = router