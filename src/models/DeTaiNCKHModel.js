const mongoose = require('mongoose')
const detainckhSchema = new mongoose.Schema(
    {
        DeTaiNCKHId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        LoaiDeTai: {
            type: String,
            required: true,
        },
        MaDeTai: {
            type: String,
            required: true,
        },
        TenDeTai: {
            type: String,


        },
        HinhThucKhenThuong: {
            type: String,
            required: true,

        },
        KinhPhi: {
            type: String,

        },
        CNDeTai: {
            type: String,

        },
        DonViChuTri: {
            type: String,

        },
        ThoiGianDuKienKT: {
            type: Date,

        },
        ThoiGianBatDau: {
            type: Date,

        },
        GiaHanLan1: {
            type: Date,

        },
        GiaHanLan2: {
            type: Date,

        },
        SoThanhVien: {
            type: Number,

        },
        CacThanhVien: {
            type: String,

        },
        HinhThucDeTai: {
            type: String,
            require: true

        },
        ThuocCTDuAn: {
            type: String,


        },
        NgayNghiemThu: {
            type: Date,

        },
        MoTaKetThuc: {
            type: String,

        },
        QLDVHV: {
            type: Number,

        },
        TrangThai: {
            type: Number,
            required: true,
            default: 0
        },
        Tai: {
            type: Number,

        },
        PhanLoaiKetQua: {
            type: String,
            required: true,

        },
        FileCM: {
            type: String,

        },
        CacHTCV: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "HTCVDeTai",
        }],


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
const DeTaiNCKH = mongoose.model("DeTaiNCKH", detainckhSchema);
module.exports = DeTaiNCKH;