console.log("Hello Wordle!");

// wordBoard() represents the state of the Wordle "Gameboard"
// Each element holds a Cell()
// We expose a guessWord() method to add value to each element.

function wordBoard() {
  const word = [];
  const initialRandomWord = fetchRandomWord();

  // Create an array that will represent the state of the game board
  for (let i = 0; i < 5; ++i) {
    board[i].push(Cell());
  }

  // method of getting the current game board so that
  // UI can render it
  const getWord = () => word;

  // method to print board in the console
  const printWord = () => {};
}

function fetchRandomWord() {
  fetch(fiveLetterWords.txt).then();
  //fetch code
}

function Cell() {}
