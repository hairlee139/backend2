const express = require("express");
const router = express.Router()
const BaiBaoKhoaHocController = require('../controllers/BaiBaoKhoaHocController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', BaiBaoKhoaHocController.createBaiBaoKhoaHoc)
router.put('/update/:id', authMiddleWare, BaiBaoKhoaHocController.updateBaiBaoKhoaHoc)
router.get('/get-details/:id', BaiBaoKhoaHocController.getDetailsBaiBaoKhoaHoc)
router.delete('/delete/:id', authMiddleWare, BaiBaoKhoaHocController.deleteBaiBaoKhoaHoc)
router.get('/get-all', BaiBaoKhoaHocController.getAllBaiBaoKhoaHoc)
router.post('/delete-many', authMiddleWare, BaiBaoKhoaHocController.deleteMany)
router.get('/get-all-type', BaiBaoKhoaHocController.getAllType)
router.get('/get-by-id/:id', BaiBaoKhoaHocController.getBaiBaoKhoaHocByQuanNhanId)
router.post('/pushdata/:id', BaiBaoKhoaHocController.updateHTCVLists)
module.exports = router