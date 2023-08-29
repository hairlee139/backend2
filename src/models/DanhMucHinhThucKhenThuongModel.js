const mongoose = require('mongoose')
const danhmuckhenthuongSchema = new mongoose.Schema(
    {
        DanhMucKhenThuongId: { type: String },
        TenDanhMucKhenThuong: { type: String },
        HienThi: { type: Boolean, default: true },
        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const DanhMucKhenThuong = mongoose.model("DanhMucKhenThuong", danhmuckhenthuongSchema);
module.exports = DanhMucKhenThuong;