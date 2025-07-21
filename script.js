function makeGuess() {
  const array = [];
  let listenerActive = false;
  let submitHandler = false;

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
      if (submitHandler) submitHandler(guess);
      clearArray();
    }
  };

  const setSubmitHandler = (fn) => {
    submitHandler = fn;
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

  return { keyboardListener, setSubmitHandler };
}

function guessBoard() {
  const board = Array.from({ length: 6 }, () => Array(5).fill(""));
  const displayGuess = () => {
    const container = document.getElementById("container");
    container.innerHTML = "";

    board.forEach((row) => {
      const rowEl = document.createElement("div");
      rowEl.classList.add("row");
      row.forEach((char) => {
        const cell = document.createElement("div");
        cell.textContent = char;
        cell.classList.add("cell");
        rowEl.appendChild(cell);
      });
      container.appendChild(rowEl);
    });
  };

  displayGuess();

  return { board, displayGuess };
}

function gameController() {
  const board = guessBoard();
  const game = makeGuess();

  let currentRow = 0;

  game.setSubmitHandler((guess) => {
    board.board[currentRow] = guess.split("");
    board.displayGuess();
    currentRow++;
    if (currentRow >= 6) alert("Game Over!");
  });

  game.keyboardListener();
}
gameController();
