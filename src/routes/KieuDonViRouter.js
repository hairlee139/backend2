const express = require("express");
const router = express.Router()
const KieuDonViController = require('../controllers/KieuDonViController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', KieuDonViController.createKieuDonVi)
router.put('/update/:id', authMiddleWare, KieuDonViController.updateKieuDonVi)
router.get('/get-details/:id', KieuDonViController.getDetailsKieuDonVi)
router.delete('/delete/:id', authMiddleWare, KieuDonViController.deleteKieuDonVi)
router.get('/get-all', KieuDonViController.getAllKieuDonVi)
router.post('/delete-many', authMiddleWare, KieuDonViController.deleteMany)
router.get('/get-all-type', KieuDonViController.getAllType)

module.exports = router