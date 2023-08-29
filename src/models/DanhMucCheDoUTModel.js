const mongoose = require('mongoose')
const danhmucchedoutSchema = new mongoose.Schema(
    {
        DanhMucCheDoUTId: { type: String },
        TenDanhMucCheDoUT: { type: String },
        HienThi: { type: Boolean, default: true },
        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const DanhMucCheDoUT = mongoose.model("DanhMucCheDoUT", danhmucchedoutSchema);
module.exports = DanhMucCheDoUT;