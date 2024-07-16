 // First and second number, answer
 const inputCalcNumb1 = document.querySelector("#input-Calc-Numb1");
 const inputCalcNumb2 = document.querySelector("#input-Calc-Numb2");
 const pCalcAnswer = document.querySelector("#p-Calc-Answer");

 // Arf
 const bthCalcPlus = document.querySelector("#bth-Calc-Plus");
 const bthCalcMultiply = document.querySelector("#bth-Calc-Multiply");
 const bthCalcMinus = document.querySelector("#bth-Calc-Minus");
 const bthCalcDivide = document.querySelector("#bth-Calc-Divide");

 bthCalcPlus.addEventListener("click", () => {
     const numb1 = parseFloat(inputCalcNumb1.value);
     const numb2 = parseFloat(inputCalcNumb2.value);
     const answer = numb1 + numb2;
     pCalcAnswer.textContent = answer;
 });


 bthCalcMultiply.addEventListener("click", () => {
     const numb1 = parseFloat(inputCalcNumb1.value);
     const numb2 = parseFloat(inputCalcNumb2.value);
     const answer = numb1 * numb2;
     pCalcAnswer.textContent = answer;
 });

 bthCalcMinus.addEventListener("click", () => {
     const numb1 = parseFloat(inputCalcNumb1.value);
     const numb2 = parseFloat(inputCalcNumb2.value);
     const answer = numb1 - numb2;
     pCalcAnswer.textContent = answer;
 });

 bthCalcDivide.addEventListener("click", () => {
     const numb1 = parseFloat(inputCalcNumb1.value);
     const numb2 = parseFloat(inputCalcNumb2.value);
     const answer = numb1 / numb2;
     pCalcAnswer.textContent = answer;
 });