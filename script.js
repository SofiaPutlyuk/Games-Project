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

const scientists = [
    {
        name: "Albert",
        surname: "Einstein",
        born: 1879,
        dead: 1955,
        id: 1
    },
    {
        name: "Isaac",
        surname: "Newton",
        born: 1643,
        dead: 1727,
        id: 2
    },
    {
        name: "Galileo",
        surname: "Galilei",
        born: 1564,
        dead: 1642,
        id: 3
    },
    {
        name: "Marie",
        surname: "Curie",
        born: 1867,
        dead: 1934,
        id: 4
    },
    {
        name: "Johannes",
        surname: "Kepler",
        born: 1571,
        dead: 1630,
        id: 5
    },
    {
        name: "Nicolaus",
        surname: "Copernicus",
        born: 1473,
        dead: 1543,
        id: 6
    },
    {
        name: "Max",
        surname: "Planck",
        born: 1858,
        dead: 1947,
        id: 7
    },
    {
        name: "Katherine",
        surname: "Blodgett",
        born: 1898,
        dead: 1979,
        id: 8
    },
    {
        name: "Ada",
        surname: "Lovelace",
        born: 1815,
        dead: 1852,
        id: 9
    },
    {
        name: "Sarah E.",
        surname: "Goode",
        born: 1855,
        dead: 1905,
        id: 10
    },
    {
        name: "Lise",
        surname: "Meitner",
        born: 1878,
        dead: 1968,
        id: 11
    },
    {
        name: "Hanna",
        surname: "Hammarström",
        born: 1829,
        dead: 1909,
        id: 12
    }
];

const button19th = document.querySelector('.container-scientists__19th');
const buttonAlphabet = document.querySelector('.container-scientists__alphabet');
const buttonAge = document.querySelector('.container-scientists__age');
const buttonBornRecent = document.querySelector('.container-scientists__born-recent');
const buttonAgeAlbertEinstein = document.querySelector('.container-scientists__age-albert-einstein');
const buttonStartC = document.querySelector('.container-scientists__start-c');
const buttonStartA = document.querySelector('.container-scientists__start-a');
const buttonLived = document.querySelector('.container-scientists__lived');
const buttonName = document.querySelector('.container-scientists__name');

const wrappers = document.querySelectorAll('.wrapper');

function clearWrappers() {
    wrappers.forEach(wrapper => wrapper.innerHTML = '');
}

function displayResults(results) {
    clearWrappers();
    results.forEach((result, index) => {
        if (wrappers[index]) {
            const div = document.createElement('div');
            div.className = 'result-box';
            div.classList.add('text')
            div.innerHTML = `
                <h3>${result.name} ${result.surname}</h3>
                <p>Born: ${result.born}</p>
                <p>Dead: ${result.dead}</p>
                <p>Lived: ${result.dead - result.born} years</p>
            `;

            wrappers[index].appendChild(div);
        }
    });
}

button19th.addEventListener('click', () => {
    const results = scientists.filter(scientist => scientist.born >= 1801 && scientist.born <= 1900);
    displayResults(results);
});

buttonAlphabet.addEventListener('click', () => {
    const results = [...scientists].sort((a, b) => a.name.localeCompare(b.name));
    displayResults(results);
});

buttonAge.addEventListener('click', () => {
    const results = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
    displayResults(results);
});

buttonBornRecent.addEventListener('click', () => {
    const result = [...scientists].sort((a, b) => b.born - a.born)[0];
    displayResults([result]);
});

buttonAgeAlbertEinstein.addEventListener('click', () => {
    const result = scientists.find(scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein');
    displayResults([result]);
});

buttonStartC.addEventListener('click', () => {
    const results = scientists.filter(scientist => scientist.surname.startsWith('C'));
    displayResults(results);
});

buttonStartA.addEventListener('click', () => {
    const results = scientists.filter(scientist => !scientist.name.startsWith('A'));
    displayResults(results);
});

buttonLived.addEventListener('click', () => {
    const sorted = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
    const result = [
        sorted[0], 
        sorted[sorted.length - 1] 
    ];
    displayResults(result);
});

buttonName.addEventListener('click', () => {
    const results = scientists.filter(scientist => scientist.name[0] === scientist.surname[0]);
    displayResults(results);
});
