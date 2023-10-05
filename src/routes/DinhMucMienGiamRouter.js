const express = require("express");
const router = express.Router()
const DinhMucMienGiamController = require('../controllers/DinhMucMienGiamController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DinhMucMienGiamController.createDinhMucMienGiam)
router.put('/update/:id', DinhMucMienGiamController.updateDinhMucMienGiam)
router.get('/get-details/:id', DinhMucMienGiamController.getDetailsDinhMucMienGiam)
router.delete('/delete/:id', DinhMucMienGiamController.deleteDinhMucMienGiam)
router.get('/get-all', DinhMucMienGiamController.getAllDinhMucMienGiam)
router.post('/delete-many', DinhMucMienGiamController.deleteMany)
router.get('/get-all-type', DinhMucMienGiamController.getAllType)

module.exports = router