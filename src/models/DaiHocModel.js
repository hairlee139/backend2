const mongoose = require('mongoose')
const daihocSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    QuanNhanId: {
      type: String,
      required: true,
    },
    He: {
      type: String,
      required: true,
    },
    Nganh: {
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
const DaiHoc = mongoose.model("DaiHoc", daihocSchema);
module.exports = DaiHoc;