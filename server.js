const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static("public"));

// API route to roll the dice
app.get("/roll-dice", (req, res) => {
  const diceRoll = Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
  res.json({ result: diceRoll });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running`);
});
