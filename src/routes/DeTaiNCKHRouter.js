const express = require("express");
const router = express.Router()
const DeTaiNCKHController = require('../controllers/DeTaiKHCNController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DeTaiNCKHController.createDeTaiNCKH)
router.put('/update/:id', authMiddleWare, DeTaiNCKHController.updateDeTaiNCKH)
router.get('/get-details/:id', DeTaiNCKHController.getDetailsDeTaiNCKH)
router.delete('/delete/:id', authMiddleWare, DeTaiNCKHController.deleteDeTaiNCKH)
router.get('/get-all', DeTaiNCKHController.getAllDeTaiNCKH)
router.post('/delete-many', authMiddleWare, DeTaiNCKHController.deleteMany)
router.get('/get-all-type', DeTaiNCKHController.getAllType)
router.get('/get-by-id/:id', DeTaiNCKHController.getDeTaiNCKHByQuanNhanId)
router.post('/pushdata/:id', DeTaiNCKHController.updateHTCVLists)
module.exports = router