const express = require("express");
const router = express.Router()
const DanhMucCDCMKTController = require('../controllers/DanhMucCDCMKTController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucCDCMKTController.createDanhMucCDCMKT)
router.put('/update/:id', DanhMucCDCMKTController.updateDanhMucCDCMKT)
router.get('/get-details/:id', DanhMucCDCMKTController.getDetailsDanhMucCDCMKT)
router.delete('/delete/:id', DanhMucCDCMKTController.deleteDanhMucCDCMKT)
router.get('/get-all', DanhMucCDCMKTController.getAllDanhMucCDCMKT)
router.post('/delete-many', DanhMucCDCMKTController.deleteMany)
router.get('/get-all-type', DanhMucCDCMKTController.getAllType)

module.exports = router