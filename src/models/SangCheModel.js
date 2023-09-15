const mongoose = require('mongoose')
const sangcheSchema = new mongoose.Schema(
    {
        SangCheId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        TenSangChe: {
            type: String,

        },
        LoaiDangKy: {
            type: String,
            required: true,

        },
        DonViCap: {
            type: String,

        },
        NhomNghienCuu: {
            type: String,
            required: true,

        },
        ThoiDiemDangKy: {
            type: Date,

        },

        SoTacGia: {
            type: Number,

        },
        CacTacGia: {
            type: String,

        },
        Nam: {
            type: Number,

        },
        Quy: {
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

        FileCM: {
            type: String,

        },
        DanhSachThanhVien: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "ThanhVienSangChe",
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
const SangChe = mongoose.model("SangChe", sangcheSchema);
module.exports = SangChe;