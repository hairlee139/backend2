const express = require("express");
const router = express.Router()
const LoaiQuanNhanController = require('../controllers/LoaiQuanNhanController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', LoaiQuanNhanController.createLoaiQuanNhan)
router.put('/update/:id', authMiddleWare, LoaiQuanNhanController.updateLoaiQuanNhan)
router.get('/get-details/:id', LoaiQuanNhanController.getDetailsLoaiQuanNhan)
router.delete('/delete/:id', authMiddleWare, LoaiQuanNhanController.deleteLoaiQuanNhan)
router.get('/get-all', LoaiQuanNhanController.getAllLoaiQuanNhan)
router.post('/delete-many', authMiddleWare, LoaiQuanNhanController.deleteMany)
router.get('/get-all-type', LoaiQuanNhanController.getAllType)

module.exports = router