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
});
