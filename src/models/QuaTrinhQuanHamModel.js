const mongoose = require('mongoose')
const quatrinhquanhamSchema = new mongoose.Schema(
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
    QuanHam: {
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
const QuaTrinhQuanHam = mongoose.model("QuaTrinhQuanHam", quatrinhquanhamSchema);
module.exports = QuaTrinhQuanHam;