const mongoose = require('mongoose')
const kieudonviSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            
          },
        codeview: {
            type: String,
            
          },
        name: {
            type: String,
            
          },
        currentgrade: {
            type: String,
            
          },
        lowergrade: [{
            type: String,
          }],
        position: [{
            type: String,
          }],      
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
const KieuDonVi = mongoose.model("KieuDonVi", kieudonviSchema);
module.exports = KieuDonVi;