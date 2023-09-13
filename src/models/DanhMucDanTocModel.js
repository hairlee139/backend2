const mongoose = require('mongoose')
const danhmucdantocSchema = new mongoose.Schema(
    {
        DanhMucDanTocId: { type: String },
        TenDanhMucDanToc: { type: String },
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
const DanhMucDanToc = mongoose.model("DanhMucDanToc", danhmucdantocSchema);
module.exports = DanhMucDanToc;