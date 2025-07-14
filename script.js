function Cell() {
  let value = "";

  const setLetter = (letter) => {
    value = letter;
  };
  const clearLetter = () => {
    value = "";
  };

  return { setLetter, clearLetter };
}

function Gameboard() {
  const wordLength = 5;
  const guesses = 6;
  const board = [];

  for (let i = 0; i < wordLength; ++i) {
    board[i] = [];
    for (let j = 0; j < guesses; ++j) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => board;
}

function GameController() {}
