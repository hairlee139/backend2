const mongoose = require('mongoose')
const loaidangkySchema = new mongoose.Schema(
    {
        LoaiDangKyId: { type: String },
        TenLoaiDangKy: { type: String },
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
const LoaiDangKy = mongoose.model("LoaiDangKy", loaidangkySchema);
module.exports = LoaiDangKy;