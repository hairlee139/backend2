const mongoose = require('mongoose')
const danhmuckhuvucutSchema = new mongoose.Schema(
    {
        DanhMucKhuVucUTId: { type: String },
        TenDanhMucKhuVucUT: { type: String },
        HienThi: { type: Boolean, default: true },
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
const DanhMucKhuVucUT = mongoose.model("DanhMucKhuVucUT", danhmuckhuvucutSchema);
module.exports = DanhMucKhuVucUT;