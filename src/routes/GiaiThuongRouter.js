const express = require("express");
const router = express.Router()
const GiaiThuongController = require('../controllers/GiaiThuongController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', GiaiThuongController.createGiaiThuong)
router.put('/update/:id', authMiddleWare, GiaiThuongController.updateGiaiThuong)
router.get('/get-details/:id', GiaiThuongController.getDetailsGiaiThuong)
router.delete('/delete/:id', authMiddleWare, GiaiThuongController.deleteGiaiThuong)
router.get('/get-all', GiaiThuongController.getAllGiaiThuong)
router.post('/delete-many', authMiddleWare, GiaiThuongController.deleteMany)
router.get('/get-all-type', GiaiThuongController.getAllType)
router.get('/get-by-id/:id', GiaiThuongController.getGiaiThuongByQuanNhanId)
router.post('/pushdata/:id', GiaiThuongController.updateHTCVLists)
module.exports = router