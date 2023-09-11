const mongoose = require('mongoose')
const hinhthuchuongdanSchema = new mongoose.Schema(
    {
        HinhThucKhaoThiId: { type: String },
        TenHinhThucKhaoThi: { type: String },
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
const HinhThucKhaoThi = mongoose.model("HinhThucKhaoThi", hinhthuchuongdanSchema);
module.exports = HinhThucKhaoThi;