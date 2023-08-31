const express = require("express");
const router = express.Router()
const TinhTrangCongTacController = require('../controllers/TinhTrangCongTacController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', TinhTrangCongTacController.createTinhTrangCongTac)
router.put('/update/:id', authMiddleWare, TinhTrangCongTacController.updateTinhTrangCongTac)
router.get('/get-details/:id', TinhTrangCongTacController.getDetailsTinhTrangCongTac)
router.delete('/delete/:id', authMiddleWare, TinhTrangCongTacController.deleteTinhTrangCongTac)
router.get('/get-all', TinhTrangCongTacController.getAllTinhTrangCongTac)
router.post('/delete-many', authMiddleWare, TinhTrangCongTacController.deleteMany)
router.get('/get-all-type', TinhTrangCongTacController.getAllType)
router.get('/get-by-id/:id', TinhTrangCongTacController.getTinhTrangCongTacByQuanNhanId)

module.exports = router