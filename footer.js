/*Модальне вікно */
const searchInputfooter = document.getElementById('footerInput')
const searchInputButton = document.querySelector('.footer-subscribe__button')
searchInputButton.addEventListener('click', function () {
    const inputFootervalue = searchInputfooter.value
    if (inputFootervalue.includes('@')) {
        const createModal = document.createElement('div')
        createModal.classList.add('backdrop-footer')
        createModal.innerHTML = `
<div class="modal">
<button  id="footerButton">
<img src="src/close-icon.png" alt="button-close"/>
</button>
    <div class="modal__content">

        <img src="src/photo-icon.png" alt="icon-game"/>
        <p class="text-thanks">Дякую за підписку!</p>
        <img src="src/photo-game.png" alt="icon2"/>
    </div>
</div>

`
        document.body.appendChild(createModal)
        const searchFooterbutton = document.getElementById('footerButton')
        console.log(searchFooterbutton)
        searchFooterbutton.addEventListener('click', function () {
            createModal.remove()
            searchInputfooter.value = '';

        })
        createModal.addEventListener('click', function (event) {
            if (event.target === createModal) {
                createModal.remove()
                searchInputfooter.value = '';
            }
        })
    }

})
