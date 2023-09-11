const mongoose = require('mongoose')
const hinhthucgiangdaySchema = new mongoose.Schema(
    {
        HinhThucGiangDayId: { type: String },
        TenHinhThucGiangDay: { type: String },
        GhiChu: { String },
        edituser: {
            type: String,

        },
        edittime: {
            type: Date,

        },
        lock: {
            type: Number,

        },
        lockdate: {
            type: Date,

        },
    },
    {
        timestamps: true
    }
);
const HinhThucGiangDay = mongoose.model("HinhThucGiangDay", hinhthucgiangdaySchema);
module.exports = HinhThucGiangDay;