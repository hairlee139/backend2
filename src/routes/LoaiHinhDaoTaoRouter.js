const express = require("express");
const router = express.Router()
const LoaiHinhDaoTaoController = require('../controllers/LoaiHinhDaoTaoController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', LoaiHinhDaoTaoController.createLoaiHinhDaoTao)
router.put('/update/:id', authMiddleWare, LoaiHinhDaoTaoController.updateLoaiHinhDaoTao)
router.get('/get-details/:id', LoaiHinhDaoTaoController.getDetailsLoaiHinhDaoTao)
router.delete('/delete/:id', authMiddleWare, LoaiHinhDaoTaoController.deleteLoaiHinhDaoTao)
router.get('/get-all', LoaiHinhDaoTaoController.getAllLoaiHinhDaoTao)
router.post('/delete-many', authMiddleWare, LoaiHinhDaoTaoController.deleteMany)
router.get('/get-all-type', LoaiHinhDaoTaoController.getAllType)
module.exports = router