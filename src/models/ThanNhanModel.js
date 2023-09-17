const mongoose = require('mongoose')
const thannhanSchema = new mongoose.Schema(
    {
        ThanNhanId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        LoaiQuanHe: {
            type: String,

        },
        HoTen: {
            type: String,

        },
        QueQuan: {
            type: String,

        },
        NamSinh: {
            type: Date,
            //required: true,
        },
        NgheNghiep: {
            type: String,
            required: true,
        },
        SoDienThoai: {
            type: String,

        },
        NoiCongTac: {
            type: String,

        },
        ChucVu: {
            type: String,

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
const ThanNhan = mongoose.model("ThanNhan", thannhanSchema);
module.exports = ThanNhan;