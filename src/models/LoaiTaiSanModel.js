const mongoose = require('mongoose')
const loaitaisanSchema = new mongoose.Schema(
    {
        LoaiTaiSanId: { type: String },
        TenLoaiTaiSan: { type: String },
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
const LoaiTaiSan = mongoose.model("LoaiTaiSan", loaitaisanSchema);
module.exports = LoaiTaiSan;