const mongoose = require('mongoose')
const hoatdongnckhacSchema = new mongoose.Schema(
    {
        HoatDongKhacId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        NhomNghienCuu: {
            type: String,
            required: true,
        },
        LoaiHoatDong: {
            type: String,


        },
        NoiDungThucHien: {
            type: String,

        },
        MoTaThem: {
            type: String,

        },
        ThoiDiemThucHien: {
            type: Date,

        },
        Quy: {
            type: Number,

        },
        Nam: {
            type: Number,
        },
        SoLuongTacGia: {
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
        CacHTCV: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "ThanhVienHDNC",
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
constHoatDongKhac = mongoose.model("HoatDongKhac", hoatdongnckhacSchema);
module.exports = HoatDongKhac;