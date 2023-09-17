const mongoose = require('mongoose')
const hopdongSchema = new mongoose.Schema(
    {
        HopDongId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        TenHopDong: {
            type: String,
            // required: true,
        },
        BenA: {
            type: String,


        },
        DonViChuTri: {
            type: String,

        },
        GiaTriHopDong: {
            type: String,

        },
        ThoiDiemBatDau: {
            type: Date,

        },
        ThoiDiemKetThuc: {
            type: Date,

        },
        NguoiChuTri: {
            type: String,

        },
        SoThanhVien: {
            type: Number,

        },
        CacThanhVien: {
            type: String,

        },
        NgayThanhLy: {
            type: Date,

        },

        TrangThai: {
            type: Number,
            required: true,
            default: 0
        },
        Tai: {
            type: Number,

        },

        FileCM: {
            type: String,

        },
        CacHTCV: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "HTCVHopDong",
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
const HopDong = mongoose.model("HopDong", hopdongSchema);
module.exports = HopDong;