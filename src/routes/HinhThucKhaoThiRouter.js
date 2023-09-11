const express = require("express");
const router = express.Router()
const HinhThucKhaoThiController = require('../controllers/HinhThucKhaoThiController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HinhThucKhaoThiController.createHinhThucKhaoThi)
router.put('/update/:id', authMiddleWare, HinhThucKhaoThiController.updateHinhThucKhaoThi)
router.get('/get-details/:id', HinhThucKhaoThiController.getDetailsHinhThucKhaoThi)
router.delete('/delete/:id', authMiddleWare, HinhThucKhaoThiController.deleteHinhThucKhaoThi)
router.get('/get-all', HinhThucKhaoThiController.getAllHinhThucKhaoThi)
router.post('/delete-many', authMiddleWare, HinhThucKhaoThiController.deleteMany)
router.get('/get-all-type', HinhThucKhaoThiController.getAllType)
module.exports = router