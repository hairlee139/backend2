const express = require("express");
const router = express.Router()
const HopDongController = require('../controllers/HopDongController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HopDongController.createHopDong)
router.put('/update/:id', authMiddleWare, HopDongController.updateHopDong)
router.get('/get-details/:id', HopDongController.getDetailsHopDong)
router.delete('/delete/:id', authMiddleWare, HopDongController.deleteHopDong)
router.get('/get-all', HopDongController.getAllHopDong)
router.post('/delete-many', authMiddleWare, HopDongController.deleteMany)
router.get('/get-all-type', HopDongController.getAllType)
router.get('/get-by-id/:id', HopDongController.getHopDongByQuanNhanId)
router.post('/pushdata/:id', HopDongController.updateHTCVLists)
module.exports = router