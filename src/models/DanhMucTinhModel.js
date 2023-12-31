const mongoose = require('mongoose')
const danhmuctinhSchema = new mongoose.Schema(
    {
        DanhMucTinhId: { type: String },
        TenDanhMucTinh: { type: String },
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
const DanhMucTinh = mongoose.model("DanhMucTinh", danhmuctinhSchema);
module.exports = DanhMucTinh;