const mongoose = require('mongoose')
const biensoanSchema = new mongoose.Schema(
    {
        BienSoanId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        Ten: {
            type: String,
            required: true,
        },
        LoaiTaiLieu: {
            type: String,

        },
        SoTrang: {
            type: Number,

        },
        MaXuatBan: {
            type: String,

        },
        TenNhaXuatBan: {
            type: String,

        },
        NgayXuatBan: {
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
        NgonNguSach: {
            type: String,

        },
        NhomNghienCuu: {
            type: String,

        },
        Tai: {
            type: Number,

        },
        FileCM: {
            type: String,

        },
        CacHTCV: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "HTCVBienSoan",
        }],
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
const BienSoan = mongoose.model("BienSoan", biensoanSchema);
module.exports = BienSoan;