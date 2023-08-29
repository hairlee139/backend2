const mongoose = require('mongoose')
const danhmuckyluatSchema = new mongoose.Schema(
    {
        DanhMucKyLuatId: { type: String },
        TenDanhMucKyLuat: { type: String },
        HienThi: { type: Boolean, default: true },
        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const DanhMucKyLuat = mongoose.model("DanhMucKyLuat", danhmuckyluatSchema);
module.exports = DanhMucKyLuat;