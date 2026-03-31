Tic-Tac-Toe Game 🟢❌

A simple, interactive Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Keep track of player scores and reset the board to play multiple rounds. 🎮

Features ✨
2-player game (X and O) ❌🟢
Real-time score tracking 📊
Detects wins, draws, and game over 🏆
Reset button to start a new game 🔄
Responsive and simple design 📱💻

How to Play 🕹️
Click on any empty cell to place your symbol (X or O).
Players alternate turns automatically. 🔁
The game checks for a winning pattern after each move. ✅
The score is updated automatically when a player wins. 🏅
Click Reset to clear the board and start a new round. 🔄

Gameplay Demo:
![Home Screen](screenshot/screenshot1.png)

Win Patterns 🏆

The game checks the following patterns to determine a winner:

Horizontal: [0,1,2], [3,4,5], [6,7,8]
Vertical: [0,3,6], [1,4,7], [2,5,8]
Diagonal: [0,4,8], [2,4,6]
Installation 💻

Clone the repository:

git clone <your-repo-url>

Open index.html in your web browser and start playing! 🌟

Usage 📝
Cells: Click to place your mark.
Score Display: Shows the current wins for X and O.
Reset Button: Clears the board and resets the game to player X’s turn. 🔄
Code Overview 🧩
board array tracks the current state of the game.
currentPlayer switches between "X" and "O".
checkWin() determines if the current player has won.
updateScore() increments the winner’s score.
resetBtn clears the board and resets the game state.
Technologies Used 🛠️
HTML
CSS
JavaScript (Vanilla)
Future Improvements 🚀
Add AI for single-player mode 🤖
Highlight winning pattern visually ✨
Add animations for moves and wins 🎉
Make it mobile-friendly with responsive layout 📱
