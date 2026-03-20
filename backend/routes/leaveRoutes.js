const router = require("express").Router();
const Leave = require("../models/Leave");

// 🔹 Apply Leave
router.post("/apply", async (req, res) => {
  try {
    const leave = await Leave.create({
      ...req.body,
      status: "pending" // default status
    });
    res.json(leave);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error applying leave" });
  }
});

// 🔹 Get Leaves of Logged-in User
router.get("/my/:userId", async (req, res) => {
  try {
    const leaves = await Leave.find({ userId: req.params.userId });
    res.json(leaves);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching user leaves" });
  }
});

// 🔹 Get All Leaves (Admin/Employer)
router.get("/all", async (req, res) => {
  try {
    const leaves = await Leave.find().sort({ createdAt: -1 });
    res.json(leaves);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching all leaves" });
  }
});

// 🔹 Update Leave Status (Approve / Reject)
router.post("/update/:id", async (req, res) => {
  try {
    const updated = await Leave.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error updating leave status" });
  }
});

module.exports = router;