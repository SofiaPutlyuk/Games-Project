const carouselInner = document.querySelector('.our-team__carousel_inner');
const cards = document.querySelectorAll('.our-team__carousel_card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentSlide = document.getElementById('currentSlide');
const totalSlides = document.getElementById('totalSlides');

let currentIndex = 0;

totalSlides.textContent = cards.length;

function showCard(index) {
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
    currentSlide.textContent = index + 1;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
    showCard(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
    showCard(currentIndex);
});

showCard(currentIndex);
