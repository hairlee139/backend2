const express = require("express");
const router = express.Router()
const DanhMucTinhController = require('../controllers/DanhMucTinhController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucTinhController.createDanhMucTinh)
router.put('/update/:id', DanhMucTinhController.updateDanhMucTinh)
router.get('/get-details/:id', DanhMucTinhController.getDetailsDanhMucTinh)
router.delete('/delete/:id', DanhMucTinhController.deleteDanhMucTinh)
router.get('/get-all', DanhMucTinhController.getAllDanhMucTinh)
router.post('/delete-many', DanhMucTinhController.deleteMany)
router.get('/get-all-type', DanhMucTinhController.getAllType)

module.exports = router