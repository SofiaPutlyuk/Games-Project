/*Калькулятор року */
const searchInputYear = document.getElementById('yearInput');
const searchicon = document.getElementById('icon');
searchicon.addEventListener('click', function () {
    const searchValueYear = parseInt(searchInputYear.value, 10);
    const existingMessage = document.getElementById('yearCheck');
    if (existingMessage) {
        existingMessage.remove();
    }
    const messageYear = document.createElement('p');
    messageYear.id = "yearCheck";
    if (isNaN(searchValueYear) || searchInputYear.value.trim() === "") {
       messageYear.textContent = "Будь ласка, вкажіть рік";
        messageYear.classList.add('result-input__red');
        document.querySelector('.box-input').appendChild(messageYear);
    } else if ((searchValueYear % 4 === 0 && searchValueYear % 100 !== 0) || (searchValueYear % 400 === 0)) {
        messageYear.textContent = 'Ви народилися у високосний рік!';
        messageYear.classList.add('result-input__green');
        document.querySelector('.box-input').appendChild(messageYear);
    } else {
       messageYear.textContent = 'Ви народилися не у високосний рік!';
        messageYear.classList.add('result-input__red');
        document.querySelector('.box-input').appendChild(messageYear);
    }
});
