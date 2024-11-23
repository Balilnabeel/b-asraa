// السلوك عند الضغط على زر القائمة (Hamburger Menu)
const menuIcon = document.getElementById('menu-icon'); // أيقونة القائمة
const navMenu = document.getElementById('nav-menu');  // قائمة التنقل

// إضافة حدث عند النقر على أيقونة القائمة
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // تغيير حالة القائمة لإظهارها أو إخفائها
});

// السلوك للصور المتقلبة (Carousel)
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-container img');
const totalSlides = slides.length