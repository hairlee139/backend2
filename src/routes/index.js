const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')
const OrderRouter = require('./OrderRouter')
const PaymentRouter = require('./PaymentRouter')
const QuanNhanRouter = require('./QuanNhanRouter')
const LoaiQuanNhanRouter = require("./LoaiQuanNhanRouter")
const QuanHamRouter = require("./QuanHamRouter")

const DanhMucQuyen = require('./DanhMucQuyenRouter')
const NhomQuyen = require('./NhomQuyenRouter')
const PhamViNhom = require('./PhamViNhomRouter')
const QuaTrinhCongTac = require('./QuaTrinhCongTacRouter')

const DanhMucCapBac = require("./DanhMucCapBacRouter")
const DanhMucChucVu = require("./DanhMucChucVuRouter")
const DanhMucHocHam = require("./DanhMucHocHamRouter")
const DanhMucHocVi = require("./DanhMucHocViRouter")
const DanhMucCDCMKT = require("./DanhMucCDCMKTRouter")
const DanhMucKhenThuong = require("./DanhMucHinhThucKhenThuongRouter")
const DanhMucKyLuat = require("./DanhMucHinhThucKyLuatRouter")
const DanhMucLoaiDonVi = require("./DanhMucLoaiDonViRouter")

const DanhMucTinh = require("./DanhMucTinhRouter")
const DanhMucHuyen = require("./DanhMucHuyenRouter")
const DanhMucXa = require("./DanhMucXaRouter")
const DanhMucTonGiao = require("./DanhMucTonGiaoRouter")
const DanhMucDanToc = require("./DanhMucDanTocRouter")
const DanhMucKhuVucUT = require("./DanhMucKhuVucUTRouter")
const DanhMucCheDoUT = require("./DanhMucCheDoUTRouter")

const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/product', ProductRouter)
    app.use('/api/order', OrderRouter)
    app.use('/api/payment', PaymentRouter)
    app.use('/api/quannhan', QuanNhanRouter)
    app.use('/api/loaiquannhan', LoaiQuanNhanRouter)
    app.use('/api/quanham', QuanHamRouter)

    app.use('/api/danhmucquyen', DanhMucQuyen)
    app.use('/api/nhomquyen', NhomQuyen)
    app.use('/api/phamvinhom', PhamViNhom)
    app.use('/api/quatrinhcongtac', QuaTrinhCongTac)
    //tổ chức nhân sự
    app.use('/api/danhmuccapbac', DanhMucCapBac)
    app.use('/api/danhmucchucvu', DanhMucChucVu)
    app.use('/api/danhmuchocham', DanhMucHocHam)
    app.use('/api/danhmuchocvi', DanhMucHocVi)
    app.use('/api/danhmuccdcmkt', DanhMucCDCMKT)
    app.use('/api/danhmucloaidonvi', DanhMucLoaiDonVi)
    app.use('/api/danhmuckhenthuong', DanhMucKhenThuong)
    app.use('/api/danhmuckyluat', DanhMucKyLuat)

    //danh mục chung
    app.use('/api/danhmuctinh', DanhMucTinh)
    app.use('/api/danhmuchuyen', DanhMucHuyen)
    app.use('/api/danhmucxa', DanhMucXa)
    app.use('/api/danhmucdantoc', DanhMucDanToc)
    app.use('/api/danhmuctongiao', DanhMucTonGiao)
    app.use('/api/danhmuckhuvucut', DanhMucKhuVucUT)
    app.use('/api/danhmucchedout', DanhMucCheDoUT)

}

module.exports = routes