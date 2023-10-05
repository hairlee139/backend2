const mongoose = require('mongoose')
const dinhmucchucdanhSchema = new mongoose.Schema(
    {
        DinhMucChucDanhId: { type: String },
        ChucDanh: { type: String },
        DinhMucThoiGian: { type: Number },
        DinhMucGioChuan: { type: Number },
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
const DinhMucChucDanh = mongoose.model("DinhMucChucDanh", dinhmucchucdanhSchema);
module.exports = DinhMucChucDanh;