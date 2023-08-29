const express = require("express");
const router = express.Router()
const DanhMucHocViController = require('../controllers/DanhMucHocViController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucHocViController.createDanhMucHocVi)
router.put('/update/:id', DanhMucHocViController.updateDanhMucHocVi)
router.get('/get-details/:id', DanhMucHocViController.getDetailsDanhMucHocVi)
router.delete('/delete/:id', DanhMucHocViController.deleteDanhMucHocVi)
router.get('/get-all', DanhMucHocViController.getAllDanhMucHocVi)
router.post('/delete-many', DanhMucHocViController.deleteMany)
router.get('/get-all-type', DanhMucHocViController.getAllType)

module.exports = router