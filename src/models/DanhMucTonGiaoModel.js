const mongoose = require('mongoose')
const danhmuctongiaoSchema = new mongoose.Schema(
    {
        DanhMucTonGiaoId: { type: String },
        TenDanhMucTonGiao: { type: String },
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
const DanhMucTonGiao = mongoose.model("DanhMucTonGiao", danhmuctongiaoSchema);
module.exports = DanhMucTonGiao;