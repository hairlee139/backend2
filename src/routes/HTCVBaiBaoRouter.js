const express = require("express");
const router = express.Router()
const HTCVBaiBaoController = require('../controllers/HTCVBaiBaoController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HTCVBaiBaoController.createHTCVBaiBao)
router.put('/update/:id', authMiddleWare, HTCVBaiBaoController.updateHTCVBaiBao)
router.get('/get-details/:id', HTCVBaiBaoController.getDetailsHTCVBaiBao)
router.delete('/delete/:id', authMiddleWare, HTCVBaiBaoController.deleteHTCVBaiBao)
router.get('/get-all', HTCVBaiBaoController.getAllHTCVBaiBao)
router.post('/delete-many', authMiddleWare, HTCVBaiBaoController.deleteMany)
router.get('/get-all-type', HTCVBaiBaoController.getAllType)
router.get('/get-by-id/:id', HTCVBaiBaoController.getHTCVBaiBaoByQuanNhanId)

module.exports = router