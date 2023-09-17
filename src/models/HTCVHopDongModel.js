const mongoose = require('mongoose')
const hinhthuccongviecHopDongSchema = new mongoose.Schema(
    {
        HinhThucCV: {
            type: String,
            //required: true,
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
        VaiTro: {
            type: String,
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
const HTCVHopDong = mongoose.model("HTCVHopDong", hinhthuccongviecHopDongSchema);
module.exports = HTCVHopDong;