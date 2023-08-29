const mongoose = require('mongoose')
const danhmuccdcmktSchema = new mongoose.Schema(
    {
        DanhMucCDCMKTId: { type: String },
        TenDanhMucCDCMKT: { type: String },
        HienThi: { type: Boolean, default: true },
        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const DanhMucCDCMKT = mongoose.model("DanhMucCDCMKT", danhmuccdcmktSchema);
module.exports = DanhMucCDCMKT;