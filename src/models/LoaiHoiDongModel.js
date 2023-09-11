const mongoose = require('mongoose')
const loaihoidongSchema = new mongoose.Schema(
    {
        LoaiHoiDongId: { type: String },
        TenLoaiHoiDong: { type: String },

        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const LoaiHoiDong = mongoose.model("LoaiHoiDong", loaihoidongSchema);
module.exports = LoaiHoiDong;