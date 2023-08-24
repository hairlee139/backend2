const mongoose = require('mongoose')
const admingroupSchema = new mongoose.Schema(
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
        whois: {
            type: String,
            
          },
        unitcode: {
            type: String,
            
          },
        departmentlist: {
            type: String,
            
          },
        leveltitlelist: {
            type: String,
            
          },
        allunit: {
            type: Number,
            
          },
        admin: {
            type: Number,
            
          },
        staff: {
            type: Number,
            
          },
    },
    {
        timestamps: true
    }
);
const AdminGroup = mongoose.model("AdminGroup", admingroupSchema);
module.exports = AdminGroup;