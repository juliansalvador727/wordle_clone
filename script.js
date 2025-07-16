function makeGuess() {
  const array = [];

  let listenerActive = false;

  const isAlphabet = (key) => {
    return (
      key.length === 1 && key.toLowerCase() >= "a" && key.toLowerCase() <= "z"
    );
  };

  const clearArray = () => {
    array.length = 0;
  };

  const addToGuess = (letter) => {
    if (array.length >= 5) return;
    array.push(letter.toUpperCase());
    printArray();
  };

  const removeFromGuess = () => {
    if (array.length > 0) {
      array.pop();
      printArray();
    }
  };

  const submitGuess = () => {
    if (array.length === 5) {
      const guess = array.join("");
      console.log(`Submitted ${guess} as the guess!`);
      clearArray();
    }
  };

  const keyboardListener = () => {
    if (listenerActive) return;

    document.addEventListener("keydown", (e) => {
      let letter = e.key;
      if (e.repeat) {
        return;
      }
      if (letter === "Backspace" || letter === "Delete") {
        removeFromGuess();
      } else if (letter === "Enter") {
        submitGuess();
      } else if (isAlphabet(letter)) {
        addToGuess(letter);
      }
    });
    listenerActive = true;
  };

  const getArray = () => {
    return array;
  };

  const printArray = () => {
    console.log(array);
  };

  return { keyboardListener, getArray, submitGuess };
}

function guessBoard() {
  let guesses = 6;
  const board = [];
  for (let i = 0; i < guesses; ++i) {
    board[i] = [];
  }

  const addToGuessBoard = (array) => {
    board.push(array);
  };

  const displayGuess = () => {
    const container = document.getElementById("container");
    container.innerHTML = board;
    console.log(board);
  };

  return { addToGuessBoard, displayGuess };
}

function gameController() {
  const board = guessBoard();
  const game = makeGuess();
}
let game = makeGuess();

game.keyboardListener();
