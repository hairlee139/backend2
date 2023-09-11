const mongoose = require('mongoose')
const hinhthuccongviecSchema = new mongoose.Schema(
    {
        HinhThucCongViecId: { type: String },
        TenHinhThucCongViec: { type: String },
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
const HinhThucCongViec = mongoose.model("HinhThucCongViec", hinhthuccongviecSchema);
module.exports = HinhThucCongViec;