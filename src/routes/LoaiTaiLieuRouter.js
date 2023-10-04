const express = require("express");
const router = express.Router()
const LoaiTaiLieuController = require('../controllers/LoaiTaiLieuController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', LoaiTaiLieuController.createLoaiTaiLieu)
router.put('/update/:id', authMiddleWare, LoaiTaiLieuController.updateLoaiTaiLieu)
router.get('/get-details/:id', LoaiTaiLieuController.getDetailsLoaiTaiLieu)
router.delete('/delete/:id', authMiddleWare, LoaiTaiLieuController.deleteLoaiTaiLieu)
router.get('/get-all', LoaiTaiLieuController.getAllLoaiTaiLieu)
router.post('/delete-many', authMiddleWare, LoaiTaiLieuController.deleteMany)
router.get('/get-all-type', LoaiTaiLieuController.getAllType)


module.exports = router