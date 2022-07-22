$(window).scroll(function() {
    if($(this).scrollTop() > 200) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
$('#back-to-top').hide().click(function() {
    $('html, body').animate({scrollTop:0}, 1000);
    return false;
});