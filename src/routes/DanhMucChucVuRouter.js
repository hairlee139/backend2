const express = require("express");
const router = express.Router()
const DanhMucChucVuController = require('../controllers/DanhMucChucVuController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucChucVuController.createDanhMucChucVu)
router.put('/update/:id', DanhMucChucVuController.updateDanhMucChucVu)
router.get('/get-details/:id', DanhMucChucVuController.getDetailsDanhMucChucVu)
router.delete('/delete/:id', DanhMucChucVuController.deleteDanhMucChucVu)
router.get('/get-all', DanhMucChucVuController.getAllDanhMucChucVu)
router.post('/delete-many', DanhMucChucVuController.deleteMany)
router.get('/get-all-type', DanhMucChucVuController.getAllType)

module.exports = router