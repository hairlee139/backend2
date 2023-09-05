const express = require("express");
const router = express.Router()
const DonViController = require('../controllers/DonViController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DonViController.createDonVi)
router.put('/update/:id', authMiddleWare, DonViController.updateDonVi)
router.get('/get-details/:id', DonViController.getDetailsDonVi)
router.delete('/delete/:id', authMiddleWare, DonViController.deleteDonVi)
router.get('/get-all', DonViController.getAllDonVi)
router.post('/delete-many', authMiddleWare, DonViController.deleteMany)
router.get('/get-all-type', DonViController.getAllType)
router.get('/getdonvicon/:id', DonViController.getDonViCon)
router.get('/getdonvicononly/:id', DonViController.getDonViConOnly)
router.get('/getdonvicononly2/:id', DonViController.getDonViConOnly2)
router.get('/getdonvifromcode/:id', DonViController.getDonVifromcode)
router.get('/getdonviconbyten/:id', DonViController.getDonViConByTen)
router.get('/gethocvi/:id', DonViController.getDonViConWithHocViCounts)
router.get('/getdonvi/:id', DonViController.getDonVifromObjectId)
module.exports = router