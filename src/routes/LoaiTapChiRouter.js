const express = require("express");
const router = express.Router()
const LoaiTapChiController = require('../controllers/LoaiTapChiController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', LoaiTapChiController.createLoaiTapChi)
router.put('/update/:id', authMiddleWare, LoaiTapChiController.updateLoaiTapChi)
router.get('/get-details/:id', LoaiTapChiController.getDetailsLoaiTapChi)
router.delete('/delete/:id', authMiddleWare, LoaiTapChiController.deleteLoaiTapChi)
router.get('/get-all', LoaiTapChiController.getAllLoaiTapChi)
router.post('/delete-many', authMiddleWare, LoaiTapChiController.deleteMany)
router.get('/get-all-type', LoaiTapChiController.getAllType)


module.exports = router