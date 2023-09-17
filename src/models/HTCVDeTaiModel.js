const mongoose = require('mongoose')
const hinhthuccongviecDeTaiSchema = new mongoose.Schema(
    {
        HinhThucCV: {
            type: String,
            //  required: true,
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
        VaiTro: {
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
const HTCVDeTai = mongoose.model("HTCVDeTai", hinhthuccongviecDeTaiSchema);
module.exports = HTCVDeTai;