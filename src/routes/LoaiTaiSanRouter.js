const express = require("express");
const router = express.Router()
const LoaiTaiSanController = require('../controllers/LoaiTaiSanController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', LoaiTaiSanController.createLoaiTaiSan)
router.put('/update/:id', authMiddleWare, LoaiTaiSanController.updateLoaiTaiSan)
router.get('/get-details/:id', LoaiTaiSanController.getDetailsLoaiTaiSan)
router.delete('/delete/:id', authMiddleWare, LoaiTaiSanController.deleteLoaiTaiSan)
router.get('/get-all', LoaiTaiSanController.getAllLoaiTaiSan)
router.post('/delete-many', authMiddleWare, LoaiTaiSanController.deleteMany)
router.get('/get-all-type', LoaiTaiSanController.getAllType)


module.exports = router