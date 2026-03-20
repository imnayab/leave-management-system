const router = require("express").Router();
const Leave = require("../models/Leave");

// Apply leave
router.post("/apply", async (req, res) => {
  const leave = await Leave.create(req.body);
  res.json(leave);
});

// Get employee leaves
router.get("/my/:userId", async (req, res) => {
  const leaves = await Leave.find({ userId: req.params.userId });
  res.json(leaves);
});

// Get all leaves (employer)
router.get("/all", async (req, res) => {
  const leaves = await Leave.find();
  res.json(leaves);
});

// Update status
router.post("/update/:id", async (req, res) => {
  const leave = await Leave.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(leave);
});

module.exports = router;