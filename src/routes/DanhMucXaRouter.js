const express = require("express");
const router = express.Router()
const DanhMucXaController = require('../controllers/DanhMucXaController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucXaController.createDanhMucXa)
router.put('/update/:id', DanhMucXaController.updateDanhMucXa)
router.get('/get-details/:id', DanhMucXaController.getDetailsDanhMucXa)
router.delete('/delete/:id', DanhMucXaController.deleteDanhMucXa)
router.get('/get-all', DanhMucXaController.getAllDanhMucXa)
router.post('/delete-many', DanhMucXaController.deleteMany)
router.get('/get-all-type', DanhMucXaController.getAllTypeHuyen)
router.get('/get-all-type-tinh', DanhMucXaController.getAllTypeTinh)
module.exports = router