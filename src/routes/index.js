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
const NgoaiNgu = require('./NgoaiNguRouter')
const DaiHoc = require('./DaiHocRouter')
const SauDaiHoc = require('./SauDaiHocRouter')
const TinhTrangCongTac = require('./TinhTrangCongTacRouter')
const QuaTrinhSinhHoatDang = require('./QuaTrinhSinhHoatDangRouter')
const QuaTrinhQuanHam = require('./QuaTrinhQuanHamRouter')
const QuaTrinhCDCMKT = require('./QuaTrinhCDCMKTRouter')
const QuaTrinhHocTapKhac = require('./QuaTrinhHocTapKhacRouter')
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
const HocViRouter = require("./HocViRouter")
const QuaTrinhHocHam = require("./QuaTrinhHocHamRouter")
const DanhMucChucVuDang = require("./DanhMucChucVuDangRouter")

const TaiHuongDan = require("./TaiHuongDanRouter")
const HinhThucHuongDan = require("./HinhThucHuongDanRouter")
const HinhThucKhaoThi = require("./HinhThucKhaoThiRouter")
const TaiHoiDong = require("./TaiHoiDongRouter")
const TaiKhaoThi = require("./TaiKhaoThiRouter")
const VaiTroHoiDong = require("./VaiTroHoiDongRouter")
const CapHoiDong = require("./CapHoiDongRouter")
const HinhThucDaoTao = require("./HinhThucDaoTaoRouter")
const HinhThucCongViec = require("./HinhThucCongViecRouter")
const HinhThucGiangDay = require("./HinhThucGiangDayRouter")
const LoaiHinhDaoTao = require("./LoaiHinhDaoTaoRouter")
const TaiGiangDay = require("./TaiGiangDayRouter")
const LoaiDeTai = require("./LoaiDeTaiRouter")
const PhanLoaiKetQua = require("./PhanLoaiKetQuaHDNCKHRouter")
const HuongDanNCKH = require("./HuongDanNCKHRouter")
const HTCV = require("./HTCVRouter")

const BaiBaoKhoaHoc = require("./BaiBaoKhoaHocRouter")
const DeTaiNCKH = require("./DeTaiNCKHRouter")
const BienSoan = require("./BienSoanRouter")
const GiaiThuong = require("./GiaiThuongRouter")
const SangChe = require("./SangCheRouter")
const HoatDongNCKhac = require("./HoatDongNCKhacRouter")
const HopDong = require("./HopDongRouter")
const HTCVBaiBao = require("./HTCVBaiBaoRouter")
const HTCVBienSoan = require("./HTCVBienSoanRouter")
const HTCVDeTai = require("./HTCVDeTaiRouter")
const HTCVGiaiThuong = require("./HTCVGiaiThuongRouter")
const HTCVHopDong = require("./HTCVHopDongRouter")
const HTCVSangChe = require("./HTCVSangCheRouter")
const HTCVHoatDongKhac = require("./HTCVHoatDongKhacRouter")

const VaiTro = require("./VaiTroRouter")

