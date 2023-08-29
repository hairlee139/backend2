const express = require("express");
const router = express.Router()
const DanhMucTonGiaoController = require('../controllers/DanhMucTonGiaoController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucTonGiaoController.createDanhMucTonGiao)
router.put('/update/:id', DanhMucTonGiaoController.updateDanhMucTonGiao)
router.get('/get-details/:id', DanhMucTonGiaoController.getDetailsDanhMucTonGiao)
router.delete('/delete/:id', DanhMucTonGiaoController.deleteDanhMucTonGiao)
router.get('/get-all', DanhMucTonGiaoController.getAllDanhMucTonGiao)
router.post('/delete-many', DanhMucTonGiaoController.deleteMany)
router.get('/get-all-type', DanhMucTonGiaoController.getAllType)

module.exports = router