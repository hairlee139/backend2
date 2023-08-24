const mongoose = require('mongoose')
const prioritySchema = new mongoose.Schema(
    {
        code: {
            type: String,
            
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
            type: Number,
            
          },
        edit: {
            type: Number,
            
          },
        dele: {
            type: Number,
            
          },
    },
    {
        timestamps: true
    }
);
const Priority = mongoose.model("Priority", prioritySchema);
module.exports = Priority;