const mongoose = require('mongoose')
const quanhamSchema = new mongoose.Schema(
    {
        QuanHamId: { type: String, unique: true },
        TenQuanHam: { type: String },
        NgayNhan: { type: String },
        NgayKT: { type: String, required: true },
        MaQN: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "QuanNhan",
        }
    },
    {
        timestamps: true
    }
);
const QuanHam = mongoose.model("QuanHam", quanhamSchema);
module.exports = QuanHam;