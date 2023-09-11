const express = require("express");
const router = express.Router()
const LoaiDeTaiController = require('../controllers/LoaiDeTaiController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', LoaiDeTaiController.createLoaiDeTai)
router.put('/update/:id', authMiddleWare, LoaiDeTaiController.updateLoaiDeTai)
router.get('/get-details/:id', LoaiDeTaiController.getDetailsLoaiDeTai)
router.delete('/delete/:id', authMiddleWare, LoaiDeTaiController.deleteLoaiDeTai)
router.get('/get-all', LoaiDeTaiController.getAllLoaiDeTai)
router.post('/delete-many', authMiddleWare, LoaiDeTaiController.deleteMany)
router.get('/get-all-type', LoaiDeTaiController.getAllType)
module.exports = router