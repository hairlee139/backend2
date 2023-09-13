const express = require("express");
const router = express.Router()
const HTCVController = require('../controllers/HTCVController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', HTCVController.createHTCV)
router.put('/update/:id', authMiddleWare, HTCVController.updateHTCV)
router.get('/get-details/:id', HTCVController.getDetailsHTCV)
router.delete('/delete/:id', authMiddleWare, HTCVController.deleteHTCV)
router.get('/get-all', HTCVController.getAllHTCV)
router.post('/delete-many', authMiddleWare, HTCVController.deleteMany)
router.get('/get-all-type', HTCVController.getAllType)
router.get('/get-by-id/:id', HTCVController.getHTCVByQuanNhanId)

module.exports = router