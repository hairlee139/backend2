const mongoose = require('mongoose')
const danhmucchucvuSchema = new mongoose.Schema(
    {
        DanhMucChucVuId: { type: String },
        TenDanhMucChucVu: { type: String },
        HienThi: { type: Boolean, default: true },
        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const DanhMucChucVu = mongoose.model("DanhMucChucVu", danhmucchucvuSchema);
module.exports = DanhMucChucVu;