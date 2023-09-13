const mongoose = require('mongoose')
const quatrinhsinhhoatdangSchema = new mongoose.Schema(
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
    ChucVu: {
      type: String,
    },
    DonVi: {
      type: String,
    },
    KetThuc: {
      type: String,
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
const QuaTrinhSinhHoatDang = mongoose.model("QuaTrinhSinhHoatDang", quatrinhsinhhoatdangSchema);
module.exports = QuaTrinhSinhHoatDang;