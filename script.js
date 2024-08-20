// our team
const carouselInner = document.querySelector('.our-team__carousel_inner');
const cards = document.querySelectorAll('.our-team__carousel_card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselIndicator = document.getElementById('carouselIndicator');

let currentIndex = 0;
const totalSlides = cards.length;

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('indicator-dot');
  if (i === currentIndex) {
    dot.classList.add('active');
  }
  carouselIndicator.appendChild(dot);
}

function updateIndicator() {
  const dots = document.querySelectorAll('.indicator-dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function showCard(index) {
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
  updateIndicator();
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
  showCard(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
  showCard(currentIndex);
});

showCard(currentIndex);

//Вгадайте число
const randomNumber = Math.floor(Math.random() * 10) + 1;
const userGuessInput = document.getElementById("userGuess");
const checkButton = document.getElementById("checkButton");
const resultMessage = document.getElementById("resultMessage");
checkButton.addEventListener("click", () => {
  const userGuess = Number(userGuessInput.value);
  if (userGuess === randomNumber) {
    resultMessage.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
    resultMessage.style.color = "#039900";
  } else {
    resultMessage.textContent = "Спробуйте ще раз!";
    resultMessage.style.color = "red";
  }
});
//Введіть 3 числа
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const number3Input = document.getElementById("number3");
const resultMessageNumber = document.getElementById("resultMessageNumber");

function updateLargestNumber() {
  const num1 = Number(number1Input.value);
  const num2 = Number(number2Input.value);
  const num3 = Number(number3Input.value);
  const largestNumber = Math.max(num1, num2, num3);
  resultMessageNumber.textContent = `Найбільше число, яке ви ввели -  ${largestNumber}`;
}

number1Input.addEventListener("input", updateLargestNumber);
number2Input.addEventListener("input", updateLargestNumber);
number3Input.addEventListener("input", updateLargestNumber);
// calculator

const inputCalcNumb1 = document.querySelector("#input-calc-numb1");
const inputCalcNumb2 = document.querySelector("#input-calc-numb2");
const pCalcAnswer = document.querySelector("#p-calc-answer");

const bthCalcPlus = document.querySelector("#bth-calc-plus");
const bthCalcMultiply = document.querySelector("#bth-calc-multiply");
const bthCalcMinus = document.querySelector("#bth-calc-minus");
const bthCalcDivide = document.querySelector("#bth-calc-divide");
const bthCalcAnswer = document.querySelector("#bth-calc-answer");

let selectedOperation = null;
let selectedButton = null;

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

function selectOperation(operation, button) {
  selectedOperation = operation;
  if (selectedButton) {
    selectedButton.classList.remove("selected");
  }
  selectedButton = button;
  selectedButton.classList.add("selected");
}

bthCalcPlus.addEventListener("click", () =>
  selectOperation("add", bthCalcPlus)
);
bthCalcMultiply.addEventListener("click", () =>
  selectOperation("multiply", bthCalcMultiply)
);
bthCalcMinus.addEventListener("click", () =>
  selectOperation("subtract", bthCalcMinus)
);
bthCalcDivide.addEventListener("click", () =>
  selectOperation("divide", bthCalcDivide)
);
bthCalcAnswer.addEventListener("click", calculate);

// data-calculator

const dataInput = document.querySelector("#data-calc-input");
const dataBth = document.querySelector("#data-calc-button");
const dataAnswer = document.querySelector("#data-calc-answer");

dataBth.addEventListener("click", () => {
  const value = Number(dataInput.value);

  const days = Math.floor(value / (24 * 3600));
  const hours = Math.floor((value % (24 * 3600)) / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const seconds = value % 60;

  const answer = `${days} дн. ${hours}:${minutes}:${seconds}`;
  dataAnswer.textContent = answer;
});

// sctVSscVspa

document.addEventListener("DOMContentLoaded", function() {
    const stoneBth = document.getElementById("stone");
    const paperBth = document.getElementById("paper");
    const scissorsBth = document.getElementById("scissors");

    const scoreComptxt = document.getElementById("compScore");
    const scoreUserTxt = document.getElementById("userScore");

    const whoWon = document.getElementById("whoWonThere");
    let compScore = 0;
    let userScore = 0;

    const playBth = document.getElementById("play");

    function getComputerChoice() {
        const choices = ["камінь", "папір", "ножниці"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function playRound(userChoice) {
        const computerChoice = getComputerChoice();
        if (userChoice === computerChoice) {
            return "draw";
        } else if (
            (userChoice === "камінь" && computerChoice === "ножниці") ||
            (userChoice === "ножниці" && computerChoice === "папір") ||
            (userChoice === "папір" && computerChoice === "камінь")
        ) {
            return "user";
        } else {
            return "computer";
        }
    }

    function updateScore(winner) {
        if (winner === "user") {
            userScore++;
            scoreUserTxt.textContent = `Ви - ${userScore}`;
            whoWon.textContent = "Ви виграли раунд!";
            whoWon.style.color = "green";
        } else if (winner === "computer") {
            compScore++;
            scoreComptxt.textContent = `Комп’ютер - ${compScore}`;
            whoWon.textContent = "Комп’ютер виграв раунд!";
            whoWon.style.color = "red";
        } else {
            whoWon.textContent = "Нічия!";
            whoWon.style.color = "black";
        }
    }

    stoneBth.addEventListener("click", () => {
        const winner = playRound("камінь");
        updateScore(winner);
    });

    paperBth.addEventListener("click", () => {
        const winner = playRound("папір");
        updateScore(winner);
    });

    scissorsBth.addEventListener("click", () => {
        const winner = playRound("ножниці");
        updateScore(winner);
    });

    playBth.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        whoWon.textContent = `Комп’ютер обрав: ${computerChoice}`;
        whoWon.style.color = "black";
    });
});

// football
const ball = document.querySelector('.football__field-ball');
const field = document.querySelector('.football__field');

field.addEventListener('click', function(event) {
    const fieldRect = field.getBoundingClientRect();
    const x = event.clientX - fieldRect.left;
    const y = event.clientY - fieldRect.top;

    ball.style.transform = `translateX(${x - ball.offsetWidth / 2}px) translateY(${y - ball.offsetHeight / 2}px)`;
});

