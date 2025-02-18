const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; // Azure requires process.env.PORT

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html on root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API route to roll the dice
app.get("/roll-dice", (req, res) => {
  const diceRoll = Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
  res.json({ result: diceRoll });
});

// Handle 404 errors (optional)
app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
