const express = require("express");
const router = express.Router()
const VaiTroHoiDongController = require('../controllers/VaiTroHoiDongController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', VaiTroHoiDongController.createVaiTroHoiDong)
router.put('/update/:id', authMiddleWare, VaiTroHoiDongController.updateVaiTroHoiDong)
router.get('/get-details/:id', VaiTroHoiDongController.getDetailsVaiTroHoiDong)
router.delete('/delete/:id', authMiddleWare, VaiTroHoiDongController.deleteVaiTroHoiDong)
router.get('/get-all', VaiTroHoiDongController.getAllVaiTroHoiDong)
router.post('/delete-many', authMiddleWare, VaiTroHoiDongController.deleteMany)
router.get('/get-all-type', VaiTroHoiDongController.getAllType)
module.exports = router