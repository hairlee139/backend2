const express = require("express");
const router = express.Router()
const QuaTrinhCongTacController = require('../controllers/QuaTrinhCongTacController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', QuaTrinhCongTacController.createQuaTrinhCongTac)
router.put('/update/:id', authMiddleWare, QuaTrinhCongTacController.updateQuaTrinhCongTac)
router.get('/get-details/:id', QuaTrinhCongTacController.getDetailsQuaTrinhCongTac)
router.delete('/delete/:id', authMiddleWare, QuaTrinhCongTacController.deleteQuaTrinhCongTac)
router.get('/get-all', QuaTrinhCongTacController.getAllQuaTrinhCongTac)
router.post('/delete-many', authMiddleWare, QuaTrinhCongTacController.deleteMany)
router.get('/get-all-type', QuaTrinhCongTacController.getAllType)
router.get('/get-by-id/:id', QuaTrinhCongTacController.getQuaTrinhCongTacByQuanNhanId)

module.exports = router