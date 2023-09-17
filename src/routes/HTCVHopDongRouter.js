const express = require("express");
const router = express.Router()
const HTCVHopDongController = require('../controllers/HTCVHopDongController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HTCVHopDongController.createHTCVHopDong)
router.put('/update/:id', authMiddleWare, HTCVHopDongController.updateHTCVHopDong)
router.get('/get-details/:id', HTCVHopDongController.getDetailsHTCVHopDong)
router.delete('/delete/:id', authMiddleWare, HTCVHopDongController.deleteHTCVHopDong)
router.get('/get-all', HTCVHopDongController.getAllHTCVHopDong)
router.post('/delete-many', authMiddleWare, HTCVHopDongController.deleteMany)
router.get('/get-all-type', HTCVHopDongController.getAllType)
router.get('/get-by-id/:id', HTCVHopDongController.getHTCVHopDongByQuanNhanId)

module.exports = router