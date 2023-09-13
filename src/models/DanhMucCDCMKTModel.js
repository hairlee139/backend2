const mongoose = require('mongoose')
const danhmuccdcmktSchema = new mongoose.Schema(
    {
        DanhMucCDCMKTId: { type: String },
        TenDanhMucCDCMKT: { type: String },
        HienThi: { type: Boolean, default: true },
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
const DanhMucCDCMKT = mongoose.model("DanhMucCDCMKT", danhmuccdcmktSchema);
module.exports = DanhMucCDCMKT;