const mongoose = require('mongoose')
const hocviSchema = new mongoose.Schema(
    {
        QuanNhanId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "QuanNhan",
        },
        TenHocVi: {
            type: String,
            enum: ['Tiến sỹ khoa học', 'Tiến sỹ', 'Thạc sỹ', 'Kỹ sư', 'Cử nhân', 'Khác']
          },
        note: {
            type: String,
            
          },
        edituser: {
            type: String,
            
          },
        edittime: {
            type: Date,
            
          },
        lock: {
            type: Number,
            
          },
        lockdate: {
            type: Date,
            
          },
    },
    {
        timestamps: true
    }
);
const HocVi = mongoose.model("HocVi", hocviSchema);
module.exports = HocVi;