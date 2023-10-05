const mongoose = require('mongoose')
const taihoidongSchema = new mongoose.Schema(
    {
        TaiHoiDongId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        CapHoiDong: {
            type: String,
            required: true,
        },
        LoaiHoiDong: {
            type: String,

        },
        VaiTro: {
            type: String,

        },
        ThoiDiem: {
            type: String,
            required: true,
        },
        Quy: {
            type: String,

        },
        Nam: {
            type: String,
            required: true,
        },
        KhoiLuongCongViec: {
            type: Number,
            required: true,
        },

        SoGioQuyDoi: {
            type: Number,
            required: true,
        },
        FileCM: {
            type: String,

        },
        TrangThai: {
            type: Number,
            // required: true,
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
const TaiHoiDong = mongoose.model("TaiHoiDong", taihoidongSchema);
module.exports = TaiHoiDong;