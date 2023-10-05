const TaiGiangDay = require("../models/TaiGiangDayModel")
const TaiHoiDong = require("../models/TaiHoiDongModel")
const TaiHuongDan = require("../models/TaiHuongDanModel")
const TaiKhaoThi = require("../models/TaiKhaoThiModel")

const BaiBaoKhoaHoc = require("../models/BaiBaoKhoaHocModel")
const DeTaiNCKH = require("../models/DeTaiNCKHModel")
const BienSoan = require("../models/BienSoanModel")
const GiaiThuong = require("../models/GiaiThuongModel")
const SangChe = require("../models/SangCheModel")
const HoatDongNCKhac = require("../models/HoatDongNCKhacModel")
const HopDong = require("../models/HopDongModel")
const HuongDanNCKH = require("../models/HuongDanNCKHModel")

const getTongTaiFromId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const TaiGiangDayList = await TaiGiangDay.find({ QuanNhanId: id });
            const TaiHuongDanList = await TaiHuongDan.find({ QuanNhanId: id });
            const TaiKhaoThiList = await TaiKhaoThi.find({ QuanNhanId: id });
            const TaiHoiDongList = await TaiHoiDong.find({ QuanNhanId: id });

            const BaiBaoList = await BaiBaoKhoaHoc.find({ QuanNhanId: id });
            const BienSoanList = await BienSoan.find({ QuanNhanId: id });
            const SangCheList = await SangChe.find({ QuanNhanId: id });
            const HuongDanList = await HuongDanNCKH.find({ QuanNhanId: id });
            const DeTaiList = await DeTaiNCKH.find({ QuanNhanId: id });
            const HopDongList = await HopDong.find({ QuanNhanId: id });
            const GiaiThuongList = await GiaiThuong.find({ QuanNhanId: id });
            const HoatDongKhacList = await HoatDongNCKhac.find({ QuanNhanId: id });

            const totalGioChuanGiangDay = TaiGiangDayList.reduce((total, taiGiangDay) => total + taiGiangDay.GioChuan, 0);
            const totalSoGioChuanHuongDan = TaiHuongDanList.reduce((total, taiHuongDan) => total + taiHuongDan.SoGioChuan, 0);
            const totalSoGioQuyDoiKhaoThi = TaiKhaoThiList.reduce((total, taiKhaoThi) => total + taiKhaoThi.SoGioQuyDoi, 0);
            const totalSoGioQuyDoiHoiDong = TaiHoiDongList.reduce((total, taiHoiDong) => total + taiHoiDong.SoGioQuyDoi, 0);

            const totalGioChuanBaiBao = BaiBaoList.reduce((total, Baibao) => total + Baibao.Tai, 0);
            const totalSoGioChuanBienSoan = BienSoanList.reduce((total, Biensoan) => total + Biensoan.Tai, 0);
            const totalSoGioQuyDoiSangChe = SangCheList.reduce((total, Sangche) => total + Sangche.Tai, 0);
            const totalSoGioQuyDoiHopDong = HopDongList.reduce((total, Hopdong) => total + Hopdong.Tai, 0);
            const totalGioChuanDeTai = DeTaiList.reduce((total, Detai) => total + Detai.Tai, 0);
            const totalSoGioChuanHuongDanNCKH = HuongDanList.reduce((total, Huongdannckh) => total + Huongdannckh.Tai, 0);
            const totalSoGioQuyDoiGiaiThuong = GiaiThuongList.reduce((total, Giaithuong) => total + Giaithuong.Tai, 0);
            const totalSoGioQuyDoiHoatDongKhac = HoatDongKhacList.reduce((total, Hoatdongkhac) => total + Hoatdongkhac.Tai, 0);

            const TaiDaoTaoYeuCau = 300;

            const TaiNCKHYeuCau = 300;
            const TongTaiYeuCau = TaiDaoTaoYeuCau + TaiNCKHYeuCau;
            const TaiThucDaoTaoYeuCau = totalGioChuanGiangDay + totalSoGioChuanHuongDan + totalSoGioQuyDoiKhaoThi + totalSoGioQuyDoiHoiDong;

            const TaiThucNCKHYeuCau = totalGioChuanBaiBao + totalSoGioChuanBienSoan + totalSoGioQuyDoiSangChe + totalSoGioQuyDoiHopDong + totalGioChuanDeTai + totalSoGioChuanHuongDanNCKH + totalSoGioQuyDoiGiaiThuong + totalSoGioQuyDoiHoatDongKhac;
            const TongThucTai = TaiThucDaoTaoYeuCau + TaiThucNCKHYeuCau;
            const totals = {
                TaiDaoTaoYeuCau, TaiNCKHYeuCau, TongTaiYeuCau, TaiThucDaoTaoYeuCau, TaiThucNCKHYeuCau, TongThucTai,
                totalGioChuanGiangDay,
                totalSoGioChuanHuongDan,
                totalSoGioQuyDoiKhaoThi,
                totalSoGioQuyDoiHoiDong,
                totalGioChuanBaiBao, totalSoGioChuanBienSoan,
                totalSoGioQuyDoiSangChe, totalSoGioQuyDoiHopDong, totalGioChuanDeTai, totalSoGioChuanHuongDanNCKH, totalSoGioQuyDoiGiaiThuong,
                totalSoGioQuyDoiHoatDongKhac
            };

            resolve(totals);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getTongTaiFromId
}