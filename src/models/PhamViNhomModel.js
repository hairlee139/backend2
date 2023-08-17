const mongoose = require('mongoose')
const phamvinhomSchema = new mongoose.Schema(
    {
        PhamViNhomId: {type: String},
        TenPhamViNhom: { type: String },
        NhomQuyenId: { type: String },
        ChucVu : {type: String},
        DonVi : {type: String},
        GhiChu: { type:String}
    },
    {
        timestamps: true
    }
);
const PhamViNhom = mongoose.model("PhamViNhom", phamvinhomSchema);
module.exports = PhamViNhom;