const express = require("express");
const router = express.Router()
const HinhThucKhenThuongController = require('../controllers/HinhThucKhenThuongController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HinhThucKhenThuongController.createHinhThucKhenThuong)
router.put('/update/:id', authMiddleWare, HinhThucKhenThuongController.updateHinhThucKhenThuong)
router.get('/get-details/:id', HinhThucKhenThuongController.getDetailsHinhThucKhenThuong)
router.delete('/delete/:id', authMiddleWare, HinhThucKhenThuongController.deleteHinhThucKhenThuong)
router.get('/get-all', HinhThucKhenThuongController.getAllHinhThucKhenThuong)
router.post('/delete-many', authMiddleWare, HinhThucKhenThuongController.deleteMany)
router.get('/get-all-type', HinhThucKhenThuongController.getAllType)
module.exports = router