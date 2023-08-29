const mongoose = require('mongoose')
const staffprioritySchema = new mongoose.Schema(
    {
        objectcode: {
            type: String,
            
          },
        thetype: {
            type: String,
            
          },
        prioritycode: {
            type: String,
            
          },
        forman: {
            type: Number,
            
          },
        func: {
            type: Number,
            
          },
        thecode: {
            type: String,
            
          },
        extensioncode: {
            type: String,
            
          },
        tablename: {
            type: String,
            
          },
        inherit: {
            type: Number,
            
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
        whois: {
            type: String,
            
          },
        unitcode: {
            type: String,
            
          },
        syscomponentcode: {
            type: String,
            
          },
    },
    {
        timestamps: true
    }
);
const StaffPriority = mongoose.model("StaffPriority", staffprioritySchema);
module.exports = StaffPriority;