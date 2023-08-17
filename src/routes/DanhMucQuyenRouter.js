const express = require("express");
const router = express.Router()
const DanhMucQuyenController = require('../controllers/DanhMucQuyenController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucQuyenController.createDanhMucQuyen)
router.put('/update/:id',  DanhMucQuyenController.updateDanhMucQuyen)
router.get('/get-details/:id', DanhMucQuyenController.getDetailsDanhMucQuyen)
router.delete('/delete/:id',  DanhMucQuyenController.deleteDanhMucQuyen)
router.get('/get-all', DanhMucQuyenController.getAllDanhMucQuyen)
router.post('/delete-many',  DanhMucQuyenController.deleteMany)
router.get('/get-all-type', DanhMucQuyenController.getAllType)

module.exports = router