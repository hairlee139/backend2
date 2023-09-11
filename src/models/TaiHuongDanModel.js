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
const TaiHuongDan = mongoose.model("TaiHuongDan", taihuongdanSchema);
module.exports = TaiHuongDan;