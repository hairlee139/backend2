const mongoose = require('mongoose')
const ngoainguSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
          },
        QuanNhanId: {
            type: String,
            required: true,
          },  
        NgonNgu: {
            type: String,
            required: true,
          },
        LoaiBang: {
            type: String,
          },
        NamNhan: {
            type: String,
          },  
        CapDo: {
            type: String,
          }, 
        TuongDuong: {
            type: String,
          }, 
        HinhThucBang: {
            type: String,
          }, 
        TrangThai: {
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
const NgoaiNgu = mongoose.model("NgoaiNgu", ngoainguSchema);
module.exports = NgoaiNgu;