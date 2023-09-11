const mongoose = require('mongoose')
const taigiangdaySchema = new mongoose.Schema(
    {
        TaiGiangDayId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        MaLop: {
            type: String,
            required: true,
        },
        MaMH: {
            type: String,

        },
        TenMH: {
            type: String,

        },
        SoTC: {
            type: String,
            required: true,
        },
        SiSo: {
            type: String,
            required: true,
        },
        HTDT: {
            type: String,

        },
        LoaiHinhDT: {
            type: String,
            required: true,
        },
        KetThuc: {
            type: String,
            required: true,
        },
        Quy: {
            type: String,
            required: true,
        },
        Nam: {
            type: String,
            required: true,
        },
        HocKy: {
            type: String,
            required: true,
        },
        HTThi: {
            type: String,
            required: true,
        },
        SoTiet: {
            type: String,
            required: true,
        },

        TrangThai: {
            type: String,
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
const TaiGiangDay = mongoose.model("TaiGiangDay", taigiangdaySchema);
module.exports = TaiGiangDay;