const searchDinosaur = document.getElementById('dinosaur')
document.addEventListener('keydown',event => {
    if(event.key===" "){
        searchDinosaur.style.transition = 'transform 0.2s ease';
        searchDinosaur.style.transform = 'translateY(-80px)'; 
        setTimeout(function() {
            dinosaur.style.transform = 'translateY(0)'; 
        }, 200);
    }
}) 