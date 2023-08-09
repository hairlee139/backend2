const express = require("express");
const router = express.Router()
const DanhMucCapBacController = require('../controllers/DanhMucCapBacController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucCapBacController.createDanhMucCapBac)
router.put('/update/:id',  DanhMucCapBacController.updateDanhMucCapBac)
router.get('/get-details/:id', DanhMucCapBacController.getDetailsDanhMucCapBac)
router.delete('/delete/:id',  DanhMucCapBacController.deleteDanhMucCapBac)
router.get('/get-all', DanhMucCapBacController.getAllDanhMucCapBac)
router.post('/delete-many',  DanhMucCapBacController.deleteMany)
router.get('/get-all-type', DanhMucCapBacController.getAllType)

module.exports = router