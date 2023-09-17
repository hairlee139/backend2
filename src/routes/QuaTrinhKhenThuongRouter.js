const express = require("express");
const router = express.Router()
const QuaTrinhKhenThuongController = require('../controllers/QuaTrinhKhenThuongController');

const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', QuaTrinhKhenThuongController.createQuaTrinhKhenThuong)
router.put('/update/:id', authMiddleWare, QuaTrinhKhenThuongController.updateQuaTrinhKhenThuong)
router.get('/get-details/:id', QuaTrinhKhenThuongController.getDetailsQuaTrinhKhenThuong)
router.delete('/delete/:id', authMiddleWare, QuaTrinhKhenThuongController.deleteQuaTrinhKhenThuong)
router.get('/get-all', QuaTrinhKhenThuongController.getAllQuaTrinhKhenThuong)
router.post('/delete-many', authMiddleWare, QuaTrinhKhenThuongController.deleteMany)
router.get('/get-all-type', QuaTrinhKhenThuongController.getAllType)
router.get('/get-by-id/:id', QuaTrinhKhenThuongController.getQuaTrinhKhenThuongByQuanNhanId)

module.exports = router