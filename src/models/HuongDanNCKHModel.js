const mongoose = require('mongoose')
const huongdannckhSchema = new mongoose.Schema(
    {
        HuongDanNCKHId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        Ten: {
            type: String,
            required: true,
        },
        LoaiDeTai: {
            type: String,

        },
        DonViChuTri: {
            type: String,

        },
        ThoiGianBatDau: {
            type: String,
            required: true,
        },
        ThoiGianDuKienKetThuc: {
            type: String,
            required: true,
        },
        CacSinhVien: {
            type: String,

        },
        PhanLoaiKetQua: {
            type: String,
            required: true,
        },
        HinhThucKhenThuong: {
            type: String,

        },
        NgayNghiemThu: {
            type: String,
            required: true,
        },
        Tai: {
            type: String,

        },
        TrangThai: {
            type: String,

        },
        edituser: {
            type: String,
        },
        edittime: {
            type: String,
        },
        GhiChu: {
            type: String,
        },
    },
    {
        timestamps: true
    }
);
const HuongDanNCKH = mongoose.model("HuongDanNCKH", huongdannckhSchema);
module.exports = HuongDanNCKH;