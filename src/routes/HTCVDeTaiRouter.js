const express = require("express");
const router = express.Router()
const HTCVDeTaiController = require('../controllers/HTCVDeTaiController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HTCVDeTaiController.createHTCVDeTai)
router.put('/update/:id', authMiddleWare, HTCVDeTaiController.updateHTCVDeTai)
router.get('/get-details/:id', HTCVDeTaiController.getDetailsHTCVDeTai)
router.delete('/delete/:id', authMiddleWare, HTCVDeTaiController.deleteHTCVDeTai)
router.get('/get-all', HTCVDeTaiController.getAllHTCVDeTai)
router.post('/delete-many', authMiddleWare, HTCVDeTaiController.deleteMany)
router.get('/get-all-type', HTCVDeTaiController.getAllType)
router.get('/get-by-id/:id', HTCVDeTaiController.getHTCVDeTaiByQuanNhanId)

module.exports = router