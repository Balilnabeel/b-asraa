// إظهار وإخفاء شريط القوائم
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// ظهور الرسالة التحذيرية المؤقتة بعد تحميل الصفحة
window.onload = function() {
    const warningMessage = document.getElementById('warningMessage');
    warningMessage.style.display = 'block';
    document.getElementById('closeButton').onclick = function() {
        document.getElementById('warningMessage').style.display = 'none';
    };
    // إخفاء الرسالة بعد 5 ثواني
    setTimeout(function() {
        warningMessage.style.display = 'none';
    }, 5000);
};

// تغيير اللغة بناءً على الاختيار
function changeLanguage() {
    const language = document.getElementById('language').value;

    if (language === 'ar') {
        document.documentElement.lang = 'ar';
        document.getElementById('newsText').innerText = 'أخبار سريعة: مرحباً بكم في موقعنا!';
        document.getElementById('homeLink').innerText = 'الرئيسية';
        document.getElementById('aboutLink').innerText = ' الموقع';
        document.getElementById('servicesLink').innerText = 'الأماكن السياحيه';
        document.getElementById('contactLink').innerText = ' المطاعم';
        document.getElementById('title').innerText = 'موقع حصري عن البصرة';
        document.getElementById('description').innerText = 'البصرة هي مدينة ساحلية في جنوب العراق. تتمتع بموقع استراتيجي على الخليج العربي، مما يجعلها مركزًا تجاريًا رئيسيًا. وتعتبر المدينة مكانًا غنيًا بالمعالم السياحية والتاريخية.';
    } else if (language === 'en') {
        document.documentElement.lang = 'en';
        document.getElementById('newsText').innerText = 'Quick News: Welcome to our website!';
        document.getElementById('homeLink').innerText = 'Home';
        document.getElementById('aboutLink').innerText = 'About Us';
        document.getElementById('servicesLink').innerText = 'Services';
        document.getElementById('contactLink').innerText = 'Contact Us';
        document.getElementById('title').innerText = 'Exclusive Website about Basra';
        document.getElementById('description').innerText = 'Basra is a coastal city in southern Iraq. It enjoys a strategic location on the Arabian Gulf, making it a major commercial hub. The city is also rich in historical and tourist attractions.';
    } else if (language === 'ku') {
        document.documentElement.lang = 'ku';
        document.getElementById('newsText').innerText = 'ئەو هەواڵانەی خێرا: بەخێر بێن بە ماڵپەڕەکانمان!';
        document.getElementById('homeLink').innerText = 'سەرەتا';
        document.getElementById('aboutLink').innerText = 'دەربارە';
        document.getElementById('servicesLink').innerText = 'خزمەتگوزاریەکان';
        document.getElementById('contactLink').innerText = 'پەیوەندیمان پێوە';
        document.getElementById('title').innerText = 'ماڵپەڕی تایبەتی دەربارەی بەصرە';
        document.getElementById('description').innerText = 'بەصرە شارێکی کۆشتی لە باشوورە کوردیەکان لە عێراقە';
    }
}