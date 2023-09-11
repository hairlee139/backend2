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
        HinhThucKhaoThi: {
            type: String,
            required: true,
        },
        MaLopHocPhan: {
            type: String,

        },
        MonHoc: {
            type: String,
            required: true,
        },
        KhoiLuongCongViec: {
            type: String,
            required: true,
        },
        SoGioQuyDoi: {
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
const TaiKhaoThi = mongoose.model("TaiKhaoThi", taikhaothiSchema);
module.exports = TaiKhaoThi;