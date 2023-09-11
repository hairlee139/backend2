const mongoose = require('mongoose')
const hinhthuchuongdanSchema = new mongoose.Schema(
    {
        HinhThucHuongDanId: { type: String },
        TenHinhThucHuongDan: { type: String },
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
const HinhThucHuongDan = mongoose.model("HinhThucHuongDan", hinhthuchuongdanSchema);
module.exports = HinhThucHuongDan;