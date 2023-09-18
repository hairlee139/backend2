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
      type: Number,
      required: true,
    },
    GioChuan: {
      type: Number,
      required: true,
    },
    SiSo: {
      type: Number,
      // required: true,
    },
    HTDT: {
      type: String,
      // required: true
    },
    LoaiHinhDT: {
      type: String,
      // required: true
    },

    KetThuc: {
      type: Date,

    },
    Quy: {
      type: Number,
      // required: true
    },
    Nam: {
      type: Number,
      // required: true
    },
    HocKy: {
      type: String,
      // required: true,
    },
    HTThi: {
      type: String,
      // required: true,
    },
    SoTiet: {
      type: Number,
      // required: true,
    },
    FileCM: {
      type: String,

    },
    THCSDT: {
      type: Number,
      //   required: true,
      default: 0

    },
    TrangThai: {
      type: Number,
      default: 0
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