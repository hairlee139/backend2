const mongoose = require('mongoose')
const hinhthuccongviecHoatDongKhacSchema = new mongoose.Schema(
    {
        HinhThucCV: {
            type: String,
            // required: true,
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
const HTCVHoatDongKhac = mongoose.model("HTCVHoatDongKhac", hinhthuccongviecHoatDongKhacSchema);
module.exports = HTCVHoatDongKhac;