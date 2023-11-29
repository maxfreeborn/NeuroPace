$(document).ready(function() {
    // Now the DOM is fully loaded, and we can safely attach our scroll event listener
    $(document).scroll(function() {
        var $header = $('.header-content');
        var $footer = $('footer'); // Replace with your footer selector if different
        var footerPosition = $footer.offset().top;

        if ($(window).scrollTop() + $(window).height() < footerPosition) {
            // The footer is not yet reached
            $header.css({
                'position': 'sticky',
                'top': '0'
            });
        } else {
            $header.css('position', 'absolute');
        }
    });
});