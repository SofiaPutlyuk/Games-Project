
const searchInputyear = document.getElementById('h');
const searchButtonyear = document.querySelector('.button-year');
searchButtonyear.addEventListener('click', function() {
const searchValueyear = parseInt(searchInputyear.value, 10);
const existingMessage = document.getElementById('yearCheck')
    if (existingMessage) {
        existingMessage.remove();
    }
if ((searchValueyear % 4 === 0 && searchValueyear % 100 !== 0) || (searchValueyear % 400 === 0)) {
        const messageYear = document.createElement('p');
        messageYear.textContent = 'Ви народилися у високосний рік!';
        messageYear.id = "yearCheck"
        messageYear.classList.add('result-input__green')
        document.querySelector('.container-check-year').appendChild(messageYear);
    } else {
        const messageYear = document.createElement('p');
        messageYear.textContent = 'Ви народилися не у високосний рік!';
        messageYear.id = "yearCheck"
        messageYear.classList.add('result-input__red')
        document.querySelector('.container-check-year').appendChild(messageYear);
    }
});
