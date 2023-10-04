const mongoose = require('mongoose')
const nganhxetchucdanhSchema = new mongoose.Schema(
    {
        NganhXetChucDanhId: { type: String },
        TenNganhXetChucDanh: { type: String },
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
const NganhXetChucDanh = mongoose.model("NganhXetChucDanh", nganhxetchucdanhSchema);
module.exports = NganhXetChucDanh;