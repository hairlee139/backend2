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

// const getTongTaiFromId = (id) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const TaiHoiDongList = await TaiHoiDong.find({ QuanNhanId: id });
//             console.log("2")
//             const TaiGiangDayList = await TaiGiangDay.find({ QuanNhanId: id });
//             const TaiHuongDanList = await TaiHuongDan.find({ QuanNhanId: id });
//             const TaiKhaoThiList = await TaiKhaoThi.find({ QuanNhanId: id });



//             const BaiBaoList = await BaiBaoKhoaHoc.find({ QuanNhanId: id });
//             const BienSoanList = await BienSoan.find({ QuanNhanId: id });
//             const SangCheList = await SangChe.find({ QuanNhanId: id });
//             console.log("3")

//             const HuongDanList = await HuongDanNCKH.find({ QuanNhanId: id });
//             const DeTaiList = await DeTaiNCKH.find({ QuanNhanId: id });
//             const HopDongList = await HopDong.find({ QuanNhanId: id });
//             console.log("4")

//             const GiaiThuongList = await GiaiThuong.find({ QuanNhanId: id });
//             const HoatDongKhacList = await HoatDongNCKhac.find({ QuanNhanId: id });
//             console.log("5")

//             const totalGioChuanGiangDay = TaiGiangDayList.reduce((total, taiGiangDay) => total + taiGiangDay.GioChuan, 0);
//             const totalSoGioChuanHuongDan = TaiHuongDanList.reduce((total, taiHuongDan) => total + taiHuongDan.SoGioChuan, 0);
//             const totalSoGioQuyDoiKhaoThi = TaiKhaoThiList.reduce((total, taiKhaoThi) => total + taiKhaoThi.SoGioQuyDoi, 0);
//             const totalSoGioQuyDoiHoiDong = TaiHoiDongList.reduce((total, taiHoiDong) => total + taiHoiDong.SoGioQuyDoi, 0);

//             const totalGioChuanBaiBao = BaiBaoList.reduce((total, Baibao) => total + Baibao.Tai, 0);
//             const totalSoGioChuanBienSoan = BienSoanList.reduce((total, Biensoan) => total + Biensoan.Tai, 0);
//             const totalSoGioQuyDoiSangChe = SangCheList.reduce((total, Sangche) => total + Sangche.Tai, 0);
//             const totalSoGioQuyDoiHopDong = HopDongList.reduce((total, Hopdong) => total + Hopdong.Tai, 0);
//             const totalGioChuanDeTai = DeTaiList.reduce((total, Detai) => total + Detai.Tai, 0);
//             const totalSoGioChuanHuongDanNCKH = HuongDanList.reduce((total, Huongdannckh) => total + Huongdannckh.Tai, 0);
//             const totalSoGioQuyDoiGiaiThuong = GiaiThuongList.reduce((total, Giaithuong) => total + Giaithuong.Tai, 0);
//             const totalSoGioQuyDoiHoatDongKhac = HoatDongKhacList.reduce((total, Hoatdongkhac) => total + Hoatdongkhac.Tai, 0);

//             const TaiDaoTaoYeuCau = 300;

//             const TaiNCKHYeuCau = 300;
//             const TongTaiYeuCau = TaiDaoTaoYeuCau + TaiNCKHYeuCau;
//             const TaiThucDaoTaoYeuCau = totalGioChuanGiangDay + totalSoGioChuanHuongDan + totalSoGioQuyDoiKhaoThi + totalSoGioQuyDoiHoiDong;

//             const TaiThucNCKHYeuCau = totalGioChuanBaiBao + totalSoGioChuanBienSoan + totalSoGioQuyDoiSangChe + totalSoGioQuyDoiHopDong + totalGioChuanDeTai + totalSoGioChuanHuongDanNCKH + totalSoGioQuyDoiGiaiThuong + totalSoGioQuyDoiHoatDongKhac;
//             const TongThucTai = TaiThucDaoTaoYeuCau + TaiThucNCKHYeuCau;
//             const totals = {
//                 TaiDaoTaoYeuCau, TaiNCKHYeuCau, TongTaiYeuCau, TaiThucDaoTaoYeuCau, TaiThucNCKHYeuCau, TongThucTai,
//                 // totalGioChuanGiangDay,
//                 // totalSoGioChuanHuongDan,
//                 // totalSoGioQuyDoiKhaoThi,
//                 // totalSoGioQuyDoiHoiDong,
//                 // totalGioChuanBaiBao, totalSoGioChuanBienSoan,
//                 // totalSoGioQuyDoiSangChe, totalSoGioQuyDoiHopDong, totalGioChuanDeTai, totalSoGioChuanHuongDanNCKH, totalSoGioQuyDoiGiaiThuong,
//                 // totalSoGioQuyDoiHoatDongKhac
//             };

