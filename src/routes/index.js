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
const AdminGroup = require('./AdminGroupRouter')
const AdminGroupPriority = require('./AdminGroupPriorityRouter')
const Priority = require('./PriorityRouter')
const StaffAdminGroup = require('./StaffAdminGroupRouter')
const StaffPriority = require('./StaffPriorityRouter')
const PriorityFromQuanNhanId = require('./PriorityFromQuanNhanIdRouter')
const DonVi = require('./DonViRouter')
const KieuDonVi = require('./KieuDonViRouter')
const ChucVu = require('./ChucVuRouter')
const ChucVuDonVi = require('./ChucVuDonViRouter')

const DanhMucCapBac = require("./DanhMucCapBacRouter")
const DanhMucCDCMKT = require("./DanhMucCDCMKTRouter")
const DanhMucChucVu = require("./DanhMucChucVuRouter")
const DanhMucHocHam = require("./DanhMucHocHamRouter")
const DanhMucHocVi = require("./DanhMucHocViRouter")
const DanhMucKhenThuong = require("./DanhMucHinhThucKhenThuongRouter")
const DanhMucKyLuat = require("./DanhMucHinhThucKyLuatRouter")
const DanhMucLoaiDonVi = require("./DanhMucLoaiDonViRouter")

const DanhMucTinh = require("./DanhMucTinhRouter")
const DanhMucHuyen = require("./DanhMucHuyenRouter")
const DanhMucXa = require("./DanhMucXaRouter")
const DanhMucTonGiao = require("./DanhMucTonGiaoRouter")
const DanhMucDanToc = require("./DanhMucDanTocRouter")
const DanhMucCheDoUT = require("./DanhMucCheDoUTRouter")
const DanhMucKhuVucUT = require("./DanhMucKhuVucUTRouter")


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
    app.use('/api/admingroup', AdminGroup)
    app.use('/api/admingrouppriority', AdminGroupPriority)
    app.use('/api/priority', Priority)
    app.use('/api/staffadmingroup', StaffAdminGroup)
    app.use('/api/staffpriority', StaffPriority)
    app.use('/api/priorityfromid', PriorityFromQuanNhanId)
    app.use('/api/donvi', DonVi)
    app.use('/api/kieudonvi', KieuDonVi)
    app.use('/api/chucvu', ChucVu)
    app.use('/api/chucvudonvi', ChucVuDonVi)



    app.use('/api/danhmuccapbac', DanhMucCapBac)
    app.use('/api/danhmuccdcmkt', DanhMucCDCMKT)
    app.use('/api/danhmucchucvu', DanhMucChucVu)
    app.use('/api/danhmuchocham', DanhMucHocHam)
    app.use('/api/danhmuchocvi', DanhMucHocVi)
    app.use('/api/danhmuckhenthuong', DanhMucKhenThuong)
    app.use('/api/danhmuckyluat', DanhMucKyLuat)
    app.use('/api/danhmucloaidonvi', DanhMucLoaiDonVi)

    app.use('/api/danhmuctinh', DanhMucTinh)
    app.use('/api/danhmuchuyen', DanhMucHuyen)
    app.use('/api/danhmucxa', DanhMucXa)
    app.use('/api/danhmuctongiao', DanhMucTonGiao)
    app.use('/api/danhmucdantoc', DanhMucDanToc)
    app.use('/api/danhmuckhuvucut', DanhMucKhuVucUT)
    app.use('/api/danhmucchedout', DanhMucCheDoUT)
}

module.exports = routes