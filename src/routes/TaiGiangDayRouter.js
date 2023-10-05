const express = require("express");
const router = express.Router()
const TaiGiangDayController = require('../controllers/TaiGiangDayController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', TaiGiangDayController.createTaiGiangDay)
router.put('/update/:id', authMiddleWare, TaiGiangDayController.updateTaiGiangDay)
router.get('/get-details/:id', TaiGiangDayController.getDetailsTaiGiangDay)
router.delete('/delete/:id', authMiddleWare, TaiGiangDayController.deleteTaiGiangDay)
router.get('/get-all', TaiGiangDayController.getAllTaiGiangDay)
router.post('/delete-many', authMiddleWare, TaiGiangDayController.deleteMany)
router.get('/get-all-type', TaiGiangDayController.getAllType)
router.get('/get-by-id/:id', TaiGiangDayController.getTaiGiangDayByQuanNhanId)
router.post('/pushdata/:id', TaiGiangDayController.updateHTCVLists)
router.get('/get-tong/:id', TaiGiangDayController.getTongTaiFromId)
router.get('/get-tong-daotao/:id', TaiGiangDayController.getTongTaiDaoTaoFromId)
router.get('/get-tong-nckh/:id', TaiGiangDayController.getTongNCKHFromId)
module.exports = router