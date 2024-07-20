/*Блок */
const searchArrowbutton = document.getElementById('buttonArrow')

searchArrowbutton.addEventListener('click', function () {
    const searchDiv = document.getElementById('divArrow')
    if (searchDiv) {
        searchDiv.remove()
    } else {
        const createDiv = document.createElement('div')
        createDiv.id = 'divArrow'
        createDiv.classList.add('container-div')
        createDiv.innerHTML = `
<p>Числовий</p>
<p>Ігровий</p>
<p>Ознайомчий</p>

`
        createDiv.classList.add('style-arrow')
        searchArrowbutton.appendChild(createDiv)
    }

})
/*Іконка */
const searchIconswitch = document.getElementById('imgSun')
const searchButtonswitch = document.getElementById('button-switch')
console.log(searchIconswitch)
searchIconswitch.addEventListener('click', function () {
    searchIconswitch.style.transform = 'translate(10px)'
    searchIconswitch.innerHTML = `
    <img src ="Ellipse 7 (1).png" alt='icon-moon' id="imgSun"/>
    `
    document.body.style.background = 'black'
    searchButtonswitch.appendChild(searchIconswitch)
})
 /*Модальне вікно */
const searchModal = document.querySelector('.modal-content');
const searchButtonSave = document.getElementById('buttonSave');
const searchBackdrop = document.querySelector('.backdrop');
const searchInputname = document.getElementById('inputName');
const searchliname = document.querySelector('li:last-child');
searchButtonSave.addEventListener('click', function() {
    const resultInputvalue = searchInputname.value;
    searchModal.innerHTML = `
        <button id="buttonClose" data-action="close">
            <img src="Vector 234 (1).png" alt="button-close" />
        </button>
        <img src="Screenshot (758)-1.png" alt="photo"/>
        <p class="text-subscribe">Дякую за підписку!</p>
        <img src="Screenshot (758)-2.png" alt="photo2"/>
    `;
    
    searchModal.classList.add('style-new');
    searchliname.textContent = `Вітаємо, ${resultInputvalue}!`;
    const buttonClose = document.getElementById('buttonClose');
    if (buttonClose) {
        buttonClose.addEventListener('click', function() {
            searchModal.style.display = "none";
            searchBackdrop.style.opacity = 0;
        });
    }
});
