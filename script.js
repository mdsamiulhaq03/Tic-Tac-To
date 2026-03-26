const cells = document.querySelectorAll(".cell");
const scoreX = document.getElementById("scoreX");
const scoreO = document.getElementById("scoreO");
const resetBtn = document.getElementById("resetBtn");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let playing = true;

let xWins = 0;
let oWins = 0;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const index = cell.getAttribute("data-index");

    if (board[index] !== "" || !playing) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
      playing = false;
      updateScore();
      return;
    }

    if (board.every((cell) => cell !== "")) {
      playing = false;
      return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

function checkWin() {
  return winPatterns.some((pattern) => {
    return pattern.every((i) => board[i] === currentPlayer);
  });
}

function updateScore() {
  if (currentPlayer === "X") {
    xWins++;
    scoreX.textContent = xWins;
  } else {
    oWins++;
    scoreO.textContent = oWins;
  }
}

resetBtn.addEventListener("click", () => {
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((c) => (c.textContent = ""));
  currentPlayer = "X";
  playing = true;
});
