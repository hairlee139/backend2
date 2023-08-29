const express = require("express");
const router = express.Router()
const PriorityController = require('../controllers/PriorityController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', PriorityController.createPriority)
router.put('/update/:id', authMiddleWare, PriorityController.updatePriority)
router.get('/get-details/:id', PriorityController.getDetailsPriority)
router.delete('/delete/:id', authMiddleWare, PriorityController.deletePriority)
router.get('/get-all', PriorityController.getAllPriority)
router.post('/delete-many', authMiddleWare, PriorityController.deleteMany)
router.get('/get-all-type', PriorityController.getAllType)
router.get('/get-by-id/:id', PriorityController.getAllPriorityFromAdminGroup)
module.exports = router