// ========================================================================================
// Scripts for Site
// ========================================================================================

// Import styles
import '../styles/main.scss';

// Import PDF files
import '../assets/pdf/dmitriy_zatulovskiy_cv_en.pdf';
import '../assets/pdf/dmitriy_zatulovskiy_cv_ru.pdf';

// No need to update PDF paths since we're keeping the original names
// Just leaving the links as they are in the HTML

// Функция для отображения страницы после загрузки стилей
function showPage() {
    document.documentElement.classList.add('ready');
}

// Если страница уже загружена полностью
if (document.readyState === 'complete') {
    showPage();
} else {
    // Иначе ждем, когда загрузится
    window.addEventListener('load', showPage);
}

// Main functionality
document.addEventListener('DOMContentLoaded', function () {
    // Language toggle functionality
    const enElements = document.querySelectorAll('.en');
    const ruElements = document.querySelectorAll('.ru');
    const russianBtn = document.querySelector('.russian');
    const englishBtn = document.querySelector('.english');

    // Initialize with English
    enElements.forEach(el => el.style.display = 'block');
    ruElements.forEach(el => el.style.display = 'none');
    russianBtn.classList.add('active');

    // Helper function for fade animation
    const fadeOut = (elements, callback) => {
        elements.forEach(el => {
            el.style.transition = 'opacity 0.3s ease';
            el.style.opacity = '0';
        });
        setTimeout(() => {
            elements.forEach(el => el.style.display = 'none');
            if (callback) callback();
        }, 300);
    };

    const fadeIn = (elements) => {
        elements.forEach(el => {
            el.style.display = 'block';
            el.style.opacity = '0';
            setTimeout(() => {
                el.style.transition = 'opacity 0.3s ease';
                el.style.opacity = '1';
            }, 10);
        });
    };

    // Russian button click
    russianBtn.addEventListener('click', function () {
        fadeOut(enElements, function () {
            fadeIn(ruElements);
        });
        englishBtn.classList.add('active');
        russianBtn.classList.remove('active');
    });

    // English button click
    englishBtn.addEventListener('click', function () {
        fadeOut(ruElements, function () {
            fadeIn(enElements);
        });
        russianBtn.classList.add('active');
        englishBtn.classList.remove('active');
    });

    // Set current year in footer
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#currentYear, #currentYear2');
    yearElements.forEach(el => {
        if (el) el.textContent = currentYear;
    });

    // Мобильное меню
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');

    // Функция для переключения мобильного меню
    function toggleMobileMenu() {
        document.body.classList.toggle('menu-open');
    }

    // Обработчики событий для кнопки меню и оверлея
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', toggleMobileMenu);
    }

    // Закрывать меню при клике по ссылкам внутри меню
    const sidebarLinks = document.querySelectorAll('.sidebar-wrapper a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth < 768 && document.body.classList.contains('menu-open')) {
                toggleMobileMenu();
            }
        });
    });

    // Закрывать меню при изменении размера окна
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768 && document.body.classList.contains('menu-open')) {
            document.body.classList.remove('menu-open');
        }
    });
});
