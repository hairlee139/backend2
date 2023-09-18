const express = require("express");
const router = express.Router()
const DieuChuyenCanBoController = require('../controllers/QuaTrinhDieuChuyenController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DieuChuyenCanBoController.createDieuChuyenCanBo)
router.put('/update/:id', authMiddleWare, DieuChuyenCanBoController.updateDieuChuyenCanBo)
router.get('/get-details/:id', DieuChuyenCanBoController.getDetailsDieuChuyenCanBo)
router.delete('/delete/:id', authMiddleWare, DieuChuyenCanBoController.deleteDieuChuyenCanBo)
router.get('/get-all', DieuChuyenCanBoController.getAllDieuChuyenCanBo)
router.post('/delete-many', authMiddleWare, DieuChuyenCanBoController.deleteMany)
router.get('/get-all-type', DieuChuyenCanBoController.getAllType)
router.get('/get-by-id/:id', DieuChuyenCanBoController.getDieuChuyenCanBoByQuanNhanId)

module.exports = router