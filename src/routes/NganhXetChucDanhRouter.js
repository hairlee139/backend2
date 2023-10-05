const express = require("express");
const router = express.Router()
const NganhXetChucDanhController = require('../controllers/NganhXetChucDanhController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', NganhXetChucDanhController.createNganhXetChucDanh)
router.put('/update/:id', authMiddleWare, NganhXetChucDanhController.updateNganhXetChucDanh)
router.get('/get-details/:id', NganhXetChucDanhController.getDetailsNganhXetChucDanh)
router.delete('/delete/:id', authMiddleWare, NganhXetChucDanhController.deleteNganhXetChucDanh)
router.get('/get-all', NganhXetChucDanhController.getAllNganhXetChucDanh)
router.post('/delete-many', authMiddleWare, NganhXetChucDanhController.deleteMany)
router.get('/get-all-type', NganhXetChucDanhController.getAllType)


module.exports = router