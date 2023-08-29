const express = require("express");
const router = express.Router()
const DanhMucHuyenController = require('../controllers/DanhMucHuyenController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucHuyenController.createDanhMucHuyen)
router.put('/update/:id', DanhMucHuyenController.updateDanhMucHuyen)
router.get('/get-details/:id', DanhMucHuyenController.getDetailsDanhMucHuyen)
router.delete('/delete/:id', DanhMucHuyenController.deleteDanhMucHuyen)
router.get('/get-all', DanhMucHuyenController.getAllDanhMucHuyen)
router.post('/delete-many', DanhMucHuyenController.deleteMany)
router.get('/get-all-type', DanhMucHuyenController.getAllType)

module.exports = router