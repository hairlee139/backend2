const express = require("express");
const router = express.Router()
const QuaTrinhQuanHamController = require('../controllers/QuaTrinhQuanHamController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', QuaTrinhQuanHamController.createQuaTrinhQuanHam)
router.put('/update/:id', authMiddleWare, QuaTrinhQuanHamController.updateQuaTrinhQuanHam)
router.get('/get-details/:id', QuaTrinhQuanHamController.getDetailsQuaTrinhQuanHam)
router.delete('/delete/:id', authMiddleWare, QuaTrinhQuanHamController.deleteQuaTrinhQuanHam)
router.get('/get-all', QuaTrinhQuanHamController.getAllQuaTrinhQuanHam)
router.post('/delete-many', authMiddleWare, QuaTrinhQuanHamController.deleteMany)
router.get('/get-all-type', QuaTrinhQuanHamController.getAllType)
router.get('/get-by-id/:id', QuaTrinhQuanHamController.getQuaTrinhQuanHamByQuanNhanId)

module.exports = router