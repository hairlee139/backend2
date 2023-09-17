const express = require("express");
const router = express.Router()
const HoatDongNCKhacController = require('../controllers/HoatDongNCKhacController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HoatDongNCKhacController.createHoatDongNCKhac)
router.put('/update/:id', authMiddleWare, HoatDongNCKhacController.updateHoatDongNCKhac)
router.get('/get-details/:id', HoatDongNCKhacController.getDetailsHoatDongNCKhac)
router.delete('/delete/:id', authMiddleWare, HoatDongNCKhacController.deleteHoatDongNCKhac)
router.get('/get-all', HoatDongNCKhacController.getAllHoatDongNCKhac)
router.post('/delete-many', authMiddleWare, HoatDongNCKhacController.deleteMany)
router.get('/get-all-type', HoatDongNCKhacController.getAllType)
router.get('/get-by-id/:id', HoatDongNCKhacController.getHoatDongNCKhacByQuanNhanId)
router.post('/pushdata/:id', HoatDongNCKhacController.updateHTCVLists)
module.exports = router