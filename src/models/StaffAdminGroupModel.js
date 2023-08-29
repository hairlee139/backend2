const mongoose = require('mongoose')
const staffadmingroupSchema = new mongoose.Schema(
    {
        objectcode: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
            
          },
        thetype: {
            type: String,
            
          },
        admingroupcode: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "AdminGroup",
            
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