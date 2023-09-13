const mongoose = require('mongoose')
const danhmuchuyenSchema = new mongoose.Schema(
    {
        DanhMucHuyenId: { type: String },
        TenDanhMucHuyen: { type: String },
        TenDanhMucTinh: { type: String, required: true },
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
const DanhMucHuyen = mongoose.model("DanhMucHuyen", danhmuchuyenSchema);
module.exports = DanhMucHuyen;