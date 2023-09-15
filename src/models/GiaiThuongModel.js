const mongoose = require('mongoose')
const giaithuongSchema = new mongoose.Schema(
    {
        GiaiThuongId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        LoaiGiaiThuong: {
            type: String,
            required: true,
        },
        TenCongTrinh: {
            type: String,


        },
        NgayGiaiThuong: {
            type: Date,

        },
        SoTacGia: {
            type: Number,

        },
        CacTacGia: {
            type: String,

        },
        Quy: {
            type: Number,

        },
        Nam: {
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
            ref: "ThanhVienGiaiThuong",
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
const GiaiThuong = mongoose.model("GiaiThuong", giaithuongSchema);
module.exports = GiaiThuong;