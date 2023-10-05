const express = require("express");
const router = express.Router()
const DinhMucChucDanhController = require('../controllers/DinhMucChucDanhController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DinhMucChucDanhController.createDinhMucChucDanh)
router.put('/update/:id', DinhMucChucDanhController.updateDinhMucChucDanh)
router.get('/get-details/:id', DinhMucChucDanhController.getDetailsDinhMucChucDanh)
router.delete('/delete/:id', DinhMucChucDanhController.deleteDinhMucChucDanh)
router.get('/get-all', DinhMucChucDanhController.getAllDinhMucChucDanh)
router.post('/delete-many', DinhMucChucDanhController.deleteMany)
router.get('/get-all-type', DinhMucChucDanhController.getAllType)

module.exports = router