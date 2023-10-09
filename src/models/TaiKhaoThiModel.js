const mongoose = require('mongoose')
const taikhaothiSchema = new mongoose.Schema(
    {
        TaiKhaoThiId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
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

        },
        HocKy: {
            type: String,
            required: true,
        },
        TenHinhThucKhaoThi: {
            type: String,
            // required: true,
        },
        MaLopHocPhan: {
            type: String,

        },
        MonHoc: {
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
const TaiKhaoThi = mongoose.model("TaiKhaoThi", taikhaothiSchema);
module.exports = TaiKhaoThi;