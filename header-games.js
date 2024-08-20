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
<div class="text-div">Числовий</div>
<div class="text-div">Ігровий</div>
<div class="text-div">Ознайомчий</div>

`
        createDiv.classList.add('style-arrow')
        searchArrowbutton.appendChild(createDiv)
    }

})
/*Іконка */
const searchIconswitch = document.getElementById('imgSun')
const searchButtonswitch = document.getElementById('button-switch')
const searchMainContainer = document.querySelector('.main-content')
const searchFooter = document.querySelector('footer')
const searchIcon = document.querySelectorAll('#icon-color')
console.log(searchIcon)

/*Текст */
const searchElements = document.querySelectorAll('p, li, h1, h2,a')  
console.log(searchElements)
/*Зміна */
const imgSun = "src/button-sun.png"
const imgMoon = "src/button-moon.png"
const currentTransform = 'translate(-10px)'
const changeTransform = 'translate(10px)'
const light = 'white'
const dark = 'black'
let toggle = false;
function changeColors(color , background) {
    searchElements.forEach(element => {
        element.style.color = color;
    });
    searchIcon.forEach(elem => {
        elem.style.background = background;
    })
}
searchIconswitch.addEventListener('click', function () {
    if (toggle) {
        searchIconswitch.src = imgSun
        document.body.style.background = light
        searchIconswitch.style.transform = currentTransform
        searchIconswitch.style.background = light
        searchMainContainer.style.background = light
        searchFooter.style.background = light
        changeColors(dark,light)

    } else {
        searchIconswitch.src = imgMoon
        document.body.style.background = dark;
        searchIconswitch.style.transform = changeTransform
        searchIconswitch.style.background = dark
        searchMainContainer.style.background = dark
        searchFooter.style.background = dark
     changeColors(light,light)
    }
    toggle = !toggle
})

/*Модальне вікно */
const searchModal = document.querySelector('.modal-content');
const searchButtonSave = document.getElementById('buttonSave');
const searchBackdrop = document.querySelector('.backdrop');
const searchInputname = document.getElementById('inputName');
const searchliname = document.querySelector('li:last-child');
const buttonClose = document.getElementById('buttonClose');
function closeButton() {
    const buttonClose = document.getElementById('buttonClose');
    if (buttonClose) {
        buttonClose.addEventListener('click', function () {
            searchModal.style.display = "none"
            searchBackdrop.style.display = "none"

        })
    }
}
searchButtonSave.addEventListener('click', function () {
    searchModal.innerHTML = `
    <div class="container-img__new">
    <button id="buttonClose">
    <img src="src/button-close.png" alt="button-close" />
</button>
<img src="src/sword-puzzle.png" alt="photo"/>
<p class="text-subscribe">Дякую за підписку!</p>
<img src="src/game-console.png" alt="photo2"/>

    </div>
    
    `
    const resultInputvalue = searchInputname.value;
    searchModal.classList.add('style-new');
    searchliname.textContent = `Вітаємо, ${resultInputvalue}!`;
    closeButton()
})
closeButton()
