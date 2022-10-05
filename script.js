if(localStorage.getItem('cookieSeen') != 'shown') {
    $('.cookieDiv').delay(2000).fadeIn();
}

$('.close').click(function() {
    $('.cookieDiv').fadeOut();
    localStorage.setItem('cookieSeen', 'shown');
})

