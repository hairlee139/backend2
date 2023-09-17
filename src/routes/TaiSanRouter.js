const express = require("express");
const router = express.Router()
const TaiSanController = require('../controllers/TaiSanController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', TaiSanController.createTaiSan)
router.put('/update/:id', authMiddleWare, TaiSanController.updateTaiSan)
router.get('/get-details/:id', TaiSanController.getDetailsTaiSan)
router.delete('/delete/:id', authMiddleWare, TaiSanController.deleteTaiSan)
router.get('/get-all', TaiSanController.getAllTaiSan)
router.post('/delete-many', authMiddleWare, TaiSanController.deleteMany)
router.get('/get-all-type', TaiSanController.getAllType)
router.get('/get-by-id/:id', TaiSanController.getTaiSanByQuanNhanId)

module.exports = router