const express = require("express");
const router = express.Router()
const HuongDanNCKHController = require('../controllers/HuongDanNCKHController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HuongDanNCKHController.createHuongDanNCKH)
router.put('/update/:id', authMiddleWare, HuongDanNCKHController.updateHuongDanNCKH)
router.get('/get-details/:id', HuongDanNCKHController.getDetailsHuongDanNCKH)
router.delete('/delete/:id', authMiddleWare, HuongDanNCKHController.deleteHuongDanNCKH)
router.get('/get-all', HuongDanNCKHController.getAllHuongDanNCKH)
router.post('/delete-many', authMiddleWare, HuongDanNCKHController.deleteMany)
router.get('/get-all-type', HuongDanNCKHController.getAllType)
router.get('/get-by-id/:id', HuongDanNCKHController.getHuongDanNCKHByQuanNhanId)

module.exports = router