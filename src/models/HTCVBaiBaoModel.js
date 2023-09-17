const mongoose = require('mongoose')
const hinhthuccongviecBaiBaoSchema = new mongoose.Schema(
    {
        HinhThucCV: {
            type: String,
            //    required: true,
        },
        HoTen: {
            type: String,
            // required: true,
        },
        QuanNhanId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "QuanNhan",
        },

        DonVi: {
            type: String,
            // required: true,
        },

        SoGioQuyDoi: {
            type: Number,
            // required: true,
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
const HTCVBaiBao = mongoose.model("HTCVBaiBao", hinhthuccongviecBaiBaoSchema);
module.exports = HTCVBaiBao;