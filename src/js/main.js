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
    $('.en').show();
    $('.ru').hide();
    $('.russian').addClass('active');

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
});
