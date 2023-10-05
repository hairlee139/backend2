const mongoose = require('mongoose')
const dinhmucmiengiamSchema = new mongoose.Schema(
    {
        DinhMucMienGiamId: { type: String },
        DoiTuong: { type: String },
        TyLeMienGiam: { type: String },
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
const DinhMucMienGiam = mongoose.model("DinhMucMienGiam", dinhmucmiengiamSchema);
module.exports = DinhMucMienGiam;