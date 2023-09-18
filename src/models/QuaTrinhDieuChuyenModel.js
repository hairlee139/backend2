const mongoose = require('mongoose')
const dieuchuyencanboSchema = new mongoose.Schema(
    {
        DieuChuyenCanBoId: {
            type: String,

        },
        QuanNhanId: {
            type: String,
            required: true,
        },
        SoQuyetDinh: {
            type: String,

        },
        NgayQuyetDinh: {
            type: Date,

        },

        DonViQuyetDinh: {
            type: String,
            required: true,
        },
        ChucVuHienTai: {
            type: String,
            required: true,
        },
        DonViHienTai: {
            type: String,
            required: true,
        },
        DonViDen: {
            type: String,
            required: true,
        },
        ChucVuDen: {
            type: String,
            required: true,
        },
        NgayDenNhanChuc: {
            type: Date,

        },

        TrangThai: {
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
const DieuChuyenCanBo = mongoose.model("DieuChuyenCanBo", dieuchuyencanboSchema);
module.exports = DieuChuyenCanBo;