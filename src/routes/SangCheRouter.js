const express = require("express");
const router = express.Router()
const SangCheController = require('../controllers/SangCheController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', SangCheController.createSangChe)
router.put('/update/:id', authMiddleWare, SangCheController.updateSangChe)
router.get('/get-details/:id', SangCheController.getDetailsSangChe)
router.delete('/delete/:id', authMiddleWare, SangCheController.deleteSangChe)
router.get('/get-all', SangCheController.getAllSangChe)
router.post('/delete-many', authMiddleWare, SangCheController.deleteMany)
router.get('/get-all-type', SangCheController.getAllType)
router.get('/get-by-id/:id', SangCheController.getSangCheByQuanNhanId)
router.post('/pushdata/:id', SangCheController.updateHTCVLists)
module.exports = router