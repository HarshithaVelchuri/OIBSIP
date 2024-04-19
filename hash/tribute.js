let slideIndex = 0;
let intervalId;

function startAutoScroll() {
    intervalId = setInterval(function() {
        moveSlide(1);
    }, 15000); }

function stopAutoScroll() {
    clearInterval(intervalId);
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.slider img');
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
}

startAutoScroll();
