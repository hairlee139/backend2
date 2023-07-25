const mongoose = require('mongoose')
const loaiquannhanSchema = new mongoose.Schema(
    {
        LoaiQuanNhanId: {
            type: String,
            required: true,
          },
        TenLoaiQuanNhan: {
            type: String,
            required: true,
          },
        GhiChu: {
            type: String,
          },
    },
    {
        timestamps: true
    }
);
const LoaiQuanNhan = mongoose.model("LoaiQuanNhan", loaiquannhanSchema);
module.exports = LoaiQuanNhan;