const mongoose = require('mongoose')
const taihuongdanSchema = new mongoose.Schema(
    {
        TaiHuongDanId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        HinhThucHuongDan: {
            type: String,
            required: true,
        },
        HocVien: {
            type: String,

        },
        Lop: {
            type: String,

        },
        DeTai: {
            type: String,
            required: true,
        },
        NgayBatDau: {
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
        SoCBHuongDan: {
            type: String,
            required: true,
        },
        DinhMuc: {
            type: String,
            required: true,
        },
        SoGioChuan: {
            type: Number,
            required: true,
        },
        FileCM: {
            type: String,

        },
        TrangThai: {
            type: Number,
            //   required: true,
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
const TaiHuongDan = mongoose.model("TaiHuongDan", taihuongdanSchema);
module.exports = TaiHuongDan;