const ThanNhan = require("./ThanNhanRouter")
const LoaiQuanHe = require("./LoaiQuanHeRouter")
const TaiSan = require("./TaiSanRouter")
const LoaiTaiSan = require("./LoaiTaiSanRouter")
const QuaTrinhKhenThuong = require("./QuaTrinhKhenThuongRouter")
const ThongKeHocVi = require("./ThongKeHocViRouter") 
const QuaTrinhKyLuat = require('./QuaTrinhKyLuatRouter')
const DieuChuyenCanBo = require('./QuaTrinhDieuChuyenRouter')
const QuaTrinhHocVi = require('./QuaTrinhHocViRouter')
const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/product', ProductRouter)
    app.use('/api/order', OrderRouter)
    app.use('/api/payment', PaymentRouter)
    app.use('/api/quannhan', QuanNhanRouter)
    app.use('/api/loaiquannhan', LoaiQuanNhanRouter)
    app.use('/api/quanham', QuanHamRouter)
    app.use('/api/hocvi', HocViRouter)
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
    app.use('/api/danhmucchucvudang', DanhMucChucVuDang)

    app.use('/api/danhmuctinh', DanhMucTinh)
    app.use('/api/danhmuchuyen', DanhMucHuyen)
    app.use('/api/danhmucxa', DanhMucXa)
    app.use('/api/danhmuctongiao', DanhMucTonGiao)
    app.use('/api/danhmucdantoc', DanhMucDanToc)
    app.use('/api/danhmuckhuvucut', DanhMucKhuVucUT)
    app.use('/api/danhmucchedout', DanhMucCheDoUT)
    app.use('/api/ngoaingu', NgoaiNgu)
    app.use('/api/saudaihoc', SauDaiHoc)
    app.use('/api/tinhtrangcongtac', TinhTrangCongTac)
    app.use('/api/daihoc', DaiHoc)
    app.use('/api/quatrinhsinhhoatdang', QuaTrinhSinhHoatDang)
    app.use('/api/quatrinhquanham', QuaTrinhQuanHam)
    app.use('/api/quatrinhcdcmkt', QuaTrinhCDCMKT)
    app.use('/api/quatrinhhoctapkhac', QuaTrinhHocTapKhac)

    app.use('/api/quatrinhhocham', QuaTrinhHocHam)
    app.use('/api/taigiangday', TaiGiangDay)
    app.use('/api/taihuongdan', TaiHuongDan)
    app.use('/api/hinhthuchuongdan', HinhThucHuongDan)
    app.use('/api/hinhthuckhaothi', HinhThucKhaoThi)
    app.use('/api/taikhaothi', TaiKhaoThi)
    app.use('/api/taihoidong', TaiHoiDong)
    app.use('/api/vaitrohoidong', VaiTroHoiDong)
    app.use('/api/caphoidong', CapHoiDong)
    app.use('/api/hinhthuccongviec', HinhThucCongViec)
    app.use('/api/hinhthucdaotao', HinhThucDaoTao)
    app.use('/api/hinhthucgiangday', HinhThucGiangDay)
    app.use('/api/loaihinhdaotao', LoaiHinhDaoTao)

    app.use('/api/loaidetai', LoaiDeTai)
    app.use('/api/phanloaiketqua', PhanLoaiKetQua)
    app.use('/api/huongdannckh', HuongDanNCKH)
    app.use('/api/htcv', HTCV)

    app.use('/api/htcvbaibao', HTCVBaiBao)
    app.use('/api/htcvbiensoan', HTCVBienSoan)
    app.use('/api/htcvgiaithuong', HTCVGiaiThuong)
    app.use('/api/htcvsangche', HTCVSangChe)
    app.use('/api/htcvhopdong', HTCVHopDong)
    app.use('/api/htcvhoatdongkhac', HTCVHoatDongKhac)
    app.use('/api/htcvdetai', HTCVDeTai)

    app.use('/api/baibaokhoahoc', BaiBaoKhoaHoc)
    app.use('/api/detainckh', DeTaiNCKH)
    app.use('/api/biensoan', BienSoan)
    app.use('/api/sangche', SangChe)
    app.use('/api/hopdong', HopDong)
    app.use('/api/hoatdongkhac', HoatDongNCKhac)
    app.use('/api/giaithuong', GiaiThuong)
    app.use('/api/vaitro', VaiTro)


    app.use('/api/thannhan', ThanNhan)
    app.use('/api/loaiquanhe', LoaiQuanHe)
    app.use('/api/taisan', TaiSan)
    app.use('/api/loaitaisan', LoaiTaiSan)
    app.use('/api/quatrinhkhenthuong', QuaTrinhKhenThuong)
    app.use('/api/quatrinhkyluat', QuaTrinhKyLuat)
    app.use('/api/quatrinhhocvi', QuaTrinhHocVi)

    app.use('/api/dieuchuyencanbo', DieuChuyenCanBo)
    app.use('/api/thongkehocvi', ThongKeHocVi)
}

module.exports = routes