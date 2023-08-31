const mongoose = require('mongoose')
const chucvudonviSchema = new mongoose.Schema(
    {
        chucvucode: {
            type: String,
            ref: "ChucVu",
          },
        donvicode: {
            type: String,
            ref: "DonVi",
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
const ChucVuDonVi = mongoose.model("ChucVuDonVi", chucvudonviSchema);
module.exports = ChucVuDonVi;