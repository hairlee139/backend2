const express = require("express");
const router = express.Router()
const ThongKeHocViController = require('../controllers/ThongKeHocViController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', ThongKeHocViController.createThongKeHocVi)
// router.put('/update/:id', authMiddleWare, ThongKeHocViController.updateThongKeHocVi)
router.get('/get-details/:id', ThongKeHocViController.getDetailsThongKeHocVi)
router.delete('/delete/:id', authMiddleWare, ThongKeHocViController.deleteThongKeHocVi)
router.get('/get-all', ThongKeHocViController.getAllThongKeHocVi)
router.post('/delete-many', authMiddleWare, ThongKeHocViController.deleteMany)
router.get('/get-all-type', ThongKeHocViController.getAllType)
router.get('/get-by-id/:id', ThongKeHocViController.getThongKeHocViByDonViId)
router.put('/update/:donviid/:nam', authMiddleWare, ThongKeHocViController.updateThongKeHocVi)
// router.post('/pushdata/:id', ThongKeHocViController.updateHTCVLists)
module.exports = router