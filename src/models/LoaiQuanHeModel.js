const mongoose = require('mongoose')
const loaiquanheSchema = new mongoose.Schema(
    {
        LoaiQuanHeId: { type: String },
        TenLoaiQuanHe: { type: String },
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
const LoaiQuanHe = mongoose.model("LoaiQuanHe", loaiquanheSchema);
module.exports = LoaiQuanHe;