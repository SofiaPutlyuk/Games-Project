const searchDinosaur = document.getElementById('dinosaur');
const searchObstacle = document.getElementById('obstacle');
let roadMoving;
let offset = 0;
let positionCactus = 720;

function moveRoad() {
    offset -= 2;
    document.getElementById('road').style.backgroundPositionX = offset + 'px';

    let positionLeft = positionCactus + offset;
    searchObstacle.style.left = positionLeft + 'px';

    if (positionLeft + searchObstacle.offsetWidth < 0) {
        positionCactus = 720;
        offset = 0;
    }

    if (checkCollision()) {
        alert('Game Over!');
        stopRoadAnimation();
        return;
    }
}

function startRoadAnimation() {
    if (!roadMoving) {
        roadMoving = setInterval(moveRoad, 10);
    }
}

function stopRoadAnimation() {
    if (roadMoving) {
        clearInterval(roadMoving);
        roadMoving = null;
    }
}

function jump() {
    if (!searchDinosaur.classList.contains('jump')) {
        searchDinosaur.classList.add('jump');
        searchDinosaur.classList.remove('run');
        setTimeout(() => {
            searchDinosaur.classList.remove('jump');
            searchDinosaur.classList.add('run');
        }, 600);
    }
}

function checkCollision() {
    const dinoRect = searchDinosaur.getBoundingClientRect();
    const cactusRect = searchObstacle.getBoundingClientRect();
    return !(dinoRect.right < cactusRect.left ||
        dinoRect.left > cactusRect.right ||
        dinoRect.bottom < cactusRect.top ||
        dinoRect.top > cactusRect.bottom);
}

document.addEventListener('keydown', event => {
    if (event.key === " ") {
        jump();
        startRoadAnimation();
    }
});
