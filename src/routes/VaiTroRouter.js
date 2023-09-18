const express = require("express");
const router = express.Router()
const VaiTroController = require('../controllers/VaiTroController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', VaiTroController.createVaiTro)
router.put('/update/:id', authMiddleWare, VaiTroController.updateVaiTro)
router.get('/get-details/:id', VaiTroController.getDetailsVaiTro)
router.delete('/delete/:id', authMiddleWare, VaiTroController.deleteVaiTro)
router.get('/get-all', VaiTroController.getAllVaiTro)
router.post('/delete-many', authMiddleWare, VaiTroController.deleteMany)
router.get('/get-all-type', VaiTroController.getAllType)


module.exports = router