const mongoose = require('mongoose')
const danhmuccapbacSchema = new mongoose.Schema(
    {
        DanhMucCapBacId: {type: String},
        TenDanhMucCapBac: { type: String },
        GhiChu: {String}
    },
    {
        timestamps: true
    }
);
const DanhMucCapBac = mongoose.model("DanhMucCapBac", danhmuccapbacSchema);
module.exports = DanhMucCapBac;