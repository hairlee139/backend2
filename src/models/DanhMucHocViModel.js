const mongoose = require('mongoose')
const danhmuchocviSchema = new mongoose.Schema(
    {
        DanhMucHocViId: { type: String },
        TenDanhMucHocVi: { type: String },
        HienThi: { type: Boolean, default: true },
        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const DanhMucHocVi = mongoose.model("DanhMucHocVi", danhmuchocviSchema);
module.exports = DanhMucHocVi;