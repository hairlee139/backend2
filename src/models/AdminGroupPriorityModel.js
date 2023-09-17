const mongoose = require('mongoose')
const admingroupprioritySchema = new mongoose.Schema(
    {
        objectcode: { type: mongoose.Schema.Types.ObjectId,
            ref: "AdminGroup",
        require: true },
        thetype: { type: String },
        prioritycode: { type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "Priority", },
        forman: { type: Number },
        func: { type: Number },
        inherit: { type: Number },
        edituser: { type: String },
        edittime: { type: Date },
        lock: { type: Number, default: 0 },
        whois: { type: String },
        unitcode: { type: String },
        thecode: { type: String },
        extensioncode: { type: String },
        tablename: { type: String },
        syscomponentcode: { type: String },
        addn: { type: Number },
        edit: { type: Number },
        dele: { type: Number }
    },
    {
        timestamps: true
    }
);
const AdminGroupPriority = mongoose.model("AdminGroupPriority", admingroupprioritySchema);
module.exports = AdminGroupPriority;