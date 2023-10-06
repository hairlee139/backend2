const express = require("express");
const router = express.Router()
const QuanNhanController = require('../controllers/QuanNhanController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', QuanNhanController.createQuanNhan)
router.put('/update/:id', authMiddleWare, QuanNhanController.updateQuanNhan)
router.get('/get-details/:id', QuanNhanController.getDetailsQuanNhan)
router.delete('/delete/:id', authMiddleWare, QuanNhanController.deleteQuanNhan)
router.get('/get-all', QuanNhanController.getAllQuanNhan)
router.post('/delete-many', authMiddleWare, QuanNhanController.deleteMany)
router.get('/get-all-type', QuanNhanController.getAllType)
router.get('/get-by-id/:id', QuanNhanController.getQuanNhanByQuanNhanId)
router.get('/get-by-id2/:id', QuanNhanController.getQuanNhanFromDonVi)
router.get('/get-by-id3/:id', QuanNhanController.getSoLuongQuanNhanFromDonVi)
router.get('/getobjectid/:id', QuanNhanController.getObjectIdByQuanNhanId)
router.get('/get-all-quanham/:id', QuanNhanController.getAllQuanHamFromDonVi)
router.get('/get-all-dotuoi/:id', QuanNhanController.getAllDoTuoiFromDonVi)
router.get('/getquannhanmin/:id', QuanNhanController.getQuanNhanFromDonViCon)
router.post('/pushdata/:id', QuanNhanController.updateQuanNhanLists)
router.put('/editdata/:_id/:index', QuanNhanController.update2ListsQuanNhan)
router.delete('/deletedata/:_id/:index', QuanNhanController.delete2ListsQuanNhan)
router.get('/get-tai/:id', QuanNhanController.getTaiFromDonVi)

module.exports = router