const express = require("express");
const router = express.Router()
const DanhMucKyLuatController = require('../controllers/DanhMucHinhThucKyLuatController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucKyLuatController.createDanhMucKyLuat)
router.put('/update/:id', DanhMucKyLuatController.updateDanhMucKyLuat)
router.get('/get-details/:id', DanhMucKyLuatController.getDetailsDanhMucKyLuat)
router.delete('/delete/:id', DanhMucKyLuatController.deleteDanhMucKyLuat)
router.get('/get-all', DanhMucKyLuatController.getAllDanhMucKyLuat)
router.post('/delete-many', DanhMucKyLuatController.deleteMany)
router.get('/get-all-type', DanhMucKyLuatController.getAllType)

module.exports = router