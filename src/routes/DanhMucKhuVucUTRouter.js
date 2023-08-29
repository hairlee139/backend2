const express = require("express");
const router = express.Router()
const DanhMucKhuVucUTController = require('../controllers/DanhMucKhuVucUTController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucKhuVucUTController.createDanhMucKhuVucUT)
router.put('/update/:id', DanhMucKhuVucUTController.updateDanhMucKhuVucUT)
router.get('/get-details/:id', DanhMucKhuVucUTController.getDetailsDanhMucKhuVucUT)
router.delete('/delete/:id', DanhMucKhuVucUTController.deleteDanhMucKhuVucUT)
router.get('/get-all', DanhMucKhuVucUTController.getAllDanhMucKhuVucUT)
router.post('/delete-many', DanhMucKhuVucUTController.deleteMany)
router.get('/get-all-type', DanhMucKhuVucUTController.getAllType)

module.exports = router