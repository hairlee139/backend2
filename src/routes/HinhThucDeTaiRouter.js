const express = require("express");
const router = express.Router()
const HinhThucDeTaiController = require('../controllers/HinhThucDeTaiController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HinhThucDeTaiController.createHinhThucDeTai)
router.put('/update/:id', authMiddleWare, HinhThucDeTaiController.updateHinhThucDeTai)
router.get('/get-details/:id', HinhThucDeTaiController.getDetailsHinhThucDeTai)
router.delete('/delete/:id', authMiddleWare, HinhThucDeTaiController.deleteHinhThucDeTai)
router.get('/get-all', HinhThucDeTaiController.getAllHinhThucDeTai)
router.post('/delete-many', authMiddleWare, HinhThucDeTaiController.deleteMany)
router.get('/get-all-type', HinhThucDeTaiController.getAllType)
module.exports = router