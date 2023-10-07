const express = require("express");
const router = express.Router()
const NhomHoatDongNCController = require('../controllers/NhomHoatDongNCController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', NhomHoatDongNCController.createNhomHoatDongNC)
router.put('/update/:id', authMiddleWare, NhomHoatDongNCController.updateNhomHoatDongNC)
router.get('/get-details/:id', NhomHoatDongNCController.getDetailsNhomHoatDongNC)
router.delete('/delete/:id', authMiddleWare, NhomHoatDongNCController.deleteNhomHoatDongNC)
router.get('/get-all', NhomHoatDongNCController.getAllNhomHoatDongNC)
router.post('/delete-many', authMiddleWare, NhomHoatDongNCController.deleteMany)
router.get('/get-all-typenhom', NhomHoatDongNCController.getAllTypeNhomHoatDong)
router.get('/get-all-typeloai', NhomHoatDongNCController.getAllTypeLoaiHoatDong)
module.exports = router