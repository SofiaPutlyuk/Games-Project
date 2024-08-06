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
