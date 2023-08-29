const mongoose = require('mongoose')
const danhmuctongiaoSchema = new mongoose.Schema(
    {
        DanhMucTonGiaoId: { type: String },
        TenDanhMucTonGiao: { type: String },
        HienThi: { type: Boolean, default: true },
        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const DanhMucTonGiao = mongoose.model("DanhMucTonGiao", danhmuctongiaoSchema);
module.exports = DanhMucTonGiao;