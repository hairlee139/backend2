const mongoose = require('mongoose')
const saudaihocSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
          },
        QuanNhanId: {
            type: String,
            required: true,
          },  
        LoaiBang: {
            type: String,
            required: true,
          },
        LinhVuc: {
            type: String,
          },
        TenLuanVan: {
            type: String,
          },  
        Truong: {
            type: String,
          }, 
        QuocGia: {
            type: String,
          }, 
        NamNhan: {
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
const SauDaiHoc = mongoose.model("SauDaiHoc", saudaihocSchema);
module.exports = SauDaiHoc;