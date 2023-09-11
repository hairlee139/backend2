const express = require("express");
const router = express.Router()
const ChucVuDonViController = require('../controllers/ChucVuDonViController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', ChucVuDonViController.createChucVuDonVi)
router.put('/update/:id', authMiddleWare, ChucVuDonViController.updateChucVuDonVi)
router.get('/get-details/:id', ChucVuDonViController.getDetailsChucVuDonVi)
router.delete('/delete/:id', authMiddleWare, ChucVuDonViController.deleteChucVuDonVi)
router.get('/get-all', ChucVuDonViController.getAllChucVuDonVi)
router.post('/delete-many', authMiddleWare, ChucVuDonViController.deleteMany)
router.get('/get-all-type', ChucVuDonViController.getAllType)
router.get('/getchucvu/:id', ChucVuDonViController.getChucVuByDonVi)
router.get('/getdatachucvu/:id', ChucVuDonViController.getDataChucVuByDonVi)
module.exports = router