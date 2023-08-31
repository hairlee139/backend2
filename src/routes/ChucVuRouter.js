const express = require("express");
const router = express.Router()
const ChucVuController = require('../controllers/ChucVuController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', ChucVuController.createChucVu)
router.put('/update/:id', authMiddleWare, ChucVuController.updateChucVu)
router.get('/get-details/:id', ChucVuController.getDetailsChucVu)
router.delete('/delete/:id', authMiddleWare, ChucVuController.deleteChucVu)
router.get('/get-all', ChucVuController.getAllChucVu)
router.post('/delete-many', authMiddleWare, ChucVuController.deleteMany)
router.get('/get-all-type', ChucVuController.getAllType)

module.exports = router