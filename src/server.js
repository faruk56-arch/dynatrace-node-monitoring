const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js app monitored by Dynatrace on WSL!");
});

app.get("/slow", (req, res) => {
  setTimeout(() => {
    res.send("This is a slow endpoint to test Dynatrace response time.");
  }, 2000);
});

app.get("/error", (req, res) => {
  throw new Error("Simulated error for Dynatrace demo");
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
