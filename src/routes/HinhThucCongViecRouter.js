const express = require("express");
const router = express.Router()
const HinhThucCongViecController = require('../controllers/HinhThucCongViecController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HinhThucCongViecController.createHinhThucCongViec)
router.put('/update/:id', authMiddleWare, HinhThucCongViecController.updateHinhThucCongViec)
router.get('/get-details/:id', HinhThucCongViecController.getDetailsHinhThucCongViec)
router.delete('/delete/:id', authMiddleWare, HinhThucCongViecController.deleteHinhThucCongViec)
router.get('/get-all', HinhThucCongViecController.getAllHinhThucCongViec)
router.post('/delete-many', authMiddleWare, HinhThucCongViecController.deleteMany)
router.get('/get-all-type', HinhThucCongViecController.getAllType)
module.exports = router