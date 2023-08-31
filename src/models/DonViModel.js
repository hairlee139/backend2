const mongoose = require('mongoose')
const donviSchema = new mongoose.Schema(
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
        managelevelcode: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "KieuDonVi"
            
          },
        unitcode: {
            type: String,
            
          },
        parentcode: {
            type: String,
            
          },
        comparelevel: {
            type: String,
            
          },
        theorder: {
            type: Number,
            
          },
        phone: {
            type: String,
            
          },
        email: {
            type: String,
            
          },
        managestaff: {
            type: Number,
            
          },
        whois: {
            type: Number,
            
          },
          thucluc: {
            type: Number,
            
          },
          bienche: {
            type: Number,
            
          },



    },
    {
        timestamps: true
    }
);
const DonVi = mongoose.model("DonVi", donviSchema);
module.exports = DonVi;