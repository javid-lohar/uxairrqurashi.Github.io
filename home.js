$(document).ready(function()
{
    $(window).scroll(function()
    {
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if(this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");
        }
        else
        {
            $('.scroll-up-btn').removeClass("show");
        }          
    });

    $('.scroll-up-btn').click(function()
    {
        $('html').animate({scrollTop: 0});
    });

    
    // toggle menu/navbar script
    $('.menu-btn').click(function()
    {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

        // typing text animation script
        var typed = new Typed(".typing", {
            strings: ["YouTuber", "Developer", "Graphic Designer", "Freelancer"],
            typeSpeed: 90,
            backSpeed: 60,
            loop: true
        });
        

        var typed = new Typed(".typing-2", {
            strings: ["YouTuber", "Developer", "Graphic Designer", "Freelancer"],
            typeSpeed: 90,
            backSpeed: 60,
            loop: true
        });
    
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: 
        {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 2,
                nav: false
            }
        }
    });


    $(document).ready(function(){
        $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('#back-to-top').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
            });
            // scroll body to 0px on click
            $('#back-to-top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
    });


    $(document).ready(function(){
        $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('#back-to-top').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
            });
            // scroll body to 0px on click
            $('#back-to-top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
    });

    
});