const mongoose = require('mongoose')
const quatrinhcongtacSchema = new mongoose.Schema(
  {
    QuaTrinhCongTacId: {
      type: String,

    },
    QuanNhanId: {
      type: String,
      required: true,
    },
    SoQuyetDinh: {
      type: String,

    },
    NgayQuyetDinh: {
      type: String,

    },
    ChucVu: {
      type: String,
      required: true,
    },
    DonVi: {
      type: String,
      required: true,
    },
    KetThuc: {
      type: String,

    },
    DonViSinhHoatHocThuat: {
      type: String,
      required: true,
    },
    TrangThai: {
      type: String,
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
const QuaTrinhCongTac = mongoose.model("QuaTrinhCongTac", quatrinhcongtacSchema);
module.exports = QuaTrinhCongTac;