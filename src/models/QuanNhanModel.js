const mongoose = require('mongoose')
const quannhanSchema = new mongoose.Schema(
    {
        QuanNhanId: { type: String, unique: true },
        HoTen: { type: String },
        NgaySinh: { type: Date },
        GioiTinh: { type: String, required: true },
        QueQuan: { type: String, required: true },
        DiaChi: { type: String },
        SoDienThoai: { type: String },
        Email: { type: String },
        HoatDong: [{type: String}],
        QuanHam: {
            type: String
        },
        // DonVi: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "User",
        // },
        DonVi:[{type: String}],
        LoaiQN: {
            type: String
        }
    },
    {
        timestamps: true
    }
);
const QuanNhan = mongoose.model("QuanNhan", quannhanSchema);
module.exports = QuanNhan;