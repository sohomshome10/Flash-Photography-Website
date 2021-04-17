function typingEffect(){
    var typed = new Typed('.typing', {
        strings:["Photographer.","Travel Blogger.","Photo Artist."],
        typeSpeed: 60,
        backSpeed: 40,
        loop:true,
        loopCount: Infinity,
        smartBackspace: true,
        backDelay: 1000,
    });
}
$(function(){
    // Hamburger toggle.
    // Back to top button.
    $('body').append('<a href="#home" class="top scroll"><i class="fas fa-chevron-up"></i></a>');
    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $('.top').fadeIn('slow');
            $('#navbar').css('background-color' , '#793be8');
            $('#navbar').css('box-shadow' , '0 0 10px 5px #000');
            $('.nav-item a').css('color' , '#000');
            $('.navbar .active').addClass('aactive');
            $('.navbar .active').removeClass('active');
        }else{
             $('.top').fadeOut('slow');
             $('#navbar').css('background-color' , 'transparent');
             $('.nav-item a').css('color' , '#fff');
             $('#navbar').css('box-shadow' , 'none');
        }
    });
    $('.top').click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        },500);
        return false;
    });
    typingEffect();
    // $('.filtr-container').filterizr({
    //     animationDuration: 0.5,
    //     easing: 'ease-out',
    //     layout: 'sameSize',
    // });
    $('.center').slick({
        autoplay: true,
        centerMode: true,
        dots: true,
        arrows: false,
        centerPadding: '100px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
            },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '60px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });


});