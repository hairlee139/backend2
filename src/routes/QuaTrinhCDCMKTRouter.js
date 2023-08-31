const express = require("express");
const router = express.Router()
const QuaTrinhCDCMKTController = require('../controllers/QuaTrinhCDCMKTController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', QuaTrinhCDCMKTController.createQuaTrinhCDCMKT)
router.put('/update/:id', authMiddleWare, QuaTrinhCDCMKTController.updateQuaTrinhCDCMKT)
router.get('/get-details/:id', QuaTrinhCDCMKTController.getDetailsQuaTrinhCDCMKT)
router.delete('/delete/:id', authMiddleWare, QuaTrinhCDCMKTController.deleteQuaTrinhCDCMKT)
router.get('/get-all', QuaTrinhCDCMKTController.getAllQuaTrinhCDCMKT)
router.post('/delete-many', authMiddleWare, QuaTrinhCDCMKTController.deleteMany)
router.get('/get-all-type', QuaTrinhCDCMKTController.getAllType)
router.get('/get-by-id/:id', QuaTrinhCDCMKTController.getQuaTrinhCDCMKTByQuanNhanId)

module.exports = router