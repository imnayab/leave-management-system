const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  userId: String,
  type: String,
  startDate: String,
  endDate: String,
  reason: String,
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Leave", leaveSchema);