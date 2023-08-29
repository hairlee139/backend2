const express = require("express");
const router = express.Router()
const DanhMucHocHamController = require('../controllers/DanhMucHocHamController');
const { authMiddleWare } = require("../middleware/authMiddleware");

router.post('/create', DanhMucHocHamController.createDanhMucHocHam)
router.put('/update/:id', DanhMucHocHamController.updateDanhMucHocHam)
router.get('/get-details/:id', DanhMucHocHamController.getDetailsDanhMucHocHam)
router.delete('/delete/:id', DanhMucHocHamController.deleteDanhMucHocHam)
router.get('/get-all', DanhMucHocHamController.getAllDanhMucHocHam)
router.post('/delete-many', DanhMucHocHamController.deleteMany)
router.get('/get-all-type', DanhMucHocHamController.getAllType)

module.exports = router