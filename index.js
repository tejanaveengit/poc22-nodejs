const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ Hello from CI/CD deployed Node.js application POC 22!");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", time: new Date() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
