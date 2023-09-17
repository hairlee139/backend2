const mongoose = require('mongoose')
const quatrinhkhenthuongSchema = new mongoose.Schema(
    {
        QuaTrinhKhenThuongId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        SoQuyetDinh: {
            type: String,

        },
        NgayQuyetDinh: {
            type: Date,

        },
        TenQuyetDinh: {
            type: String,
            required: true,
        },

        LoaiKhenThuong: {
            type: String,

        },
        CapKhenThuong: {
            type: String,
            required: true,
        },
        TrangThai: {
            type: Number,
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
const QuaTrinhKhenThuong = mongoose.model("QuaTrinhKhenThuong", quatrinhkhenthuongSchema);
module.exports = QuaTrinhKhenThuong;