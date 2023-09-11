const mongoose = require('mongoose')
const hinhthucdaotaoSchema = new mongoose.Schema(
    {
        HinhThucDaoTaoId: { type: String },
        TenHinhThucDaoTao: { type: String },
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
const HinhThucDaoTao = mongoose.model("HinhThucDaoTao", hinhthucdaotaoSchema);
module.exports = HinhThucDaoTao;