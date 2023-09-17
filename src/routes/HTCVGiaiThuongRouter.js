const express = require("express");
const router = express.Router()
const HTCVGiaiThuongController = require('../controllers/HTCVGiaiThuongController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HTCVGiaiThuongController.createHTCVGiaiThuong)
router.put('/update/:id', authMiddleWare, HTCVGiaiThuongController.updateHTCVGiaiThuong)
router.get('/get-details/:id', HTCVGiaiThuongController.getDetailsHTCVGiaiThuong)
router.delete('/delete/:id', authMiddleWare, HTCVGiaiThuongController.deleteHTCVGiaiThuong)
router.get('/get-all', HTCVGiaiThuongController.getAllHTCVGiaiThuong)
router.post('/delete-many', authMiddleWare, HTCVGiaiThuongController.deleteMany)
router.get('/get-all-type', HTCVGiaiThuongController.getAllType)
router.get('/get-by-id/:id', HTCVGiaiThuongController.getHTCVGiaiThuongByQuanNhanId)

module.exports = router