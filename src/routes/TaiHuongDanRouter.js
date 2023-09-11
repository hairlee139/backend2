const express = require("express");
const router = express.Router()
const TaiHuongDanController = require('../controllers/TaiHuongDanController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', TaiHuongDanController.createTaiHuongDan)
router.put('/update/:id', authMiddleWare, TaiHuongDanController.updateTaiHuongDan)
router.get('/get-details/:id', TaiHuongDanController.getDetailsTaiHuongDan)
router.delete('/delete/:id', authMiddleWare, TaiHuongDanController.deleteTaiHuongDan)
router.get('/get-all', TaiHuongDanController.getAllTaiHuongDan)
router.post('/delete-many', authMiddleWare, TaiHuongDanController.deleteMany)
router.get('/get-all-type', TaiHuongDanController.getAllType)
router.get('/get-by-id/:id', TaiHuongDanController.getTaiHuongDanByQuanNhanId)

module.exports = router