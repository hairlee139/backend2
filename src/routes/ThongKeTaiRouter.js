const express = require("express");
const router = express.Router()
const ThongKeTaiController = require('../controllers/ThongKeTaiController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', ThongKeTaiController.createThongKeTai)
// router.put('/update/:id', authMiddleWare, ThongKeTaiController.updateThongKeTai)
router.get('/get-details/:id', ThongKeTaiController.getDetailsThongKeTai)
router.delete('/delete/:id', authMiddleWare, ThongKeTaiController.deleteThongKeTai)
router.get('/get-all', ThongKeTaiController.getAllThongKeTai)
router.post('/delete-many', authMiddleWare, ThongKeTaiController.deleteMany)
router.get('/get-all-type', ThongKeTaiController.getAllType)
router.get('/get-by-id/:id', ThongKeTaiController.getThongKeTaiByQuanNhanId)
router.put('/update/:donviid/:nam', authMiddleWare, ThongKeTaiController.updateThongKeTai)
// router.post('/pushdata/:id', ThongKeTaiController.updateHTCVLists)
module.exports = router