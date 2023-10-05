const express = require("express");
const router = express.Router()
const LoaiGiaiThuongController = require('../controllers/LoaiGiaiThuongController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', LoaiGiaiThuongController.createLoaiGiaiThuong)
router.put('/update/:id', authMiddleWare, LoaiGiaiThuongController.updateLoaiGiaiThuong)
router.get('/get-details/:id', LoaiGiaiThuongController.getDetailsLoaiGiaiThuong)
router.delete('/delete/:id', authMiddleWare, LoaiGiaiThuongController.deleteLoaiGiaiThuong)
router.get('/get-all', LoaiGiaiThuongController.getAllLoaiGiaiThuong)
router.post('/delete-many', authMiddleWare, LoaiGiaiThuongController.deleteMany)
router.get('/get-all-type', LoaiGiaiThuongController.getAllType)
module.exports = router