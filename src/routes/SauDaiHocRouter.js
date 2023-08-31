const express = require("express");
const router = express.Router()
const SauDaiHocController = require('../controllers/SauDaiHocController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', SauDaiHocController.createSauDaiHoc)
router.put('/update/:id', authMiddleWare, SauDaiHocController.updateSauDaiHoc)
router.get('/get-details/:id', SauDaiHocController.getDetailsSauDaiHoc)
router.delete('/delete/:id', authMiddleWare, SauDaiHocController.deleteSauDaiHoc)
router.get('/get-all', SauDaiHocController.getAllSauDaiHoc)
router.post('/delete-many', authMiddleWare, SauDaiHocController.deleteMany)
router.get('/get-all-type', SauDaiHocController.getAllType)
router.get('/get-by-id/:id', SauDaiHocController.getSauDaiHocByQuanNhanId)

module.exports = router