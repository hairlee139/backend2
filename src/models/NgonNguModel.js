const mongoose = require('mongoose')
const ngonnguSchema = new mongoose.Schema(
    {
        NgonNguId: { type: String },
        TenNgonNgu: { type: String },
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
const NgonNgu = mongoose.model("NgonNgu", ngonnguSchema);
module.exports = NgonNgu;