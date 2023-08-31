const mongoose = require('mongoose')
const tinhtrangcongtacSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
          },
        QuanNhanId: {
            type: String,
            required: true,
          },  
        QuyetDinh: {
            type: String,
            required: true,
          },
        NgayQuyetDinh: {
            type: Date,
          },
        TrangThaiCongTac: {
            type: String,
          },  
        KetThuc: {
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
const TinhTrangCongTac = mongoose.model("TinhTrangCongTac", tinhtrangcongtacSchema);
module.exports = TinhTrangCongTac;