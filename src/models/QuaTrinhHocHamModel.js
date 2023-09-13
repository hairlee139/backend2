const mongoose = require('mongoose')
const quatrinhHocHamSchema = new mongoose.Schema(
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
        HocHam: {
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
const QuaTrinhHocHam = mongoose.model("QuaTrinhHocHam", quatrinhHocHamSchema);
module.exports = QuaTrinhHocHam;