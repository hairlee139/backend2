const mongoose = require('mongoose')
const loaihoatdongSchema = new mongoose.Schema(
    {
        LoaiHoatDongId: { type: String },
        TenLoaiHoatDong: { type: String },
        GhiChu: { String },
        edituser: {
            type: String,

        },
        edittime: {
            type: Date,

        },
        lock: {
            type: Number,

        },
        lockdate: {
            type: Date,

        },
    },
    {
        timestamps: true
    }
);
const LoaiHoatDong = mongoose.model("LoaiHoatDong", loaihoatdongSchema);
module.exports = LoaiHoatDong;