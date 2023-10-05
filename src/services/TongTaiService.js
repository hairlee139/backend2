const TaiGiangDay = require("../models/TaiGiangDayModel")
const TaiHoiDong = require("../models/TaiHoiDongModel")
const TaiHuongDan = require("../models/TaiHuongDanModel")
const TaiKhaoThi = require("../models/TaiKhaoThiModel")

const getTongTaiFromId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const TaiGiangDayList = await TaiGiangDay.find({ QuanNhanId: id });
            const TaiHuongDanList = await TaiHuongDan.find({ QuanNhanId: id });
            const TaiKhaoThiList = await TaiKhaoThi.find({ QuanNhanId: id });
            const TaiHoiDongList = await TaiHoiDong.find({ QuanNhanId: id });

            const totalGioChuanGiangDay = TaiGiangDayList.reduce((total, taiGiangDay) => total + taiGiangDay.GioChuan, 0);
            const totalSoGioChuanHuongDan = TaiHuongDanList.reduce((total, taiHuongDan) => total + taiHuongDan.SoGioChuan, 0);
            const totalSoGioQuyDoiKhaoThi = TaiKhaoThiList.reduce((total, taiKhaoThi) => total + taiKhaoThi.SoGioQuyDoi, 0);
            const totalSoGioQuyDoiHoiDong = TaiHoiDongList.reduce((total, taiHoiDong) => total + taiHoiDong.SoGioQuyDoi, 0);

            const totals = {
                totalGioChuanGiangDay,
                totalSoGioChuanHuongDan,
                totalSoGioQuyDoiKhaoThi,
                totalSoGioQuyDoiHoiDong
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