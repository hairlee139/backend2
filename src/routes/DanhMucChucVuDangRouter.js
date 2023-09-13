const express = require("express");
const router = express.Router()
const DanhMucChucVuDangController = require('../controllers/DanhMucChucVuDangController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucChucVuDangController.createDanhMucChucVuDang)
router.put('/update/:id', DanhMucChucVuDangController.updateDanhMucChucVuDang)
router.get('/get-details/:id', DanhMucChucVuDangController.getDetailsDanhMucChucVuDang)
router.delete('/delete/:id', DanhMucChucVuDangController.deleteDanhMucChucVuDang)
router.get('/get-all', DanhMucChucVuDangController.getAllDanhMucChucVuDang)
router.post('/delete-many', DanhMucChucVuDangController.deleteMany)
router.get('/get-all-type', DanhMucChucVuDangController.getAllType)

module.exports = router