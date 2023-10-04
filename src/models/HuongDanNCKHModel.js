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
        FileCM: {
            type: String,

        },
        Tai: {
            type: String,

        },
        TrangThai: {
            type: Number,
            required: true,
            default: 0
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