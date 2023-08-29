const mongoose = require('mongoose')
const danhmucdantocSchema = new mongoose.Schema(
    {
        DanhMucDanTocId: { type: String },
        TenDanhMucDanToc: { type: String },
        HienThi: { type: Boolean, default: true },
        GhiChu: { String }
    },
    {
        timestamps: true
    }
);
const DanhMucDanToc = mongoose.model("DanhMucDanToc", danhmucdantocSchema);
module.exports = DanhMucDanToc;