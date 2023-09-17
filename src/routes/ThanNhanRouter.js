const express = require("express");
const router = express.Router()
const ThanNhanController = require('../controllers/ThanNhanController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', ThanNhanController.createThanNhan)
router.put('/update/:id', authMiddleWare, ThanNhanController.updateThanNhan)
router.get('/get-details/:id', ThanNhanController.getDetailsThanNhan)
router.delete('/delete/:id', authMiddleWare, ThanNhanController.deleteThanNhan)
router.get('/get-all', ThanNhanController.getAllThanNhan)
router.post('/delete-many', authMiddleWare, ThanNhanController.deleteMany)
router.get('/get-all-type', ThanNhanController.getAllType)
router.get('/get-by-id/:id', ThanNhanController.getThanNhanByQuanNhanId)

module.exports = router