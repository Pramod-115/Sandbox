$('.owl-carousel1').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$(window).scroll(() => {
    if ($(this).scrollTop() > 200) {
        $(".navbarr").addClass("fixed");
    }
    else {
        $(".navbarr").removeClass("fixed");
    }
}

)

$(window).scroll ( ()=> {
    if ($(window).scrollTop() > 300) {
        $(".up_btn").addClass("btn_show");
        
    }
    else {
        
        $(".up_btn").removeClass("btn_show");
    }
}



)


$('.counter').countUp({
    delay: 10,
    time: 1000
});

new WOW().init();


$('.quoslider').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.owl-carousel-team').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})