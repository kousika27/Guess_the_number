// Generate a random number between 0 and 9
const randint = Math.floor(Math.random() * 1000);
let score = 12; // Total chances
const clue = document.getElementById("hint");
     
    

function check() {
    const guess = Number(document.getElementById("n").value); // Get the user input

    if (guess === randint) {
        clue.textContent = `🎉 Correct! You guessed it right. Score = ${score}`;
        clue.style.backgroundColor = "#b6f7b6"; // Change background for correct guess
        alert("🎉Congrats! you win.")
   
    } else if (guess > randint) {
        score--;
        clue.textContent = `📉 Too high! Chances left: ${score}`;
    } else if (guess < randint) {
        score--;
        clue.textContent = `📈 Too low! Chances left: ${score}`;
    }

    // Check if the user has run out of chances
    if (score === 0) {
        clue.textContent = `💔 Game Over! The correct number is: ${randint}.`;
        clue.style.backgroundColor = "#f7b6b6"; // Change background for game over
        document.getElementById("btn").disabled = true; // Disable button after game over
        alert("💔Game over!Better luck next time.")
    }
}
