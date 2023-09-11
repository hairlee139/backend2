const express = require("express");
const router = express.Router()
const HinhThucGiangDayController = require('../controllers/HinhThucGiangDayController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HinhThucGiangDayController.createHinhThucGiangDay)
router.put('/update/:id', authMiddleWare, HinhThucGiangDayController.updateHinhThucGiangDay)
router.get('/get-details/:id', HinhThucGiangDayController.getDetailsHinhThucGiangDay)
router.delete('/delete/:id', authMiddleWare, HinhThucGiangDayController.deleteHinhThucGiangDay)
router.get('/get-all', HinhThucGiangDayController.getAllHinhThucGiangDay)
router.post('/delete-many', authMiddleWare, HinhThucGiangDayController.deleteMany)
router.get('/get-all-type', HinhThucGiangDayController.getAllType)
module.exports = router