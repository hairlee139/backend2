const mongoose = require('mongoose')
const danhmuckyluatSchema = new mongoose.Schema(
    {
        DanhMucKyLuatId: { type: String },
        TenDanhMucKyLuat: { type: String },
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
const DanhMucKyLuat = mongoose.model("DanhMucKyLuat", danhmuckyluatSchema);
module.exports = DanhMucKyLuat;