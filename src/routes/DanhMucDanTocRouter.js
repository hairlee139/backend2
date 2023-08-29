const express = require("express");
const router = express.Router()
const DanhMucDanTocController = require('../controllers/DanhMucDanTocController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucDanTocController.createDanhMucDanToc)
router.put('/update/:id', DanhMucDanTocController.updateDanhMucDanToc)
router.get('/get-details/:id', DanhMucDanTocController.getDetailsDanhMucDanToc)
router.delete('/delete/:id', DanhMucDanTocController.deleteDanhMucDanToc)
router.get('/get-all', DanhMucDanTocController.getAllDanhMucDanToc)
router.post('/delete-many', DanhMucDanTocController.deleteMany)
router.get('/get-all-type', DanhMucDanTocController.getAllType)

module.exports = router