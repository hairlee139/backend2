const express = require("express");
const router = express.Router()
const QuaTrinhKyLuatController = require('../controllers/QuaTrinhKyLuatController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', QuaTrinhKyLuatController.createQuaTrinhKyLuat)
router.put('/update/:id', authMiddleWare, QuaTrinhKyLuatController.updateQuaTrinhKyLuat)
router.get('/get-details/:id', QuaTrinhKyLuatController.getDetailsQuaTrinhKyLuat)
router.delete('/delete/:id', authMiddleWare, QuaTrinhKyLuatController.deleteQuaTrinhKyLuat)
router.get('/get-all', QuaTrinhKyLuatController.getAllQuaTrinhKyLuat)
router.post('/delete-many', authMiddleWare, QuaTrinhKyLuatController.deleteMany)
router.get('/get-all-type', QuaTrinhKyLuatController.getAllType)
router.get('/get-by-id/:id', QuaTrinhKyLuatController.getQuaTrinhKyLuatByQuanNhanId)

module.exports = router