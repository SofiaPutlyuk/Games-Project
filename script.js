const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const number3Input = document.getElementById("number3");
const resultMessage = document.getElementById("resultMessage");

function updateLargestNumber() {
  const num1 = Number(number1Input.value);
  const num2 = Number(number2Input.value);
  const num3 = Number(number3Input.value);
  const largestNumber = Math.max(num1, num2, num3);
  resultMessage.textContent = `Найбільше число, яке ви ввели - ${largestNumber}`;
}

number1Input.addEventListener("input", updateLargestNumber);
number2Input.addEventListener("input", updateLargestNumber);
number3Input.addEventListener("input", updateLargestNumber);
