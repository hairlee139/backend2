const mongoose = require('mongoose')
const nhomquyenSchema = new mongoose.Schema(
    {
        NhomQuyenId: {type: String},
        TenNhomQuyen: { type: String },
        HienThi: { type: Boolean, default : true },
        Quyen : {type: [String]},
        GhiChu: { type:String}
    },
    {
        timestamps: true
    }
);
const NhomQuyen = mongoose.model("NhomQuyen", nhomquyenSchema);
module.exports = NhomQuyen;