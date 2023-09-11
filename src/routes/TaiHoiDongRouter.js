const express = require("express");
const router = express.Router()
const TaiHoiDongController = require('../controllers/TaiHoiDongController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', TaiHoiDongController.createTaiHoiDong)
router.put('/update/:id', authMiddleWare, TaiHoiDongController.updateTaiHoiDong)
router.get('/get-details/:id', TaiHoiDongController.getDetailsTaiHoiDong)
router.delete('/delete/:id', authMiddleWare, TaiHoiDongController.deleteTaiHoiDong)
router.get('/get-all', TaiHoiDongController.getAllTaiHoiDong)
router.post('/delete-many', authMiddleWare, TaiHoiDongController.deleteMany)
router.get('/get-all-type', TaiHoiDongController.getAllType)
router.get('/get-by-id/:id', TaiHoiDongController.getTaiHoiDongByQuanNhanId)

module.exports = router