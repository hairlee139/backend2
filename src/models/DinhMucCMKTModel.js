const mongoose = require('mongoose')
const dinhmuccmktSchema = new mongoose.Schema(
    {
        DinhMucCMKTId: { type: String },
        ChucDanh: { type: String },
        QuyDinhChung: { type: Number },
        GiaoDucTheChat: { type: Number },
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
const DinhMucCMKT = mongoose.model("DinhMucCMKT", dinhmuccmktSchema);
module.exports = DinhMucCMKT;