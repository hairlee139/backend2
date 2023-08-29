const express = require("express");
const router = express.Router()
const DanhMucCheDoUTController = require('../controllers/DanhMucCheDoUTController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucCheDoUTController.createDanhMucCheDoUT)
router.put('/update/:id', DanhMucCheDoUTController.updateDanhMucCheDoUT)
router.get('/get-details/:id', DanhMucCheDoUTController.getDetailsDanhMucCheDoUT)
router.delete('/delete/:id', DanhMucCheDoUTController.deleteDanhMucCheDoUT)
router.get('/get-all', DanhMucCheDoUTController.getAllDanhMucCheDoUT)
router.post('/delete-many', DanhMucCheDoUTController.deleteMany)
router.get('/get-all-type', DanhMucCheDoUTController.getAllType)

module.exports = router