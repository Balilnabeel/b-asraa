function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// تحريك الصور في السلايدر
let index = 0;
const slides = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-img');

function changeImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(changeImage, 3000);