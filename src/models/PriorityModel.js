const mongoose = require('mongoose')
const prioritySchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true
          },
        description: {
            type: String,
            
          },
        showauth: {
            type: Number,
            
          },
        name: {
            type: String,
            
          },
        lock: {
            type: Number,
            
          },
        whois: {
            type: String,
            
          },
        groupcode: {
            type: String,
            
          },
        syscomponentcode: {
            type: String,
            
          },
        unitcode: {
            type: String,
            
          },
        addn: {
            type: Boolean,
            default: true
            
          },
        edit: {
          type: Boolean,
          default: true
            
          },
        dele: {
          type: Boolean,
          default: true  
          },
    },
    {
        timestamps: true
    }
);
const Priority = mongoose.model("Priority", prioritySchema);
module.exports = Priority;