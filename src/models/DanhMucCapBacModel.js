const mongoose = require('mongoose')
const danhmuccapbacSchema = new mongoose.Schema(
    {
        DanhMucCapBacId: { type: String },
        TenDanhMucCapBac: { type: String },
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
const DanhMucCapBac = mongoose.model("DanhMucCapBac", danhmuccapbacSchema);
module.exports = DanhMucCapBac;