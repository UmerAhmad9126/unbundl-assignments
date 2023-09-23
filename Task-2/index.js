const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

let counter = 1;
const slideWidth = images[0].clientWidth;

slide.style.transform = `translateX(${-slideWidth * counter}px)`;

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    slide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    slide.style.transform = `translateX(${-slideWidth * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    slide.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    slide.style.transform = `translateX(${-slideWidth * counter}px)`;
});

slide.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastClone') {
        slide.style.transition = 'none';
        counter = images.length - 2;
        slide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
    if (images[counter].id === 'firstClone') {
        slide.style.transition = 'none';
        counter = images.length - counter;
        slide.style.transform = `translateX(${-slideWidth * counter}px)`;
    }
});
