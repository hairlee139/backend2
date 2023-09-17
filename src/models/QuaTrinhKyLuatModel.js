const mongoose = require('mongoose')
const quatrinhkyluatSchema = new mongoose.Schema(
    {
        QuaTrinhKyLuatId: {
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
            // required: true,
        },

        CapKyLuat: {
            type: String,
            required: true,
        },
        HinhThucKyLuat: {
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
const QuaTrinhKyLuat = mongoose.model("QuaTrinhKyLuat", quatrinhkyluatSchema);
module.exports = QuaTrinhKyLuat;