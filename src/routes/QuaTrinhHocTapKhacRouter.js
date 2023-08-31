const express = require("express");
const router = express.Router()
const QuaTrinhHocTapKhacController = require('../controllers/QuaTrinhHocTapKhacController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', QuaTrinhHocTapKhacController.createQuaTrinhHocTapKhac)
router.put('/update/:id', authMiddleWare, QuaTrinhHocTapKhacController.updateQuaTrinhHocTapKhac)
router.get('/get-details/:id', QuaTrinhHocTapKhacController.getDetailsQuaTrinhHocTapKhac)
router.delete('/delete/:id', authMiddleWare, QuaTrinhHocTapKhacController.deleteQuaTrinhHocTapKhac)
router.get('/get-all', QuaTrinhHocTapKhacController.getAllQuaTrinhHocTapKhac)
router.post('/delete-many', authMiddleWare, QuaTrinhHocTapKhacController.deleteMany)
router.get('/get-all-type', QuaTrinhHocTapKhacController.getAllType)
router.get('/get-by-id/:id', QuaTrinhHocTapKhacController.getQuaTrinhHocTapKhacByQuanNhanId)

module.exports = router