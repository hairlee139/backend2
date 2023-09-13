const mongoose = require('mongoose')
const danhmucchucvuSchema = new mongoose.Schema(
    {
        DanhMucChucVuId: { type: String },
        TenDanhMucChucVu: { type: String },
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
const DanhMucChucVu = mongoose.model("DanhMucChucVu", danhmucchucvuSchema);
module.exports = DanhMucChucVu;