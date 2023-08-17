const mongoose = require('mongoose')
const danhmuccapbacSchema = new mongoose.Schema(
    {
        DanhMucCapBacId: {type: String},
        TenDanhMucCapBac: { type: String },
        HienThi: { type: Boolean, default: true},
        GhiChu: {String}
    },
    {
        timestamps: true
    }
);
const DanhMucCapBac = mongoose.model("DanhMucCapBac", danhmuccapbacSchema);
module.exports = DanhMucCapBac;