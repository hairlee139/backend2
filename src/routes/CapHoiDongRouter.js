const express = require("express");
const router = express.Router()
const CapHoiDongController = require('../controllers/CapHoiDongController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', CapHoiDongController.createCapHoiDong)
router.put('/update/:id', authMiddleWare, CapHoiDongController.updateCapHoiDong)
router.get('/get-details/:id', CapHoiDongController.getDetailsCapHoiDong)
router.delete('/delete/:id', authMiddleWare, CapHoiDongController.deleteCapHoiDong)
router.get('/get-all', CapHoiDongController.getAllCapHoiDong)
router.post('/delete-many', authMiddleWare, CapHoiDongController.deleteMany)
router.get('/get-all-type', CapHoiDongController.getAllType)
router.get('/get-all-typeloai', CapHoiDongController.getAllTypeByLoaiHoiDong)
module.exports = router
