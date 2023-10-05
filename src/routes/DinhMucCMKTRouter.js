const express = require("express");
const router = express.Router()
const DinhMucCMKTController = require('../controllers/DinhMucCMKTController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DinhMucCMKTController.createDinhMucCMKT)
router.put('/update/:id', DinhMucCMKTController.updateDinhMucCMKT)
router.get('/get-details/:id', DinhMucCMKTController.getDetailsDinhMucCMKT)
router.delete('/delete/:id', DinhMucCMKTController.deleteDinhMucCMKT)
router.get('/get-all', DinhMucCMKTController.getAllDinhMucCMKT)
router.post('/delete-many', DinhMucCMKTController.deleteMany)
router.get('/get-all-type', DinhMucCMKTController.getAllType)

module.exports = router