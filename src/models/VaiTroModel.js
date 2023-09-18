const mongoose = require('mongoose')
const vaitroSchema = new mongoose.Schema(
    {
        VaiTroId: { type: String },
        TenVaiTro: { type: String },
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
const VaiTro = mongoose.model("VaiTro", vaitroSchema);
module.exports = VaiTro;