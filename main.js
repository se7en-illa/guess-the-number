// LINK BUTTONS FROM HTML TO JS FILE

let submit = document.getElementById("submit");
let hint = document.getElementById("hint");
let reset = document.getElementById("reset");
let output = document.getElementById("outputtext");
let progressbar = document.getElementById("bar");
let guess1 = document.getElementById("guess1");
let guess2 = document.getElementById("guess2");
let guess3 = document.getElementById("guess3");
let guess4 = document.getElementById("guess4");
let guess5 = document.getElementById("guess5");

//------------------------------GAME CODE---------------------------------

// RANDOM NUMBER GENERATOR
const generateWinningNumber = () => Math.ceil(Math.random() * 100);

// WINNING NUMBER
const winningNumber = generateWinningNumber();

// SUBMIT BUTTON
let submitcount = 0;
const pastGuesses = [];

submit.addEventListener("click", function () {
  let input = document.getElementById("userInput").value;
  input = parseInt(input);
  let diff = Math.abs(winningNumber - input);

  if (input === winningNumber) {
    output.innerHTML = "You Win!";
    output.style.color = "green";
  } else if (pastGuesses.includes(input)) {
    output.innerHTML = "You have already guessed that number.";
  } else if (input < 1 || input > 100 || typeof input !== "number") {
    output.innerHTML = "That is an invalid guess.";
  } else {
    progressbar.value += 10;
    submitcount++;
    pastGuesses.push(input);
    guess1.innerHTML = submitcount >= 1 ? `GUESS ${pastGuesses[0]}` : "GUESS X";
    guess2.innerHTML = submitcount >= 2 ? `GUESS ${pastGuesses[1]}` : "GUESS X";
    guess3.innerHTML = submitcount >= 3 ? `GUESS ${pastGuesses[2]}` : "GUESS X";
    guess4.innerHTML = submitcount >= 4 ? `GUESS ${pastGuesses[3]}` : "GUESS X";
    guess5.innerHTML = submitcount >= 5 ? `GUESS ${pastGuesses[4]}` : "GUESS X";
    output.innerHTML =
      pastGuesses.length === 5
        ? "You Lose."
        : diff < 10
        ? "You're burning up!"
        : diff < 25
        ? "You're lukewarm."
        : diff < 50
        ? "You're a bit chilly."
        : diff < 75
        ? "You're ice cold!"
        : "That is an invalid guess";
  }
});

// HINT BUTTON
const shuffle = (arr) => arr.sort((a, b) => Math.random() - Math.random());

let hintcount = 0;
hint.addEventListener("click", () => {
  let hint = [winningNumber, generateWinningNumber(), generateWinningNumber()];

  if (hintcount === 1) {
    output.innerHTML = "You already got a hint!";
  } else {
    count++;
    output.innerHTML = shuffle(hint);
  }
});

// RESET GAME BUTTON - generate new game instance

reset.addEventListener("click", () => location.reload());
