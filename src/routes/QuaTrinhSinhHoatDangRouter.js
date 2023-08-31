const express = require("express");
const router = express.Router()
const QuaTrinhSinhHoatDangController = require('../controllers/QuaTrinhSinhHoatDangController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', QuaTrinhSinhHoatDangController.createQuaTrinhSinhHoatDang)
router.put('/update/:id', authMiddleWare, QuaTrinhSinhHoatDangController.updateQuaTrinhSinhHoatDang)
router.get('/get-details/:id', QuaTrinhSinhHoatDangController.getDetailsQuaTrinhSinhHoatDang)
router.delete('/delete/:id', authMiddleWare, QuaTrinhSinhHoatDangController.deleteQuaTrinhSinhHoatDang)
router.get('/get-all', QuaTrinhSinhHoatDangController.getAllQuaTrinhSinhHoatDang)
router.post('/delete-many', authMiddleWare, QuaTrinhSinhHoatDangController.deleteMany)
router.get('/get-all-type', QuaTrinhSinhHoatDangController.getAllType)
router.get('/get-by-id/:id', QuaTrinhSinhHoatDangController.getQuaTrinhSinhHoatDangByQuanNhanId)

module.exports = router