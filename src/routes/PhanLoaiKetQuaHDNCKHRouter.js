const express = require("express");
const router = express.Router()
const PhanLoaiKetQuaController = require('../controllers/PhanLoaiKetQuaHDNCKHController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', PhanLoaiKetQuaController.createPhanLoaiKetQua)
router.put('/update/:id', authMiddleWare, PhanLoaiKetQuaController.updatePhanLoaiKetQua)
router.get('/get-details/:id', PhanLoaiKetQuaController.getDetailsPhanLoaiKetQua)
router.delete('/delete/:id', authMiddleWare, PhanLoaiKetQuaController.deletePhanLoaiKetQua)
router.get('/get-all', PhanLoaiKetQuaController.getAllPhanLoaiKetQua)
router.post('/delete-many', authMiddleWare, PhanLoaiKetQuaController.deleteMany)
router.get('/get-all-type', PhanLoaiKetQuaController.getAllType)
module.exports = router