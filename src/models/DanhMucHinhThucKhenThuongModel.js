const mongoose = require('mongoose')
const danhmuckhenthuongSchema = new mongoose.Schema(
    {
        DanhMucKhenThuongId: { type: String },
        TenDanhMucKhenThuong: { type: String },
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
const DanhMucKhenThuong = mongoose.model("DanhMucKhenThuong", danhmuckhenthuongSchema);
module.exports = DanhMucKhenThuong;