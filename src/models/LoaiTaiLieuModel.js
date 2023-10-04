const mongoose = require('mongoose')
const loaitailieuSchema = new mongoose.Schema(
    {
        LoaiTaiLieuId: { type: String },
        TenLoaiTaiLieu: { type: String },
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
const LoaiTaiLieu = mongoose.model("LoaiTaiLieu", loaitailieuSchema);
module.exports = LoaiTaiLieu;