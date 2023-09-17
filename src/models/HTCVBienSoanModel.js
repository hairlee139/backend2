const mongoose = require('mongoose')
const hinhthuccongviecBienSoanSchema = new mongoose.Schema(
    {
        HinhThucCV: {
            type: String,

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
        Trang: {
            type: Number,
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
const HTCVBienSoan = mongoose.model("HTCVBienSoan", hinhthuccongviecBienSoanSchema);
module.exports = HTCVBienSoan;