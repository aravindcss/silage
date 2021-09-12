$(document).ready(function() {
	
    /*$('#landing_slider').owlCarousel({
        loop: false,
        rewind: true,
        margin:0,
        nav:false,
        dotsContainer: '#landingdots',
        items:1,
        autoplay:true,
        autoplayTimeout: 8000,
        onChanged: function(){
            RemoveIframe();
        }
    });*/

    /*$('#brands_home_slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        // items:5,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });*/
    
    $('#hygiene_banner_slider').owlCarousel({
        loop: true,
        dots: false,
        margin:0,
        nav:false,
        items:1,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplaySpeed: 0,
        animateOut: 'fadeOut',
        touchDrag  : false,
        mouseDrag  : false
    });


    $(window).scroll(function() {
        if (!$('.video_slide.shown').visible(true)) {
            $(".video_slide").removeClass('shown');
            $(".video_slide iframe").attr('src', '');
          // console.log('Visible');
        }
    });


    
});


function RemoveIframe() {
    $('#landing_slider iframe').attr("src", "");
    $('#landing_slider .play_video').removeClass("playing");
}