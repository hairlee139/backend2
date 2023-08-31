const mongoose = require('mongoose')
const chucvuSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
          },
        name: {
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
const ChucVu = mongoose.model("ChucVu", chucvuSchema);
module.exports = ChucVu;