const express = require("express");
const router = express.Router()
const HinhThucHuongDanController = require('../controllers/HinhThucHuongDanController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HinhThucHuongDanController.createHinhThucHuongDan)
router.put('/update/:id', authMiddleWare, HinhThucHuongDanController.updateHinhThucHuongDan)
router.get('/get-details/:id', HinhThucHuongDanController.getDetailsHinhThucHuongDan)
router.delete('/delete/:id', authMiddleWare, HinhThucHuongDanController.deleteHinhThucHuongDan)
router.get('/get-all', HinhThucHuongDanController.getAllHinhThucHuongDan)
router.post('/delete-many', authMiddleWare, HinhThucHuongDanController.deleteMany)
router.get('/get-all-type', HinhThucHuongDanController.getAllType)
module.exports = router