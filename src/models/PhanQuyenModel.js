const mongoose = require('mongoose');

const sysComponentSchema = new mongoose.Schema({
  code: String,
  codeview: String,
  name: String,
  lock: Number,
  unitcode: String,
  edituser: String,
  edittime: Date,
  lockdate: Date,
  theorder: Number,
  note: String
});

const groupNameSchema = new mongoose.Schema({
  code: String,
  description: String,
  showauth: Number,
  name: String,
  lock: Number,
  whois: String,
  unitcode: String
});

const prioritySchema = new mongoose.Schema({
  code: String,
  description: String,
  showauth: Number,
  name: String,
  lock: Number,
  whois: String,
  groupcode: String,
  syscomponentcode: String,
  unitcode: String,
  addn: Number,
  edit: Number,
  dele: Number
});

const adminGroupSchema = new mongoose.Schema({
  code: String,
  codeview: String,
  name: String,
  note: String,
  edituser: String,
  edittime: Date,
  lock: Number,
  lockdate: Date,
  whois: String,
  unitcode: String,
  departmentlist: String,
  leveltitlelist: String,
  allunit: Number,
  admin: Number,
  staff: Number
});

const staffAdminGroupSchema = new mongoose.Schema({
  objectcode: String,
  thetype: String,
  admingroupcode: String,
  edituser: String,
  edittime: Date,
  lock: Number,
  whois: String
});

const staffPrioritySchema = new mongoose.Schema({
  objectcode: String,
  thetype: String,
  prioritycode: String,
  forman: Number,
  func: Number,
  thecode: String,
  extensioncode: String,
  tablename: String,
  inherit: Number,
  edituser: String,
  edittime: Date,
  lock: Number,
  whois: String,
  unitcode: String,
  syscomponentcode: String
});

const staffAuthorizeSchema = new mongoose.Schema({
  stafffrom: String,
  prioritycode: String,
  staffto: String,
  func: Number,
  thecode: String,
  tablename: String,
  inherit: Number,
  begintime: Date,
  endtime: Date,
  lock: Number,
  edittime: Date,
  whois: String,
  unitcode: String
});

const SysComponent = mongoose.model('SysComponent', sysComponentSchema);
const GroupName = mongoose.model('GroupName', groupNameSchema);
const Priority = mongoose.model('Priority', prioritySchema);
const AdminGroup = mongoose.model('AdminGroup', adminGroupSchema);
const StaffAdminGroup = mongoose.model('StaffAdminGroup', staffAdminGroupSchema);
const StaffPriority = mongoose.model('StaffPriority', staffPrioritySchema);
const StaffAuthorize = mongoose.model('StaffAuthorize', staffAuthorizeSchema);
module.exports = SysComponent;
module.exports = GroupName;
module.exports = Priority;
module.exports = AdminGroup;
module.exports = StaffAdminGroup;
module.exports = StaffPriority;
module.exports = StaffAuthorize;
