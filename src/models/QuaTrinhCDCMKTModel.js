const mongoose = require('mongoose')
const quatrinhCDCMKTSchema = new mongoose.Schema(
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
    CDCMKT: {
      type: String,
    },
    CaoNhat: {
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
const QuaTrinhCDCMKT = mongoose.model("QuaTrinhCDCMKT", quatrinhCDCMKTSchema);
module.exports = QuaTrinhCDCMKT;