const mongoose = require('mongoose')
const danhmucloaidonviSchema = new mongoose.Schema(
    {
        DanhMucLoaiDonViId: { type: String },
        TenDanhMucLoaiDonVi: { type: String },
        HienThi: { type: Boolean, default: true },
        GhiChu: { String },
        edituser: {
            type: String,

        },
        edittime: {
            type: Date,

        },
        lock: {
            type: Number,

        },
        lockdate: {
            type: Date,

        },
    },
    {
        timestamps: true
    }
);
const DanhMucLoaiDonVi = mongoose.model("DanhMucLoaiDonVi", danhmucloaidonviSchema);
module.exports = DanhMucLoaiDonVi;