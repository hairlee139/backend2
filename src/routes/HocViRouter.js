const express = require("express");
const router = express.Router()
const HocViController = require('../controllers/HocViController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HocViController.createHocVi)
router.put('/update/:id', authMiddleWare, HocViController.updateHocVi)
router.get('/get-details/:id', HocViController.getDetailsHocVi)
router.delete('/delete/:id', authMiddleWare, HocViController.deleteHocVi)
router.get('/get-all', HocViController.getAllHocVi)
router.post('/delete-many', authMiddleWare, HocViController.deleteMany)
router.get('/get-all-type', HocViController.getAllType)
router.get('/get-all-hocvi/:id', HocViController.getAllHocViFromDonVi)
module.exports = router