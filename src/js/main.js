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
    // Ensure jQuery is loaded from the CDN in index.html
    // $('.en').show();
    // $('.ru').hide();
    // $('.russian').addClass('active');

    $('.ru').show();
    $('.en').hide();
    $('.english').addClass('active');

    $('.russian').click(function () {
        console.log('russian');
        $('.en').fadeOut('slow', function () {
            $('.ru').fadeIn('slow');
        });

        $('.english').addClass('active');
        $('.russian').removeClass('active');
    });

    $('.english').click(function () {
        console.log('english');
        $('.ru').fadeOut('slow', function () {
            $('.en').fadeIn('slow');
        });

        $('.russian').addClass('active');
        $('.english').removeClass('active');
    });

    // Установка текущего года в футере
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('currentYear2').textContent = new Date().getFullYear();

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
