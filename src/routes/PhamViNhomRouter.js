const express = require("express");
const router = express.Router()
const PhamViNhomController = require('../controllers/PhamViNhomController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', PhamViNhomController.createPhamViNhom)
router.put('/update/:id', authMiddleWare, PhamViNhomController.updatePhamViNhom)
router.get('/get-details/:id', PhamViNhomController.getDetailsPhamViNhom)
router.delete('/delete/:id', authMiddleWare, PhamViNhomController.deletePhamViNhom)
router.get('/get-all', PhamViNhomController.getAllPhamViNhom)
router.post('/delete-many', authMiddleWare, PhamViNhomController.deleteMany)
router.get('/get-all-type', PhamViNhomController.getAllType)

module.exports = router