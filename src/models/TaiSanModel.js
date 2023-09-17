const mongoose = require('mongoose')
const taisanSchema = new mongoose.Schema(
    {
        TaiSanId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        TenTaiSan: {
            type: String,

        },
        LoaiTaiSan: {
            type: String,

        },
        GiaTri: {
            type: String,

        },
        DienTich: {
            type: String,

        },
        HoatDongKinhTe: {
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
const TaiSan = mongoose.model("TaiSan", taisanSchema);
module.exports = TaiSan;