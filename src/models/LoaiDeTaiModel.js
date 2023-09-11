const mongoose = require('mongoose')
const loaidetaiSchema = new mongoose.Schema(
    {
        LoaiDeTaiId: { type: String },
        TenLoaiDeTai: { type: String },
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
const LoaiDeTai = mongoose.model("LoaiDeTai", loaidetaiSchema);
module.exports = LoaiDeTai;