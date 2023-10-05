const mongoose = require('mongoose')
const loaigiaithuongSchema = new mongoose.Schema(
    {
        LoaiGiaiThuongId: { type: String },
        TenLoaiGiaiThuong: { type: String },
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
const LoaiGiaiThuong = mongoose.model("LoaiGiaiThuong", loaigiaithuongSchema);
module.exports = LoaiGiaiThuong;