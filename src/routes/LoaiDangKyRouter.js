const express = require("express");
const router = express.Router()
const LoaiDangKyController = require('../controllers/LoaiDangKyController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', LoaiDangKyController.createLoaiDangKy)
router.put('/update/:id', authMiddleWare, LoaiDangKyController.updateLoaiDangKy)
router.get('/get-details/:id', LoaiDangKyController.getDetailsLoaiDangKy)
router.delete('/delete/:id', authMiddleWare, LoaiDangKyController.deleteLoaiDangKy)
router.get('/get-all', LoaiDangKyController.getAllLoaiDangKy)
router.post('/delete-many', authMiddleWare, LoaiDangKyController.deleteMany)
router.get('/get-all-type', LoaiDangKyController.getAllType)
module.exports = router