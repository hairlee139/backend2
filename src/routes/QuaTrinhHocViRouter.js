const express = require("express");
const router = express.Router()
const QuaTrinhHocViController = require('../controllers/QuaTrinhHocViController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', QuaTrinhHocViController.createQuaTrinhHocVi)
router.put('/update/:id', authMiddleWare, QuaTrinhHocViController.updateQuaTrinhHocVi)
router.get('/get-details/:id', QuaTrinhHocViController.getDetailsQuaTrinhHocVi)
router.delete('/delete/:id', authMiddleWare, QuaTrinhHocViController.deleteQuaTrinhHocVi)
router.get('/get-all', QuaTrinhHocViController.getAllQuaTrinhHocVi)
router.post('/delete-many', authMiddleWare, QuaTrinhHocViController.deleteMany)
router.get('/get-all-type', QuaTrinhHocViController.getAllType)
router.get('/get-by-id/:id', QuaTrinhHocViController.getQuaTrinhHocViByQuanNhanId)

module.exports = router