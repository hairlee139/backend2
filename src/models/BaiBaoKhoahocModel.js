const mongoose = require('mongoose')
const baibaokhSchema = new mongoose.Schema(
    {
        BaiBaoKhoaHocId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        TenBai: {
            type: String,
            //  /  required: true,
        },
        TenTapChiHoiThao: {
            type: String,

        },
        LoaiTapChiHoiThao: {
            type: String,

        },
        SoTapChi: {
            type: String,

        },
        DiemToiDa: {
            type: Number,

        },
        KinhPhiHoTro: {
            type: String,

        },
        NganhXetChucDanh: {
            type: String,

        },
        TapSo: {
            type: Number,

        },
        NgonNguBao: {
            type: String,

        },
        TrangBaiViet: {
            type: Number,

        },
        ThoiDiemXuatBan: {
            type: Date,

        },
        SoTacGia: {
            type: Number,

        },
        CacTacGia: {
            type: String,

        },
        LienKet: {
            type: String,

        },
        Quy: {
            type: Number,

        },
        Nam: {
            type: Number,

        },
        Tai: {
            type: Number,

        },
        ThuocDeTai: {
            type: String,

        },
        NhomNghienCuu: {
            type: String,

        },
        FileCM: {
            type: String,

        },
        CacHTCV: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "HTCVBaiBao",
        }],
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
const BaiBaoKhoaHoc = mongoose.model("BaiBaoKhoaHoc", baibaokhSchema);
module.exports = BaiBaoKhoaHoc;