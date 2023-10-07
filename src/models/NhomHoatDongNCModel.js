const mongoose = require('mongoose')
const nhomhoatdongSchema = new mongoose.Schema(
    {
        NhomHoatDongId: { type: String },
        TenNhomHoatDongNC: { type: String },
        LoaiHoatDong: { type: String },
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
const NhomHoatDongNCModel = mongoose.model("NhomHoatDongNCModel", nhomhoatdongSchema);
module.exports = NhomHoatDongNCModel;