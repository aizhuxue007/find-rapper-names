const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const app = express();

const rappers = {
  "21 savage": {
    birthName: "Shéyaa Bin Abraham-Joseph",
    birthPlace: "Plaistow, London, England",
    age: 32,
  },
  "chance the rapper": {
    birthName: "Chancelor Bennett",
    birthPlace: "Chicago, Illinois",
    age: 32,
  },
  dylan: {
    birthName: "dylan",
    birthPlace: "dylan",
    age: 29,
  },
};

app.use(cors());

// Log requests for debugging
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/rappers", (req, res) => {
  res.json(rappers);
});

app.get("/api/:rapperName", (req, res) => {
  res.json(rappers[req.params.rapperName] || rappers["dylan"]);
});

module.exports = serverless(app);
