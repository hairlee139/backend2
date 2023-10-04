const mongoose = require('mongoose')
const thongkehocviSchema = new mongoose.Schema(
    {
        DonViId: { type: String },
        Nam: {type: Number},
        TienSyKhoaHoc: { type: Number },
        TienSy: { type: Number },
        ThacSy: { type: Number },
        KySu: { type: Number },
        CuNhan: { type: Number },
        Khac: { type: Number },
        GhiChu: { type: String },
        edituser: { type: String },
        edittime:  { type: String }

    },
    {
        timestamps: true
    }
);
const ThongKeHocVi = mongoose.model("ThongKeHocVi", thongkehocviSchema);
module.exports = ThongKeHocVi;