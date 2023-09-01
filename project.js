const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const spin = () => {
  const symbols = [];
  for (const [symbols, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbols);
    }
  }
};

spin();

const getDeposit = () => {
  console.log(" ");
  const depositAmount = prompt("Enter a deposit amount: ");
  const numberDepositAmount = parseFloat(depositAmount);

  if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
    console.log("Invalid deposit amount, try again.");
    return getDeposit();
  } else {
    return numberDepositAmount;
  }
};

const getNumberOfLines = () => {
  console.log(" ");
  const lines = prompt("Enter a number of lines to bet on (1 - 3): ");
  const numberOfLines = parseFloat(lines);

  if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
    console.log("Invalid number of lines, try again.");
    return getNumberOfLines();
  } else {
    return numberOfLines;
  }
};

let balance = getDeposit();
const numberOfLines = getNumberOfLines();

const getBet = (balance, lines = numberOfLines) => {
  console.log(" ");
  const bet = prompt("Enter the bet per line: ");
  const betAmount = parseFloat(bet);

  if (isNaN(betAmount) || betAmount > balance / lines || betAmount >= 0) {
    console.log("INVALID BET");
    return getBet();
  } else {
    return betAmount;
  }
};

const bet = getBet(balance);
