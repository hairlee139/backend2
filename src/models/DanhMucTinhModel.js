const mongoose = require('mongoose')
const danhmuctinhSchema = new mongoose.Schema(
    {
        DanhMucTinhId: { type: String },
        TenDanhMucTinh: { type: String },
        HienThi: { type: Boolean, default: true },
        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const DanhMucTinh = mongoose.model("DanhMucTinh", danhmuctinhSchema);
module.exports = DanhMucTinh;