const express = require("express");
const router = express.Router()
const BienSoanController = require('../controllers/BienSoanController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', BienSoanController.createBienSoan)
router.put('/update/:id', authMiddleWare, BienSoanController.updateBienSoan)
router.get('/get-details/:id', BienSoanController.getDetailsBienSoan)
router.delete('/delete/:id', authMiddleWare, BienSoanController.deleteBienSoan)
router.get('/get-all', BienSoanController.getAllBienSoan)
router.post('/delete-many', authMiddleWare, BienSoanController.deleteMany)
router.get('/get-all-type', BienSoanController.getAllType)
router.get('/get-by-id/:id', BienSoanController.getBienSoanByQuanNhanId)
router.post('/pushdata/:id', BienSoanController.updateHTCVLists)
module.exports = router