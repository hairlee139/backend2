const express = require("express");
const router = express.Router()
const TaiKhaoThiController = require('../controllers/TaiKhaoThiController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', TaiKhaoThiController.createTaiKhaoThi)
router.put('/update/:id', authMiddleWare, TaiKhaoThiController.updateTaiKhaoThi)
router.get('/get-details/:id', TaiKhaoThiController.getDetailsTaiKhaoThi)
router.delete('/delete/:id', authMiddleWare, TaiKhaoThiController.deleteTaiKhaoThi)
router.get('/get-all', TaiKhaoThiController.getAllTaiKhaoThi)
router.post('/delete-many', authMiddleWare, TaiKhaoThiController.deleteMany)
router.get('/get-all-type', TaiKhaoThiController.getAllType)
router.get('/get-by-id/:id', TaiKhaoThiController.getTaiKhaoThiByQuanNhanId)

module.exports = router