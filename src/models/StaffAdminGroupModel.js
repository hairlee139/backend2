const mongoose = require('mongoose')
const staffadmingroupSchema = new mongoose.Schema(
    {
        objectcode: {
            type: String,
            
          },
        thetype: {
            type: String,
            
          },
        admingroupcode: {
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
        whois: {
            type: String,
            
          },
    },
    {
        timestamps: true
    }
);
const StaffAdminGroup = mongoose.model("StaffAdminGroup", staffadmingroupSchema);
module.exports = StaffAdminGroup;