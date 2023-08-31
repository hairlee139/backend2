const express = require("express");
const router = express.Router()
const NgoaiNguController = require('../controllers/NgoaiNguController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', NgoaiNguController.createNgoaiNgu)
router.put('/update/:id', authMiddleWare, NgoaiNguController.updateNgoaiNgu)
router.get('/get-details/:id', NgoaiNguController.getDetailsNgoaiNgu)
router.delete('/delete/:id', authMiddleWare, NgoaiNguController.deleteNgoaiNgu)
router.get('/get-all', NgoaiNguController.getAllNgoaiNgu)
router.post('/delete-many', authMiddleWare, NgoaiNguController.deleteMany)
router.get('/get-all-type', NgoaiNguController.getAllType)
router.get('/get-by-id/:id', NgoaiNguController.getNgoaiNguByQuanNhanId)

module.exports = router