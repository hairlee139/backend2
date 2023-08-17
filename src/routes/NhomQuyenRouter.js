const express = require("express");
const router = express.Router()
const NhomQuyenController = require('../controllers/NhomQuyenController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', NhomQuyenController.createNhomQuyen)
router.put('/update/:id', authMiddleWare, NhomQuyenController.updateNhomQuyen)
router.get('/get-details/:id', NhomQuyenController.getDetailsNhomQuyen)
router.delete('/delete/:id', authMiddleWare, NhomQuyenController.deleteNhomQuyen)
router.get('/get-all', NhomQuyenController.getAllNhomQuyen)
router.post('/delete-many', authMiddleWare, NhomQuyenController.deleteMany)
router.get('/get-all-type', NhomQuyenController.getAllType)

module.exports = router