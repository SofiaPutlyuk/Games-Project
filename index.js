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
const imgSun = "button-sun.png"
const imgMoon = "button-moon.png"
const currentTransform = 'translate(-10px)'
const changeTransform = 'translate(10px)'
const colorBodyCurrent = 'white'
const colorBodyChange = 'black'
let toggle = false;
searchIconswitch.addEventListener('click',function(){
 if(toggle){
  searchIconswitch.src = imgSun
  document.body.style.background = colorBodyCurrent
  searchIconswitch.style.transform = currentTransform
  searchIconswitch.style.background = colorBodyCurrent
 
 } else {
    searchIconswitch.src = imgMoon
    document.body.style.background = colorBodyChange;
    searchIconswitch.style.transform = changeTransform
    searchIconswitch.style.background = colorBodyChange
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
function closeButton(){
    const buttonClose = document.getElementById('buttonClose');
    if(buttonClose){
        buttonClose.addEventListener('click',function(){
            searchModal.style.display = "none"
            searchBackdrop.style.display = "none"
            
        })
    }
}
searchButtonSave.addEventListener('click',function(){
    searchModal.innerHTML = `
    <div class="container-img__new">
    <button id="buttonClose">
    <img src="button-close.png" alt="button-close" />
</button>
<img src="sword-puzzle.png" alt="photo"/>
<p class="text-subscribe">Дякую за підписку!</p>
<img src="game-console.png" alt="photo2"/>

    </div>
    
    `
    const resultInputvalue = searchInputname.value;
    searchModal.classList.add('style-new');
    searchliname.textContent = `Вітаємо, ${resultInputvalue}!`;
    closeButton()
})
closeButton()