const inputCalcNumb1 = document.querySelector("#input-calc-numb1");
const inputCalcNumb2 = document.querySelector("#input-calc-numb2");
const pCalcAnswer = document.querySelector("#p-calc-answer");

const bthCalcPlus = document.querySelector("#bth-calc-plus");
const bthCalcMultiply = document.querySelector("#bth-calc-multiply");
const bthCalcMinus = document.querySelector("#bth-calc-minus");
const bthCalcDivide = document.querySelector("#bth-calc-divide");
const bthCalcAnswer = document.querySelector("#bth-calc-answer");

let selectedOperation = null;

function getNumbers() {
  const numb1 = parseFloat(inputCalcNumb1.value);
  const numb2 = parseFloat(inputCalcNumb2.value);

  if (isNaN(numb1) || isNaN(numb2)) {
    pCalcAnswer.textContent = "Error!";
    return null;
  }
  return { numb1, numb2 };
}

function calculate() {
  const numbers = getNumbers();
  if (!numbers || !selectedOperation) return;

  let answer;
  switch (selectedOperation) {
    case "add":
      answer = numbers.numb1 + numbers.numb2;
      break;
    case "multiply":
      answer = numbers.numb1 * numbers.numb2;
      break;
    case "subtract":
      answer = numbers.numb1 - numbers.numb2;
      break;
    case "divide":
      if (numbers.numb2 === 0) {
        pCalcAnswer.textContent = "Error!";
        return;
      }
      answer = numbers.numb1 / numbers.numb2;
      break;
  }
  pCalcAnswer.textContent = answer;
}

bthCalcPlus.addEventListener("click", () => (selectedOperation = "add"));
bthCalcMultiply.addEventListener(
  "click",
  () => (selectedOperation = "multiply")
);
bthCalcMinus.addEventListener("click", () => (selectedOperation = "subtract"));
bthCalcDivide.addEventListener("click", () => (selectedOperation = "divide"));
bthCalcAnswer.addEventListener("click", calculate);
