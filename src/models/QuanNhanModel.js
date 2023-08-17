const mongoose = require('mongoose')
const quannhanSchema = new mongoose.Schema(
    {
        QuanNhanId: { type: String, unique: true },
        HoTen: { type: String },
        NgaySinh: { type: String },
        GioiTinh: { type: String, required: true },
        QueQuan: { type: String, required: true },
        DiaChi: { type: String },
        SoDienThoai: { type: String },
        Email: { type: String },
        HoatDong: {type: String},
        QuanHam: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "QuanHam",
        },
        // DonVi: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "User",
        // },
        DonVi:{type: String},
        LoaiQN: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "LoaiQuanNhan",
        }
    },
    {
        timestamps: true
    }
);
const QuanNhan = mongoose.model("QuanNhan", quannhanSchema);
module.exports = QuanNhan;