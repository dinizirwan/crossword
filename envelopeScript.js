$(document).ready(function() {
    const $letterImage = $('.letter-image');
    const $closeBtn = $('#close-btn');

    $letterImage.on('click', function() {
        if (!$letterImage.hasClass('active')) {
            $letterImage.addClass('active');
            $closeBtn.fadeIn();
        }
    });

    $closeBtn.on('click', function(e) {
        e.stopPropagation(); // Verhindert, dass der Klick das letter-image erneut triggert
        $letterImage.removeClass('active');
        $closeBtn.fadeOut();
    });
});