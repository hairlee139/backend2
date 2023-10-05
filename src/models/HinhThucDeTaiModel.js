const mongoose = require('mongoose')
const hinhthucdetaiSchema = new mongoose.Schema(
    {
        HinhThucDeTaiId: { type: String },
        TenHinhThucDeTai: { type: String },
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
const HinhThucDeTai = mongoose.model("HinhThucDeTai", hinhthucdetaiSchema);
module.exports = HinhThucDeTai;