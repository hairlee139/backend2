const mongoose = require('mongoose')
const quatrinhHocViSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        QuyetDinh: {
            type: String,
            required: true,
        },
        NgayQuyetDinh: {
            type: Date,
        },
        HocVi: {
            type: String,
        },
        CaoNhat: {
            type: Number,
            required: true,
            default: 0
        },
        edituser: {
            type: String,
        },
        edittime: {
            type: String,
        },
        GhiChu: {
            type: String,
        },
    },
    {
        timestamps: true
    }
);
const QuaTrinhHocVi = mongoose.model("QuaTrinhHocVi", quatrinhHocViSchema);
module.exports = QuaTrinhHocVi;