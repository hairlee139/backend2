const express = require("express");
const router = express.Router()
const DanhMucKhenThuongController = require('../controllers/DanhMucHinhThucKhenThuongController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucKhenThuongController.createDanhMucKhenThuong)
router.put('/update/:id', DanhMucKhenThuongController.updateDanhMucKhenThuong)
router.get('/get-details/:id', DanhMucKhenThuongController.getDetailsDanhMucKhenThuong)
router.delete('/delete/:id', DanhMucKhenThuongController.deleteDanhMucKhenThuong)
router.get('/get-all', DanhMucKhenThuongController.getAllDanhMucKhenThuong)
router.post('/delete-many', DanhMucKhenThuongController.deleteMany)
router.get('/get-all-type', DanhMucKhenThuongController.getAllType)

module.exports = router