const express = require("express");
const router = express.Router()
const LoaiHoatDongController = require('../controllers/LoaiHoatDongController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', LoaiHoatDongController.createLoaiHoatDong)
router.put('/update/:id', authMiddleWare, LoaiHoatDongController.updateLoaiHoatDong)
router.get('/get-details/:id', LoaiHoatDongController.getDetailsLoaiHoatDong)
router.delete('/delete/:id', authMiddleWare, LoaiHoatDongController.deleteLoaiHoatDong)
router.get('/get-all', LoaiHoatDongController.getAllLoaiHoatDong)
router.post('/delete-many', authMiddleWare, LoaiHoatDongController.deleteMany)
router.get('/get-all-type', LoaiHoatDongController.getAllType)
module.exports = router