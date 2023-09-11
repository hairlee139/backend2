const express = require("express");
const router = express.Router()
const LoaiHoiDongController = require('../controllers/LoaiHoiDongController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', LoaiHoiDongController.createLoaiHoiDong)
router.put('/update/:id', authMiddleWare, LoaiHoiDongController.updateLoaiHoiDong)
router.get('/get-details/:id', LoaiHoiDongController.getDetailsLoaiHoiDong)
router.delete('/delete/:id', authMiddleWare, LoaiHoiDongController.deleteLoaiHoiDong)
router.get('/get-all', LoaiHoiDongController.getAllLoaiHoiDong)
router.post('/delete-many', authMiddleWare, LoaiHoiDongController.deleteMany)
router.get('/get-all-type', LoaiHoiDongController.getAllType)
module.exports = router