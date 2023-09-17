const express = require("express");
const router = express.Router()
const LoaiQuanHeController = require('../controllers/LoaiQuanHeController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', LoaiQuanHeController.createLoaiQuanHe)
router.put('/update/:id', authMiddleWare, LoaiQuanHeController.updateLoaiQuanHe)
router.get('/get-details/:id', LoaiQuanHeController.getDetailsLoaiQuanHe)
router.delete('/delete/:id', authMiddleWare, LoaiQuanHeController.deleteLoaiQuanHe)
router.get('/get-all', LoaiQuanHeController.getAllLoaiQuanHe)
router.post('/delete-many', authMiddleWare, LoaiQuanHeController.deleteMany)
router.get('/get-all-type', LoaiQuanHeController.getAllType)


module.exports = router