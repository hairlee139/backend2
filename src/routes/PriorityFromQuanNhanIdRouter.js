const express = require("express");
const router = express.Router()
const PriorityFromQuanNhanIdController = require('../controllers/PriorityFromQuanNhanIdController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.get('/get-by-id/:id', PriorityFromQuanNhanIdController.getChucVuDonViFromUser)
router.get('/admingroupfromchucvudonvi/:departmentlist/:leveltitlelist', PriorityFromQuanNhanIdController.getAdminGroupFromChucVuDonVi);
router.get('/admingroupbyuserid/:id', PriorityFromQuanNhanIdController.getAdminGroupCodeFromUser);
router.get('/getpriorityfromuser/:id', PriorityFromQuanNhanIdController.getPriorityFromUser);
module.exports = router