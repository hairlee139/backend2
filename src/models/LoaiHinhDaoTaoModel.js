const mongoose = require('mongoose')
const hinhthucdaotaoSchema = new mongoose.Schema(
    {
        LoaiHinhDaoTaoId: { type: String },
        TenLoaiHinhDaoTao: { type: String },
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
const LoaiHinhDaoTao = mongoose.model("LoaiHinhDaoTao", hinhthucdaotaoSchema);
module.exports = LoaiHinhDaoTao;