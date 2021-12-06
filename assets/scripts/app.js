let currentResult = 0;
let currentEquation = "corrent result";

function getUesrNumberInput() {
  return Number(userInput.value);
}

function writeOutput(operator, lestResult, userInput) {
  currentEquation = `${lestResult} ${operator} ${userInput}`;
  outputResult(currentResult, currentEquation);
}

function add() {
  const newValue = getUesrNumberInput();
  const lestResult = currentResult;
  currentResult = currentResult + newValue;
  writeOutput("+", lestResult, newValue);
}

function sub() {
  const newValue = getUesrNumberInput();
  const lestResult = currentResult;
  currentResult = currentResult - newValue;
  writeOutput("-", lestResult, newValue);
}

function mult() {
  const newValue = getUesrNumberInput();
  const lestResult = currentResult;
  currentResult = currentResult * newValue;
  writeOutput("*", lestResult, newValue);
}

function div() {
  const newValue = getUesrNumberInput();
  const lestResult = currentResult;
  currentResult = currentResult / newValue;
  writeOutput("/", lestResult, newValue);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", mult);
divideBtn.addEventListener("click", div);
