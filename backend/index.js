const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Sentiment = require("sentiment");

const app = express();
const sentiment = new Sentiment();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ======================
// Test route
// ======================
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ======================
// Mood Analysis Route
// ======================
app.post("/mood", (req, res) => {
  const { text } = req.body;
  const result = sentiment.analyze(text);
  res.json({
    score: result.score,
    mood: result.score >= 0 ? "Positive" : "Negative",
  });
});

// ======================
// Auth Routes
// ======================
app.use("/api/auth", require(". /routes/authRoutes"));

// ======================
// Start Server
// ======================
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

