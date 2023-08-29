const express = require("express");
const router = express.Router()
const DanhMucLoaiDonViController = require('../controllers/DanhMucLoaiDonViController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucLoaiDonViController.createDanhMucLoaiDonVi)
router.put('/update/:id', DanhMucLoaiDonViController.updateDanhMucLoaiDonVi)
router.get('/get-details/:id', DanhMucLoaiDonViController.getDetailsDanhMucLoaiDonVi)
router.delete('/delete/:id', DanhMucLoaiDonViController.deleteDanhMucLoaiDonVi)
router.get('/get-all', DanhMucLoaiDonViController.getAllDanhMucLoaiDonVi)
router.post('/delete-many', DanhMucLoaiDonViController.deleteMany)
router.get('/get-all-type', DanhMucLoaiDonViController.getAllType)

module.exports = router