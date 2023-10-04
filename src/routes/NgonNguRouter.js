const express = require("express");
const router = express.Router()
const NgonNguController = require('../controllers/NgonNguController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', NgonNguController.createNgonNgu)
router.put('/update/:id', authMiddleWare, NgonNguController.updateNgonNgu)
router.get('/get-details/:id', NgonNguController.getDetailsNgonNgu)
router.delete('/delete/:id', authMiddleWare, NgonNguController.deleteNgonNgu)
router.get('/get-all', NgonNguController.getAllNgonNgu)
router.post('/delete-many', authMiddleWare, NgonNguController.deleteMany)
router.get('/get-all-type', NgonNguController.getAllType)


module.exports = router