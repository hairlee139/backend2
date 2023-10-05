const mongoose = require('mongoose')
const loaitapchiSchema = new mongoose.Schema(
    {
        LoaiTapChiId: { type: String },
        TenLoaiTapChi: { type: String },
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
const LoaiTapChi = mongoose.model("LoaiTapChi", loaitapchiSchema);
module.exports = LoaiTapChi;