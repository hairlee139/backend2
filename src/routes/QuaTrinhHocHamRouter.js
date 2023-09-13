const express = require("express");
const router = express.Router()
const QuaTrinhHocHamController = require('../controllers/QuaTrinhHocHamController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', QuaTrinhHocHamController.createQuaTrinhHocHam)
router.put('/update/:id', authMiddleWare, QuaTrinhHocHamController.updateQuaTrinhHocHam)
router.get('/get-details/:id', QuaTrinhHocHamController.getDetailsQuaTrinhHocHam)
router.delete('/delete/:id', authMiddleWare, QuaTrinhHocHamController.deleteQuaTrinhHocHam)
router.get('/get-all', QuaTrinhHocHamController.getAllQuaTrinhHocHam)
router.post('/delete-many', authMiddleWare, QuaTrinhHocHamController.deleteMany)
router.get('/get-all-type', QuaTrinhHocHamController.getAllType)
router.get('/get-by-id/:id', QuaTrinhHocHamController.getQuaTrinhHocHamByQuanNhanId)

module.exports = router