$(function() {


    // ! ******************** Menu burger **************************

    $('.header__burger').click(function() {
        $('.header__burger, .header-top__menu').toggleClass('active'); 
        $('body').toggleClass('lock'); 
        
    });
    
    // ! ******************** Menu burger **************************




});

// $('.footer__arrow-up').click(function() {
//     $('html,body').animate({ scrollTop: 0 }, 1000);
// });



// $('.header__search-search').on('click', function() {
//     $('.header__search-box').slideToggle();

// });