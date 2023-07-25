const express = require("express");
const router = express.Router()
const QuanHamController = require('../controllers/QuanHamController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', QuanHamController.createQuanHam)
router.put('/update/:id', authMiddleWare, QuanHamController.updateQuanHam)
router.get('/get-details/:id', QuanHamController.getDetailsQuanHam)
router.delete('/delete/:id', authMiddleWare, QuanHamController.deleteQuanHam)
router.get('/get-all', QuanHamController.getAllQuanHam)
router.post('/delete-many', authMiddleWare, QuanHamController.deleteMany)
router.get('/get-all-type', QuanHamController.getAllType)

module.exports = router