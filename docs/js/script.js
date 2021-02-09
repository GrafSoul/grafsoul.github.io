// ========================================================================================
// Scripts for Site
// ========================================================================================
(function () {
    $('.russian').click(function () {
        console.log('russian');
        $('.en').fadeOut('slow', function () {
            $('.ru').fadeIn('slow');
        });

        $('.russian').removeClass('active');
        $('.english').addClass('active');
    });

    $('.english').click(function () {
        console.log('english');
        $('.ru').fadeOut('slow', function () {
            $('.en').fadeIn('slow');
        });

        $('.english').removeClass('active');
        $('.russian').addClass('active');
    });
})();
