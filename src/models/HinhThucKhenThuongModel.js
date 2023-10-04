const mongoose = require('mongoose')
const hinhthuckhenthuongSchema = new mongoose.Schema(
    {
        HinhThucKhenThuongId: { type: String },
        TenHinhThucKhenThuong: { type: String },
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
const HinhThucKhenThuong = mongoose.model("HinhThucKhenThuong", hinhthuckhenthuongSchema);
module.exports = HinhThucKhenThuong;