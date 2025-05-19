// ========================================================================================
// Scripts for Site
// ========================================================================================

// Import styles
import '../styles/main.scss';

// Main functionality
document.addEventListener('DOMContentLoaded', function () {
    // Ensure jQuery is loaded from the CDN in index.html
    $('.en').show();
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
});
