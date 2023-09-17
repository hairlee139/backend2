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
router.get('/get-all-type-list', AdminGroupController.getAllTypeList)
router.post('/pushdata/:id', AdminGroupController.updateAdminGroupLists)
router.put('/editdata/:_id/:index', AdminGroupController.update2ListsAdminGroup)
router.delete('/deletedata/:_id/:index', AdminGroupController.delete2ListsAdminGroup)
module.exports = router