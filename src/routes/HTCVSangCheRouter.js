const express = require("express");
const router = express.Router()
const HTCVSangCheController = require('../controllers/HTCVSangCheController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HTCVSangCheController.createHTCVSangChe)
router.put('/update/:id', authMiddleWare, HTCVSangCheController.updateHTCVSangChe)
router.get('/get-details/:id', HTCVSangCheController.getDetailsHTCVSangChe)
router.delete('/delete/:id', authMiddleWare, HTCVSangCheController.deleteHTCVSangChe)
router.get('/get-all', HTCVSangCheController.getAllHTCVSangChe)
router.post('/delete-many', authMiddleWare, HTCVSangCheController.deleteMany)
router.get('/get-all-type', HTCVSangCheController.getAllType)
router.get('/get-by-id/:id', HTCVSangCheController.getHTCVSangCheByQuanNhanId)

module.exports = router