//             resolve(totals);
//         } catch (error) {
//             reject(error);
//         }
//     });
// };
// const getTongTaiFromId = (id) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const TaiGiangDayList = await TaiGiangDay.find({ QuanNhanId: id });
//             const TaiHuongDanList = await TaiHuongDan.find({ QuanNhanId: id });
//             const TaiKhaoThiList = await TaiKhaoThi.find({ QuanNhanId: id });
//             const TaiHoiDongList = await TaiHoiDong.find({ QuanNhanId: id });

//             const totalGioChuan = TaiGiangDayList.reduce((total, taiGiangDay) => total + taiGiangDay.GioChuan, 0);
//             const totalSoGioChuanHuongDan = TaiHuongDanList.reduce((total, taiHuongDan) => total + taiHuongDan.SoGioChuan, 0);
//             const totalSoGioQuyDoiKhaoThi = TaiKhaoThiList.reduce((total, taiKhaoThi) => total + taiKhaoThi.SoGioQuyDoi, 0);
//             const totalSoGioQuyDoiHoiDong = TaiHoiDongList.reduce((total, taiHoiDong) => total + taiHoiDong.SoGioQuyDoi, 0);

//             const totals = {
//                 totalGioChuan,
//                 totalSoGioChuanHuongDan,
//                 totalSoGioQuyDoiKhaoThi,
//                 totalSoGioQuyDoiHoiDong
//             };

//             resolve(totals);
//         } catch (error) {
//             reject(error);
//         }
//     });
// };
// const getTongTaiFromId = (id) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             console.log("1")
//             const TaiGiangDayCounts = await TaiGiangDay.aggregate([
//                 {
//                     $match: { QuanNhanId: id } // Filter by QuanNhanId
//                 },
//                 {
//                     $group: {
//                         _id: null,
//                         totalGioChuan: { $sum: "$GioChuan" } // Calculate total of GioChuan
//                     }
//                 }
//             ]);
//             console.log("1")

//             const TaiHuongDanCounts = await TaiHuongDan.aggregate([
//                 {
//                     $match: { QuanNhanId: id } // Filter by QuanNhanId
//                 },
//                 {
//                     $group: {
//                         _id: null,
//                         totalSoGioChuanHuongDan: { $sum: "$SoGioChuan" }
//                     }
//                 }
//             ]);
//             console.log("1")

//             const TaiKhaoThiCounts = await TaiKhaoThi.aggregate([
//                 {
//                     $match: { QuanNhanId: id } // Filter by QuanNhanId
//                 },
//                 {
//                     $group: {
//                         _id: null,
//                         totalSoGioQuyDoiKhaoThi: { $sum: "$SoGioQuyDoi" }
//                     }
//                 }
//             ]);
//             console.log("1")

//             const TaiHoiDongCounts = await TaiHoiDong.aggregate([
//                 {
//                     $match: { QuanNhanId: id } // Filter by QuanNhanId
//                 },
//                 {
//                     $group: {
//                         _id: null,
//                         totalSoGioQuyDoiHoiDong: { $sum: "$SoGioQuyDoi" }
//                     }
//                 }
//             ]);

//             const totals = {
//                 totalGioChuan: TaiGiangDayCounts.length > 0 ? TaiGiangDayCounts[0].totalGioChuan : 0,
//                 totalSoGioChuanHuongDan: TaiHuongDanCounts.length > 0 ? TaiHuongDanCounts[0].totalSoGioChuanHuongDan : 0,
//                 totalSoGioQuyDoiKhaoThi: TaiKhaoThiCounts.length > 0 ? TaiKhaoThiCounts[0].totalSoGioQuyDoiKhaoThi : 0,
//                 totalSoGioQuyDoiHoiDong: TaiHoiDongCounts.length > 0 ? TaiHoiDongCounts[0].totalSoGioQuyDoiHoiDong : 0
//             };

