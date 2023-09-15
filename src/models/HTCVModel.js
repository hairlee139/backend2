const mongoose = require('mongoose')
const hinhthuccongviecSchema = new mongoose.Schema(
  {
    HinhThucCV: {
      type: String,
      required: true,
    },
    HoTen: {
      type: String,
      // required: true,
    },
    QuanNhanId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QuanNhan",
    },
    KhoiLuongCV: {
      type: String,
      // required: true,
    },
    DonVi: {
      type: String,
      // required: true,
    },
    SoTietCV: {
      type: Number,
      // required: true,
    },
    SoGioQuyDoi: {
      type: Number,
      // required: true,
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
const HTCV = mongoose.model("HTCV", hinhthuccongviecSchema);
module.exports = HTCV;