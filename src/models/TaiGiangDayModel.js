const mongoose = require('mongoose')
const taigiangdaySchema = new mongoose.Schema(
    {
        code: {
            type: String
          },
        QuanNhanId: {
            type: String,
            required: true,
          },  
        MaLop: {
            type: String,
            required: true,
          },
        MaMonHoc: {
            type: String,
            required: true,
          },
        TenMonHoc: {
            type: String,
            required: true,
          },
        SoTinChi: {
            type: String,
            required: true,
          },
        GioChuan: {
            type: String,
            required: true,
          },
        SiSo: {
            type: String,
            required: true,
          },
        HTDT: {
            type: String,
            required: true,
          },
        LoaiHinhDT: {
            type: String,
            required: true,
          },
        Quy: {
            type: String,
            required: true,
          },  
        Nam: {
            type: String,
            required: true,
          },
        HocKy: {
            type: String,
            required: true,
          },
        HTThi: {
            type: String,
            required: true,
          },
        SoTiet: {
            type: String,
            required: true,
          },
        FileCM: {
            type: String,
            required: true,
          },
        THCSDT: {
            type: String,
            required: true,
          },
        TrangThai: {
            type: String,
            required: true,
          },
        CacHTCV: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "HTCV",
          }],
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
const TaiGiangDay = mongoose.model("TaiGiangDay", taigiangdaySchema);
module.exports = TaiGiangDay;