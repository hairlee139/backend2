const mongoose = require('mongoose')
const vaitrohoidongSchema = new mongoose.Schema(
    {
        VaiTroHoiDongId: { type: String },
        TenVaiTroHoiDong: { type: String },

        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const VaiTroHoiDong = mongoose.model("VaiTroHoiDong", vaitrohoidongSchema);
module.exports = VaiTroHoiDong;