$(function() {
    //Nav-bar
    //scrolldown and up
    const fixedHeader = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 50) {
            fixedHeader.classList.add('is-show');
        } else {
            fixedHeader.classList.remove('is-show');
        }
    });


    //Nav-bar
    //Page-link animation
    $('.nav-menu a[href*="#"]').click(function() { //Apply all the link
        let hashTag = $(this).attr('href'); //Obtain link id from href tag
        let idPosition = $(hashTag).offset().top-90; //Obtain the distance from id above
        $('body, html').animate({scrollTop: idPosition}, 500); //Scroll to the position obtained
        return false;
    });


    //Header logo
    //Link animation
    $('.top-btn').click(function() {
        $('body, html').animate({scrollTop: 0}, 500);
        return false;
    });

    //Modal effect
    $('.signup-show').click(function(){
        $('#signup-modal').fadeIn();
        $('.overlay').addClass('show');
    });

    $('.close-modal, .overlay').click(function(){
        $('#signup-modal').fadeOut();
        $('.overlay').removeClass('show');
        $('#nav-mask').removeClass('openNav');
    });

    //Responsive
    //Nav Open bottun
/*$('.openbtn').click(function() {
        $(this).addClass('active');
        $('.nav-menu').toggleClass('openNav');
        /**
        if ($('.nav-menu').hasClass('openNav')) {
            $('.nav-menu').removeClass('openNav');
        } else {
            $('.nav-menu').addClass('openNav');
        }
        **/
/*});

    $('header, main, .nav-menu a, .small-btn, .top-btn').click(function() {
        $('.nav-menu').removeClass('openNav');
        $('.openbtn').removeClass('active');
       
    });*/

    let nav = document.querySelector(".nav-menu");
    let btn = document.querySelector(".openbtn");
    let mask = document.querySelector("#nav-mask");

    btn.onclick = () => {
        nav.classList.toggle('openNav');
        btn.classList.toggle('openNav');
        mask.classList.toggle('openNav');
    };

    nav.onclick = () => {
        nav.classList.toggle('openNav');
        btn.classList.toggle('openNav');
        mask.classList.toggle('openNav');
    };

    mask.onclick = () => {
        nav.classList.toggle('openNav');
        btn.classList.toggle('openNav');
        mask.classList.toggle('openNav');
    };

    $('.nav-menu a').click(function() {
        $('.nav-menu').removeClass('openNav');
        $('.openbtn').removeClass('openNav');
        $('#nav-mask').removeClass('openNav');
    });

    //Portfolio
    //Slideshow
    function slider(flag, num) {
        let current = $(".item.current"),
            next,
            index;
        if (!flag) {
          next = current.is(":last-child") ? $(".item").first() : current.next();
          index = next.index();
        } else if (flag === 'dot') {
          next = $(".item").eq(num);
          index = num;
        } else {
          next = current.is(":first-child") ? $(".item").last() : current.prev();
          index = next.index();
        }
        next.addClass("current");
        current.removeClass("current");
        $(".dot").eq(index).addClass("current").siblings().removeClass("current");
    }
      
    let setSlider = setInterval(slider, 4000);
      
    $(".button").on("click", function() {
        clearInterval(setSlider);
        let flag = $(this).is(".prev") ? true : false;
        slider(flag);
        setSlider = setInterval(slider, 4000);
    });
      
    $(".dot").on("click", function() {
        if ($(this).is(".current")) return;
        clearInterval(setSlider);
        let num = $(this).index();
        slider('dot', num);
        setSlider = setInterval(slider, 4000);
    });


    //FAQ
    //Accordion effect
    $('.faq-list-item').click(function() {
        let $answer = $(this).find('.answer');
        if ($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('span').text('+');
        } else {
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('span').text('-');
        }
    });


    //Scroll effect
    $(window).scroll(function() {
        //Top
        //Texts animation fade in
        $('.textAnime').each(function() {
            let elementPosition = $(this).offset().top-50; //50px above than element
            let scrollPosition = $(window).scrollTop(); //Obtain the scroll position
            let windowHeight = $(window).height(); //Obtain the window's height
            if (scrollPosition > elementPosition - windowHeight + 150) {
                $(this).addClass('appeartext');
            } else {
                $(this).removeClass('appeartext');
            }
        });

        //Container
        //Slide in
        $('.slideIn').each(function() {
            let targetElement = $(this).offset().top; //Obtain the distance from top of the page to the element
            let scrollPosition = $(window).scrollTop(); //Obtain the scroll position
            let windowHeight = $(window).height(); //Obtain the window's height
            if (scrollPosition > targetElement - windowHeight + 150) {
                $(this).addClass('scrollIn');
            } else {
                $(this).removeClass('scrollIn');
            }
        });

        //Title
        //Line animation
        $('.line-animation').each(function() {
            let pageDistance = $(this).offset().top;
            let scrollPosition = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scrollPosition > pageDistance - windowHeight + 150) {
                $(this).addClass('isActive');
            } else {
                $(this).removeClass('isActive');
            }
        });

        //About
        //Descriptions slidedown
        $('.textSlide').each(function() {
            let elementDistance = $(this).offset().top;
            let scrollPosition = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scrollPosition > elementDistance - windowHeight + 150) {
                $(this).addClass('slideDown');
            } else {
                $(this).removeClass('slideDown');
            }
        });

        //Back-button
        if ($(this).scrollTop() > 650) {//when it's scrolled 650px
            $('#back-btn').addClass('appearbtn');
        } else {
            $('#back-btn').removeClass('appearbtn');
        }

        //Footer text animation
        $('#footerTextAnime').each(function() {
            let elementPosition = $(this).offset().top-50; //50px above than element
            let scrollPosition = $(window).scrollTop(); //Obtain the scroll position
            let windowHeight = $(window).height(); //Obtain the window's height
            if (scrollPosition > elementPosition - windowHeight) {
                $(this).addClass('footer-appeartext');
            } else {
                $(this).removeClass('footer-appeartext');
            }
        });

    });
});


//Particle.js
particlesJS("particles-js", {"particles":{"number":{"value":33,"density":{"enable":true,"value_area":394.57382081613633}},"color":{"value":"#fca038"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.8177401510414166,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":27.620167457129543,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
