const mongoose = require('mongoose')
const caphoidongSchema = new mongoose.Schema(
    {
        CapHoiDongId: { type: String },
        TenCapHoiDong: { type: String },
        TenLoaiHoiDong: { type: String },

        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const CapHoiDong = mongoose.model("CapHoiDong", caphoidongSchema);
module.exports = CapHoiDong;