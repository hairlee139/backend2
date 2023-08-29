const mongoose = require('mongoose')
const danhmucloaidonviSchema = new mongoose.Schema(
    {
        DanhMucLoaiDonViId: { type: String },
        TenDanhMucLoaiDonVi: { type: String },
        HienThi: { type: Boolean, default: true },
        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const DanhMucLoaiDonVi = mongoose.model("DanhMucLoaiDonVi", danhmucloaidonviSchema);
module.exports = DanhMucLoaiDonVi;