const mongoose = require('mongoose')
const danhmuchochamSchema = new mongoose.Schema(
    {
        DanhMucHocHamId: { type: String },
        TenDanhMucHocHam: { type: String },
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
const DanhMucHocHam = mongoose.model("DanhMucHocHam", danhmuchochamSchema);
module.exports = DanhMucHocHam;