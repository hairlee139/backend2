const express = require("express");
const router = express.Router()
const HTCVHoatDongKhacController = require('../controllers/HTCVHoatDongKhacController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HTCVHoatDongKhacController.createHTCVHoatDongKhac)
router.put('/update/:id', authMiddleWare, HTCVHoatDongKhacController.updateHTCVHoatDongKhac)
router.get('/get-details/:id', HTCVHoatDongKhacController.getDetailsHTCVHoatDongKhac)
router.delete('/delete/:id', authMiddleWare, HTCVHoatDongKhacController.deleteHTCVHoatDongKhac)
router.get('/get-all', HTCVHoatDongKhacController.getAllHTCVHoatDongKhac)
router.post('/delete-many', authMiddleWare, HTCVHoatDongKhacController.deleteMany)
router.get('/get-all-type', HTCVHoatDongKhacController.getAllType)
router.get('/get-by-id/:id', HTCVHoatDongKhacController.getHTCVHoatDongKhacByQuanNhanId)

module.exports = router