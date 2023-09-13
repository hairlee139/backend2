const mongoose = require('mongoose')
const danhmucchucvudangSchema = new mongoose.Schema(
    {
        DanhMucChucVuDangId: { type: String },
        TenDanhMucChucVuDang: { type: String },
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
const DanhMucChucVuDang = mongoose.model("DanhMucChucVuDang", danhmucchucvudangSchema);
module.exports = DanhMucChucVuDang;