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
