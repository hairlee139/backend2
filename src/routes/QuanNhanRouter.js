const express = require("express");
const router = express.Router()
const QuanNhanController = require('../controllers/QuanNhanController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', QuanNhanController.createQuanNhan)
router.put('/update/:id', authMiddleWare, QuanNhanController.updateQuanNhan)
router.get('/get-details/:id', QuanNhanController.getDetailsQuanNhan)
router.delete('/delete/:id', authMiddleWare, QuanNhanController.deleteQuanNhan)
router.get('/get-all', QuanNhanController.getAllQuanNhan)
router.post('/delete-many', authMiddleWare, QuanNhanController.deleteMany)
router.get('/get-all-type', QuanNhanController.getAllType)

module.exports = router