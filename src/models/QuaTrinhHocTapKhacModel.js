const mongoose = require('mongoose')
const quatrinhhoctapkhacSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
          },
        QuanNhanId: {
            type: String,
            required: true,
          },  
        Ten: {
            type: String,
            required: true,
          },
        Loai: {
            type: String,
          },
        Truong: {
            type: String,
          }, 
        NamNhan: {
            type: String,
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
const QuaTrinhHocTapKhac = mongoose.model("QuaTrinhHocTapKhac", quatrinhhoctapkhacSchema);
module.exports = QuaTrinhHocTapKhac;