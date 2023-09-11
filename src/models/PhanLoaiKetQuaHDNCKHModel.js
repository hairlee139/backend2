const mongoose = require('mongoose')
const phanloaiketquaSchema = new mongoose.Schema(
    {
        PhanLoaiKetQuaId: { type: String },
        TenPhanLoaiKetQua: { type: String },
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
const PhanLoaiKetQua = mongoose.model("PhanLoaiKetQua", phanloaiketquaSchema);
module.exports = PhanLoaiKetQua;