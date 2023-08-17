const mongoose = require('mongoose')
const danhmucquyenSchema = new mongoose.Schema(
    {
        DanhMucQuyenId: {type: String},
        TenDanhMucQuyen: { type: String },
        ChiTiet: { type: String },
        GhiChu: { type:String}
    },
    {
        timestamps: true
    }
);
const DanhMucQuyen = mongoose.model("DanhMucQuyen", danhmucquyenSchema);
module.exports = DanhMucQuyen;