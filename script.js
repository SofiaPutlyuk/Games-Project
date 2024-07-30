const carouselInner = document.querySelector('.our-team__carousel_inner');
const cards = document.querySelectorAll('.our-team__carousel_card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselIndicator = document.getElementById('carouselIndicator');

let currentIndex = 0;
const totalSlides = cards.length;

// Initialize the indicator
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('indicator-dot');
  if (i === currentIndex) {
    dot.classList.add('active');
  }
  carouselIndicator.appendChild(dot);
}

function updateIndicator() {
  const dots = document.querySelectorAll('.indicator-dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function showCard(index) {
  carouselInner.style.transform = `translateX(-${index * 100}%)`;
  updateIndicator();
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
