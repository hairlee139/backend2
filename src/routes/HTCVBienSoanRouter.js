const express = require("express");
const router = express.Router()
const HTCVBienSoanController = require('../controllers/HTCVBienSoanController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HTCVBienSoanController.createHTCVBienSoan)
router.put('/update/:id', authMiddleWare, HTCVBienSoanController.updateHTCVBienSoan)
router.get('/get-details/:id', HTCVBienSoanController.getDetailsHTCVBienSoan)
router.delete('/delete/:id', authMiddleWare, HTCVBienSoanController.deleteHTCVBienSoan)
router.get('/get-all', HTCVBienSoanController.getAllHTCVBienSoan)
router.post('/delete-many', authMiddleWare, HTCVBienSoanController.deleteMany)
router.get('/get-all-type', HTCVBienSoanController.getAllType)
router.get('/get-by-id/:id', HTCVBienSoanController.getHTCVBienSoanByQuanNhanId)

module.exports = router