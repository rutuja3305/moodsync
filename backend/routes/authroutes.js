const express = require("express");
const router = express.Router();

// Example route for login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  // for now, just mock response
  if (email === "test@test.com" && password === "1234") {
    res.json({ success: true, message: "Login successful 🎉" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Example route for register
router.post("/register", (req, res) => {
  const { email, password } = req.body;
  // Save user in DB (later you can connect MongoDB)
  res.json({ success: true, message: "User registered ✅" });
});

module.exports = router;