//             resolve(totals);
//         } catch (error) {
//             reject(error);
//         }
//     });
// };
const getTongTaiFromId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const TaiHoiDongCounts = await TaiHoiDong.aggregate([
                {
                    $match: { QuanNhanId: id }
                },
                {
                    $group: {
                        _id: null,
                        totalSoGioQuyDoiHoiDong: { $sum: "$SoGioQuyDoi" }
                    }
                }
            ]);

            const TaiGiangDayCounts = await TaiGiangDay.aggregate([
                {
                    $match: { QuanNhanId: id }
                },
                {
                    $group: {
                        _id: null,
                        totalGioChuanGiangDay: { $sum: "$GioChuan" }
                    }
                }
            ]);

            const TaiHuongDanCounts = await TaiHuongDan.aggregate([
                {
                    $match: { QuanNhanId: id }
                },
                {
                    $group: {
                        _id: null,
                        totalSoGioChuanHuongDan: { $sum: "$SoGioChuan" }
                    }
                }
            ]);

            const TaiKhaoThiCounts = await TaiKhaoThi.aggregate([
                {
                    $match: { QuanNhanId: id }
                },
                {
                    $group: {
                        _id: null,
                        totalSoGioQuyDoiKhaoThi: { $sum: "$SoGioQuyDoi" }
                    }
                }
            ]);

            const BaiBaoCounts = await BaiBaoKhoaHoc.aggregate([
                {
                    $match: { QuanNhanId: id }
                },
                {
                    $group: {
                        _id: null,
                        totalSoGioChuanBaiBao: { $sum: "$Tai" }
                    }
                }
            ]);

            const BienSoanCounts = await BienSoan.aggregate([
                {
                    $match: { QuanNhanId: id }
                },
                {
                    $group: {
                        _id: null,
                        totalSoGioChuanBienSoan: { $sum: "$Tai" }
                    }
                }
            ]);

            const SangCheCounts = await SangChe.aggregate([
                {
                    $match: { QuanNhanId: id }
                },
                {
                    $group: {
                        _id: null,
                        totalSoGioQuyDoiSangChe: { $sum: "$Tai" }
                    }
                }
            ]);

            const HopDongCounts = await HopDong.aggregate([
                {
                    $match: { QuanNhanId: id }
                },
                {
                    $group: {
                        _id: null,
                        totalSoGioQuyDoiHopDong: { $sum: "$Tai" }
                    }
                }
            ]);

            const DeTaiCounts = await DeTaiNCKH.aggregate([
                {
                    $match: { QuanNhanId: id }
                },
                {
                    $group: {
                        _id: null,
                        totalGioChuanDeTai: { $sum: "$Tai" }
                    }
                }
            ]);

            const HuongDanCounts = await HuongDanNCKH.aggregate([
                {
                    $match: { QuanNhanId: id }
                },
                {
                    $group: {
                        _id: null,
                        totalSoGioChuanHuongDanNCKH: { $sum: "$Tai" }
                    }
                }
            ]);

            const GiaiThuongCounts = await GiaiThuong.aggregate([
                {
                    $match: { QuanNhanId: id }
                },
                {
                    $group: {
                        _id: null,
                        totalSoGioQuyDoiGiaiThuong: { $sum: "$Tai" }
                    }
                }
            ]);

            const HoatDongKhacCounts = await HoatDongNCKhac.aggregate([
                {
                    $match: { QuanNhanId: id }
                },
                {
                    $group: {
                        _id: null,
                        totalSoGioQuyDoiHoatDongKhac: { $sum: "$Tai" }
                    }
                }
            ]);

            const TaiDaoTaoYeuCau = 300;
            const TaiNCKHYeuCau = 300;
            const TongTaiYeuCau = TaiDaoTaoYeuCau + TaiNCKHYeuCau;

            const TaiThucDaoTaoYeuCau = (TaiGiangDayCounts.length > 0 ? TaiGiangDayCounts[0].totalGioChuanGiangDay : 0) +
                (TaiHuongDanCounts.length > 0 ? TaiHuongDanCounts[0].totalSoGioChuanHuongDan : 0) +
                (TaiKhaoThiCounts.length > 0 ? TaiKhaoThiCounts[0].totalSoGioQuyDoiKhaoThi : 0) +
                (TaiHoiDongCounts.length > 0 ? TaiHoiDongCounts[0].totalSoGioQuyDoiHoiDong : 0);

            const TaiThucNCKHYeuCau = (BaiBaoCounts.length > 0 ? BaiBaoCounts[0].totalSoGioChuanBaiBao : 0) +
                (BienSoanCounts.length > 0 ? BienSoanCounts[0].totalSoGioChuanBienSoan : 0) +
                (SangCheCounts.length > 0 ? SangCheCounts[0].totalSoGioQuyDoiSangChe : 0) +
                (HopDongCounts.length > 0 ? HopDongCounts[0].totalSoGioQuyDoiHopDong : 0) +
                (DeTaiCounts.length > 0 ? DeTaiCounts[0].totalGioChuanDeTai : 0) +
                (HuongDanCounts.length > 0 ? HuongDanCounts[0].totalSoGioChuanHuongDanNCKH : 0) +
                (GiaiThuongCounts.length > 0 ? GiaiThuongCounts[0].totalSoGioQuyDoiGiaiThuong : 0) +
                (HoatDongKhacCounts.length > 0 ? HoatDongKhacCounts[0].totalSoGioQuyDoiHoatDongKhac : 0);


            GioChuanGiangDay = (TaiGiangDayCounts.length > 0 ? TaiGiangDayCounts[0].totalGioChuanGiangDay : 0);
            SoGioChuanHuongDan = (TaiHuongDanCounts.length > 0 ? TaiHuongDanCounts[0].totalSoGioChuanHuongDan : 0);
            SoGioQuyDoiKhaoThi = (TaiKhaoThiCounts.length > 0 ? TaiKhaoThiCounts[0].totalSoGioQuyDoiKhaoThi : 0);
            SoGioQuyDoiHoiDong = (TaiHoiDongCounts.length > 0 ? TaiHoiDongCounts[0].totalSoGioQuyDoiHoiDong : 0);

            KetQuaDaoTao = (TaiThucDaoTaoYeuCau / TaiDaoTaoYeuCau) * 100;

            KetQuaNCKH = (TaiThucNCKHYeuCau / TaiNCKHYeuCau) * 100;
            const TongThucTai = TaiThucDaoTaoYeuCau + TaiThucNCKHYeuCau;

            SoGioChuanBaiBao = (BaiBaoCounts.length > 0 ? BaiBaoCounts[0].totalSoGioChuanBaiBao : 0);
            SoGioChuanBienSoan = (BienSoanCounts.length > 0 ? BienSoanCounts[0].totalSoGioChuanBienSoan : 0);
            SoGioQuyDoiSangChe = (SangCheCounts.length > 0 ? SangCheCounts[0].totalSoGioQuyDoiSangChe : 0);
            SoGioQuyDoiHopDong = (HopDongCounts.length > 0 ? HopDongCounts[0].totalSoGioQuyDoiHopDong : 0);
            GioChuanDeTai = (DeTaiCounts.length > 0 ? DeTaiCounts[0].totalGioChuanDeTai : 0);
            SoGioChuanHuongDanNCKH = (HuongDanCounts.length > 0 ? HuongDanCounts[0].totalSoGioChuanHuongDanNCKH : 0);
            SoGioQuyDoiGiaiThuong = (GiaiThuongCounts.length > 0 ? GiaiThuongCounts[0].totalSoGioQuyDoiGiaiThuong : 0);
            SoGioQuyDoiHoatDongKhac = (HoatDongKhacCounts.length > 0 ? HoatDongKhacCounts[0].totalSoGioQuyDoiHoatDongKhac : 0);
            const totals = {
                TaiDaoTaoYeuCau,
                TaiNCKHYeuCau,
                TongTaiYeuCau,
                TaiThucDaoTaoYeuCau,
                TaiThucNCKHYeuCau,
                TongThucTai,
                SoGioChuanHuongDan, GioChuanGiangDay, SoGioQuyDoiKhaoThi, SoGioQuyDoiHoiDong,

                SoGioChuanBaiBao, SoGioChuanBienSoan, SoGioQuyDoiSangChe, SoGioQuyDoiHopDong, GioChuanDeTai,
                SoGioChuanHuongDanNCKH, SoGioQuyDoiGiaiThuong, SoGioQuyDoiHoatDongKhac,

                KetQuaDaoTao, KetQuaNCKH
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