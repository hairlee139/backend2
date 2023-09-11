const express = require("express");
const router = express.Router()
const HinhThucDaoTaoController = require('../controllers/HinhThucDaoTaoController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HinhThucDaoTaoController.createHinhThucDaoTao)
router.put('/update/:id', authMiddleWare, HinhThucDaoTaoController.updateHinhThucDaoTao)
router.get('/get-details/:id', HinhThucDaoTaoController.getDetailsHinhThucDaoTao)
router.delete('/delete/:id', authMiddleWare, HinhThucDaoTaoController.deleteHinhThucDaoTao)
router.get('/get-all', HinhThucDaoTaoController.getAllHinhThucDaoTao)
router.post('/delete-many', authMiddleWare, HinhThucDaoTaoController.deleteMany)
router.get('/get-all-type', HinhThucDaoTaoController.getAllType)
module.exports = router