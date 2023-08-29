const mongoose = require('mongoose')
const danhmucxaSchema = new mongoose.Schema(
    {
        DanhMucXaId: { type: String },
        TenDanhMucXa: { type: String },
        TenDanhMucHuyen: { type: String },
        TenDanhMucTinh: { type: String },
        HienThi: { type: Boolean, default: true },
        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const DanhMucXa = mongoose.model("DanhMucXa", danhmucxaSchema);
module.exports = DanhMucXa;