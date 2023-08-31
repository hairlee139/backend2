const express = require("express");
const router = express.Router()
const DaiHocController = require('../controllers/DaiHocController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DaiHocController.createDaiHoc)
router.put('/update/:id', authMiddleWare, DaiHocController.updateDaiHoc)
router.get('/get-details/:id', DaiHocController.getDetailsDaiHoc)
router.delete('/delete/:id', authMiddleWare, DaiHocController.deleteDaiHoc)
router.get('/get-all', DaiHocController.getAllDaiHoc)
router.post('/delete-many', authMiddleWare, DaiHocController.deleteMany)
router.get('/get-all-type', DaiHocController.getAllType)
router.get('/get-by-id/:id', DaiHocController.getDaiHocByQuanNhanId)

module.exports = router