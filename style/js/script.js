$(document).ready(function() {
    function menuscroll() {
        let navmenu = $('.navbar-menu');
        if($(window).scrollTop() > 50) {
            navmenu.addClass('is-scrolling');
        } else {
            navmenu.removeClass('is-scrolling');
        }
    }

    menuscroll();
    $(window).on('scroll' , menuscroll);

    let sideNav = $('#navbar');
    sideNav.on('show.bs.collapse' , function() {
        $(this).parents('.navbar-menu').addClass('menu-is-open');
    })

    sideNav.on('hide.bs.collapse' , function() {
        $(this).parents('.navbar-menu').removeClass('menu-is-open');
    })

    let comments = $('.comments');
    if(comments.length && $.fn.owlCarousel) {
        comments.owlCarousel({
            rtl: true,
            nav : true,
            items : 1,
            dots : false,
            navText : ['<span class="ti-arrow-left"></span>' , '<span class="ti-arrow-right"></span>']
        });
    }

    let gallery = $('.img-gallery');
    if(gallery.length && $.fn.owlCarousel) {
        gallery.owlCarousel({
            rtl: true,
            nav : false,
            items : 3,
            dots : true,
            center : true,
            autoplay : true,
            loop : true,
            responsive : {
                0 : {
                    items : 1
                },
                768 : {
                    items : 3
                }
            }
        });
    }
})
