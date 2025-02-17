document.getElementById("roll-button").addEventListener("click", async () => {
  try {
    const response = await fetch("/roll-dice"); // Call the server API
    const data = await response.json();

    const diceFaces = ["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    document.getElementById("dice-display").innerHTML = diceFaces[data.result]; // Update UI with dice emoji
  } catch (error) {
    console.error("Error rolling the dice:", error);
  }
});
