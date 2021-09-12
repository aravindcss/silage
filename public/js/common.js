
$(window).on('load', function() {
  $(".topheader").addClass("menu_animate");
  $('#landing_other_dots button:eq(0)').addClass("active");
  $('#news_slider .owl-dot:eq(0)').addClass("active");
  $('.news_slider .owl-dot:eq(0)').addClass("active");
  $('.benefits_slider .owl-dot:eq(0)').addClass("active");
  $('.business_slider .owl-dot:eq(0)').addClass("active");
  $('.our_story_sliders_dots .owl-dot:eq(0)').addClass("active");
});


$(window).on('scroll', function() {
    if ($(window).width() < 767){
      $(".benefit_link").each(function() {
        if (isScrolledIntoView($(this))) {
          $(".benefit_link").removeClass("active");
          $(this).addClass("active");
        }
      });
    }
});


if ($(window).width() > 767){
  $(".benefit_link").hover(function(){
    $(".benefit_link").removeClass('active');
  })
}


$(document).ready(function() {


if ($('#brands_home_slider').length) {
    $('#brands_home_slider').owlCarousel({
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
    });
}

$(".hideshow").click(function(){
  $(this).toggleClass('active');
  $(".slidediv").slideToggle();
});


// $(".business_joinus a, .being_good_and_green_desc a, .impact_box a").click(function(){
$(".business_joinus a").click(function(){
  $(this).toggleClass('open');
  $(this).next().slideToggle();
});

$(".desktop_un_sgd").click(function(){
  rel = $(this).attr("rel");
  if ($(this).hasClass("open")) {
    $(".being_good_and_green_desc .desc").fadeOut();
    $(this).removeClass('open');
    return false;
  }
  $(this).addClass('open');
  $(".being_good_and_green_desc .desc").fadeOut();
  $("#"+rel).fadeIn();
});

$(".mobile_un_sgd").click(function(){
  $(this).toggleClass('open');
  $(this).parent().prev().slideToggle();
});

$(".impact_box a").click(function(){
  if ($(this).hasClass("open")) {
    $(".impact_box .din").slideUp();
    $(".impact_box a").removeClass('open');
    return false;
  }
  $(".impact_box .din").slideUp();
  $(".impact_box a").removeClass('open');
  $(this).toggleClass('open');
  $(this).parent().next().slideToggle();
});

$(".more_philosophy").click(function(){
  $('.more_philosophy').fadeIn(0);
  $(this).fadeOut(0);
  $('.philosophy_desc').slideUp();
  $(this).parent().find('.philosophy_desc').slideToggle();
});

$(".philosophy_desc .arrow-down-close").click(function(){
  $('.more_philosophy').fadeIn(0);
  $('.philosophy_desc').slideUp();
});

// Desktop
$(".leader_desktop").click(function(){
  if ($(this).hasClass('opened')) {
    return false;
  }
  $(".leaders").removeClass('opened');
  $(this).addClass('opened');
  $(".leadership_desc").slideUp();
  $(this).parent().parent().find(".leadership_desc").slideToggle();
});
$(".leadership_desc .arrow-down-close").click(function(){
  $(".leadership_desc").slideUp();
  $(".leader_desktop").removeClass('opened');
});

$(".leader_desktop .social a").click(function(){
  link = $(this).attr("href");
  if ($(this).parent().parent().parent().hasClass("opened")) {
    window.open(link);
  }
});
// Desktop

// Mobile
$(".leaders_mobile").click(function(){
  if ($(this).hasClass('opened')) {
    // alert("Call");
    $(".mob_desc").slideUp();
    $(".leaders_mobile").removeClass('opened');
    return false;
  }
  $(".leaders_mobile").removeClass('opened');
  $(this).addClass('opened');
  $(".mob_desc").slideUp();
  $(this).parent().parent().find(".mob_desc").slideToggle();
});
$(".mob_desc .arrow-down-close").click(function(){
  $(".mob_desc").slideUp();
  $(".leaders_mobile").removeClass('opened');
});
// Mobile

$(document).mouseup(function (e) {
  if ($(e.target).closest(".mob_desc").length === 0 && $(e.target).closest(".leaders").length === 0) {
    // alert("Call");
    $(".mob_desc").slideUp();
    $(".leaders_mobile").removeClass('opened');
  }
});


$(".accorddiv h3").click(function(){
  if ($(this).parent().hasClass("accordshow")) {
    $(".accorddiv").removeClass('accordshow');
    $('.accorddesc').slideUp();
    return false;
  }
  $('.accorddesc').slideUp();
  $(".accorddiv").removeClass('accordshow');
  $(this).next().slideDown();
  $(this).parent().addClass('accordshow');
});

$(".show_initiatives").click(function(){
  rel = $(this).attr("rel");
  parent = $(this).data('parent')
  if ($(this).hasClass("shown")) {
    $('.initiatives_boxdesc').slideUp();
    $(".show_initiatives").removeClass('shown');
    $(".initiatives_box_container").removeClass('shown');
    return false;
  }
  $('.initiatives_boxdesc').slideUp();
  $(".show_initiatives").removeClass('shown');
  $("#"+rel).slideDown();
  $("#"+parent).addClass('shown');
  $(this).addClass('shown');




  if ($('.business_slider').length) {
    var business_slider = $('.business_slider');
    business_slider.owlCarousel({
        loop: false,
        margin:0,
        nav:false,
        dots: true,
        items: 4,
        slideBy: 4,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                dots: true,
                items: 3,
                slideBy: 3
            },
            1000:{
                dots: true,
                items: 4,
                slideBy: 4
            }
        }
    });
  }

});

var landing_other_slider = $('#landing_other_slider');
if ($('#landing_other_slider').length) {
  landing_other_slider.owlCarousel({
          loop: true,
          margin:0,
          nav:false,
          items:1,
          dots: true,
          dotsContainer: '#landing_other_dots',
          autoplay:true,
          autoplayTimeout: 3500,
          animateIn: 'fadeIn',
          animateOut:'fadeOut'
  });
}


$('#landing_other_dots .owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});

var landing_single_slider = $('#landing_single_slider');
if ($('#landing_single_slider').length) {
  landing_single_slider.owlCarousel({
          loop: false,
          margin:0,
          nav:false,
          items:1,
          dots: false,
          autoplay:false,
          mouseDrag:false,
          touchDrag:false
  });
}

$(".has_dropdown span").click(function(){
  if ($(this).parent().hasClass("open")) {
    $("#Mobile_Menu ul li ul").slideUp();
    $("#Mobile_Menu ul li").removeClass("open");
    return false;
  }
  $("#Mobile_Menu ul li").removeClass("open");
  $(this).parent().addClass("open");
  $("#Mobile_Menu ul li ul").slideUp();
  $(this).parent().find("ul").slideToggle();
})


if ($('#landing_slider').length) {
  var owl = $('#landing_slider');
  owl.owlCarousel({
          loop: false,
          rewind: true,
          margin:0,
          nav:false,
          dots: false,
          // dotsContainer: '#landingdots',
          items:1,
          video:true,
          autoplay:true,
          autoplayTimeout: 5000,
          animateIn: 'fadeIn',
          animateOut:'fadeOut'
          // autoplayHoverPause:true,
          // smartSpeed:450,
          // slideSpeed:5000
  });
}

stagePadding = $(window).width() / 2;
stagePadding = stagePadding / 2.5;

// alert(stagePadding);



var player;
var player_id;
var youtube_id;

$(".play_video_api").click(function(){
  youtube_id = $(this).data('youtube');
  to_be_hidden = $(this).data('element');
  video_iframe = $(this).data('iframe');
  player_id = video_iframe;
  link_text = $(this).data('text');
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video_'+video_iframe, {
      height: '100%',
      width: '100%',
      videoId: youtube_id,
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
  if ($(this).hasClass('playing')) {
    // alert("Play Again");
    player.stopVideo();
    player.playVideo();
    return false;
  }
  $(".banner_caption").fadeOut();
  // $("header").fadeOut();
  $(".play_video").removeClass("playing");
  $("#"+to_be_hidden).addClass("playing");
  // $("#"+link_text).text("PAUSE VIDEO");
  $("#"+link_text).addClass("playing");
  onYouTubeIframeAPIReady();
  // owl.trigger('stop.owl.autoplay');
  if ($('#news_slider').length) {
    news_slider.trigger('stop.owl.autoplay');
  }
  if ($('.benefits_slider').length) {
    benefits_slider.trigger('stop.owl.autoplay');
  }
});


if ($('#news_slider').length) {
  var news_slider = $('#news_slider');
  news_slider.owlCarousel({
          loop: false,
          rewind: true,
          margin:0,
          nav:false,
          items:1,
          stagePadding: 50,
          video:true,
          autoplay:true,
          autoplayTimeout: 5000,
          autoplayHoverPause:true,
          dots: true,
          responsive:{
              0:{
                  dots: false
              },
              1000:{
                  dots: true
              }
          }
  });

  news_slider.on('changed.owl.carousel', function(event) {
    // 6yRYuTp5Fx4
    // alert("Call");
    $(".playing").removeClass('playing');
    $("#video_"+player_id).attr("src", "");
    $("#video_"+player_id).attr("src", "https://www.youtube.com/embed/"+youtube_id);
  });


}

if ($(window).width() < 767){

  if ($('.news_slider').length) {
    var news_slider2 = $('.news_slider');
    news_slider2.owlCarousel({
            loop: false,
            rewind: true,
            margin:0,
            nav:false,
            items:1,
            stagePadding: 50,
            video:true,
            autoplay:true,
            autoplayTimeout: 5000,
            autoplayHoverPause:true,
            dots: true,
            responsive:{
                0:{
                    dots: false
                },
                1000:{
                    dots: true
                }
            }
    });

    news_slider2.on('changed.owl.carousel', function(event) {
      // 6yRYuTp5Fx4
      // alert("Call");
      $(".playing").removeClass('playing');
      $("#video_"+player_id).attr("src", "");
      $("#video_"+player_id).attr("src", "https://www.youtube.com/embed/"+youtube_id);
    });


  }

}

if ($(window).width() > 767){

  if ($('.news_slider').length) {
    var news_slider2 = $('.news_slider');
    news_slider2.owlCarousel({
            loop: false,
            rewind: true,
            margin:0,
            nav:false,
            items:1,
            stagePadding: 50,
            autoWidth:true,
            video:true,
            autoplay:true,
            autoplayTimeout: 5000,
            autoplayHoverPause:true,
            dots: true,
            responsive:{
                0:{
                    dots: false
                },
                1000:{
                    dots: true
                }
            }
    });

    news_slider2.on('changed.owl.carousel', function(event) {
      // 6yRYuTp5Fx4
      // alert("Call");
      $(".playing").removeClass('playing');
      $("#video_"+player_id).attr("src", "");
      $("#video_"+player_id).attr("src", "https://www.youtube.com/embed/"+youtube_id);
    });


  }

}


if ($(window).width() < 767){
  if ($('.benefits_slider').length) {
    var benefits_slider = $('.benefits_slider');
    benefits_slider.owlCarousel({
            loop: false,
            rewind: true,
            margin:0,
            nav:false,
            items:1,
            stagePadding: 50,
            video:true,
            autoplay:true,
            autoplayTimeout: 5000,
            autoplayHoverPause:true,
            dots: true,
            responsive:{
                0:{
                    dots: false
                },
                1000:{
                    dots: true
                }
            }
    });
    benefits_slider.on('changed.owl.carousel', function(event) {
      $(".playing").removeClass('playing');
      $("#video_"+player_id).attr("src", "");
      $("#video_"+player_id).attr("src", "https://www.youtube.com/embed/"+youtube_id);
    });
  }
}

if ($(window).width() > 767){
  if ($('.benefits_slider').length) {
    var benefits_slider = $('.benefits_slider');
    benefits_slider.owlCarousel({
      loop: false,
      rewind: true,
      margin:0,
      nav:false,
      items:1,
      stagePadding: 30,
      video:true,
      autoplay:true,
      autoplayTimeout: 5000,
      autoplayHoverPause:true,
      dots: true,
      responsive:{
          0:{
              dots: false
          },
          1000:{
              dots: true
          }
      }
    });
    benefits_slider.on('changed.owl.carousel', function(event) {
      $(".playing").removeClass('playing');
      $("#video_"+player_id).attr("src", "");
      $("#video_"+player_id).attr("src", "https://www.youtube.com/embed/"+youtube_id);
    });
  }
}

if ($('#videos_slider').length) {
  var videos_slider = $('#videos_slider');
  videos_slider.owlCarousel({
          loop: false,
          rewind: true,
          margin:0,
          nav:true,
          items:1,
          stagePadding: 50,
          video:true,
          autoplay:true,
          autoplayTimeout: 5000,
          autoplayHoverPause:true,
          dots: false,
          responsive:{
              0:{
                  dots: false
              },
              1000:{
                  dots: false
              }
          }
  });
}




$('#landing_other_dots button').removeClass("active");
$('#news_slider .owl-dot').removeClass("active");
$('.news_slider .owl-dot').removeClass("active");
$('.business_slider .owl-dot').removeClass("active");
$('.benefits_slider .owl-dot').removeClass("active");

/*$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})*/


    $(document).mouseup(function (e) {
      if ($(e.target).closest(".topheader").length === 0 && $(e.target).closest("#godrej_group_menus").length === 0) {
        // alert("Call");
        $("#godrej_group_menus").slideUp();
        $(".topspace55").animate({ height: '55px' });
        $("#godrej_group_link").removeClass("change");
        $(".menu ul li ul").removeClass('global_menu_open');
      }
    });

    $(window).scroll(function() {

        if ($(window).scrollTop() > 20) {
          $("header").addClass("sticky_header");
          $("#Mobile_Header").addClass("sticky_header");
          // $(".topheader").slideUp();
          $(".topheader").addClass('hide_top_menu');
          $("#godrej_group_menus").slideUp();
        }
        else {
          $("header").removeClass("sticky_header");
          $("#Mobile_Header").removeClass("sticky_header");
          // $(".topheader").slideDown();
          $(".topheader").removeClass('hide_top_menu');
        }
    });
      var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       0,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null // optional scroll container selector, otherwise use window
        }
      );
      wow.init();

      $(".play_video").click(function(){
        $(".play_video").removeClass("playing");
        youtube_id = $(this).data('youtube');
        // alert("https://www.youtube.com/embed/"+youtube_id+"?autoplay=1&enablejsapi=1&vq=large&rel=0&autohide=1&controls=1&iv_load_policy=3&theme=light&color=white&showinfo=0");
        to_be_hidden = $(this).data('element');
        video_iframe = $(this).data('iframe');
        $(this).next(".youtube_player").addClass('playing');
        $(this).parent().find(".youtube_bg").addClass('playing');
        $(this).parent().find(".close_video").fadeIn(0);
        $("#"+to_be_hidden).addClass("playing");
        $("#video_"+video_iframe).attr("src","https://www.youtube.com/embed/"+youtube_id+"?autoplay=1&enablejsapi=1&vq=large&rel=0&autohide=1&controls=1&iv_load_policy=3&theme=light&color=white&showinfo=0");
        onYouTubeIframeAPIReady();
        if ($('#news_slider').length) {
          news_slider.trigger('stop.owl.autoplay');
        }
        if ($('.benefits_slider').length) {
          benefits_slider.trigger('stop.owl.autoplay');
        }
      });

      $(document).on('click', ".play_video_media", function(){
        $("#media_video_close").fadeIn(0);
        $('html, body').stop().animate({
          scrollTop: $("#video_electronic_media").offset().top - 130
        });
        $("#electronic_media_video_link").addClass('playing');
        youtube_id = $(this).data('youtube');
        metadata = $(this).data('metadata');
        console.log(metadata);
        if(metadata) {
          updateVideoDetails(metadata);
        }

        $("#video_electronic_media").attr("src","https://www.youtube.com/embed/"+youtube_id+"?autoplay=1&enablejsapi=1&vq=large&rel=0&autohide=1&controls=1&iv_load_policy=3&theme=light&color=white&showinfo=0");
      });

      $(".play_video_popup").click(function(){
        $('html, body').css('overflowY', 'hidden');
        $("#video_popup").fadeIn();
        $(".play_video").removeClass("playing");
        youtube_id = $(this).data('youtube');
        $("#video_popup iframe").attr("src","https://www.youtube.com/embed/"+youtube_id+"?autoplay=1&enablejsapi=1&vq=large&rel=0&autohide=1&controls=1&iv_load_policy=3&theme=light&color=white&showinfo=0");
        onYouTubeIframeAPIReady();
      });

      $(document).on('click', ".news_thumb .play_video_slide", function() {
          $('html, body').stop().animate({
            scrollTop: $("#videos_main").offset().top - 130
          });
      });
     /* $(".news_thumb .play_video_slide").click(function(){
        $('html, body').stop().animate({
          scrollTop: $("#videos_main").offset().top - 130
        });
      });*/

      // $(".play_video_slide").click(function(){
      $(document).on('click', ".play_video_slide", function() {
        element = $(this).data('element');
        youtube_id = $(this).data('youtube');
        metadata = $(this).data('metadata');
        console.log(metadata);

        // alert(metadata);

        if(metadata) {
          updateVideoDetails(metadata);
        }

        $(".video_slide").removeClass('shown');
        $("#"+element+"_video").addClass("shown");
        $("iframe").attr("src","");
        $("#"+element+"_video iframe").attr("src","https://www.youtube.com/embed/"+youtube_id+"?autoplay=1&enablejsapi=1&vq=large&rel=0&autohide=1&controls=1&iv_load_policy=3&theme=light&color=white&showinfo=0");
        // onYouTubeIframeAPIReady();
      });

      function updateVideoDetails(metadata) {
          $('.vid-thumbnail').attr("src", metadata.thumbnail_path);
          $('.vid-title').html(metadata.video_title);
          $('.vid-short-desc').html(metadata.short_description);
          $('.vid-channel').html(metadata.source_channel+' &nbsp;&nbsp;•&nbsp;&nbsp; '+metadata.formated_publish_date);
          $('.vid-youtube').data('youtube', metadata.youtube_link);
          $('.vid-youtube').data('metadata', metadata);

          window.history.pushState('', '', metadata.video_detail_url);
      }

      $('#videoYearsSelectbox').on('change', function () {
        var val = $(this).find('option:selected').val();
        videos_slider.html("<div style='text-align:center;'><image src='"+site_url+"/public/images/ajax-loader.gif'></div>");
        $.get(site_url+'/ajax/videos/'+val, function(response) {
            videos_slider.trigger('destroy.owl.carousel');
            videos_slider.html(response.html);
            videos_slider.owlCarousel({
              loop: false,
              rewind: true,
              margin:0,
              nav:true,
              items:1,
              stagePadding: 50,
              video:true,
              autoplay:true,
              autoplayTimeout: 5000,
              dots: false,
              responsive:{
                  0:{
                      dots: false
                  },
                  1000:{
                      dots: false
                  }
              }
          });
        }, "json");
      });

      $(".close_slide_video").click(function(){
        $(".video_slide").removeClass('shown');
        $(".video_slide iframe").attr('src', '');
      });


      $(".close_video").click(function(){
        $(".play_video").removeClass("playing");
        $(".youtube_player").removeClass('playing');
        $(".youtube_bg").removeClass('playing');
        $("iframe").attr("src","");
        $(this).fadeOut();
        onYouTubeIframeAPIReady();
      });

      $("#close_popup").click(function(){
        $('html, body').css('overflowY', 'auto');
        $(".play_video").removeClass("playing");
        $(".youtube_player").removeClass('playing');
        $(".youtube_bg").removeClass('playing');
        $("iframe").attr("src","");
        $("#video_popup").fadeOut();
        onYouTubeIframeAPIReady();
      });


      /*$(".mainheader li").hover(function(){
        $(this).find("ul").fadeIn();
      }, function(){
        $(this).find("ul").delay(1000).fadeOut(0);
      });*/

      $(".mainheader li.has_sub_menu").hover(function(){
        $(".mainheader li ul").clearQueue();
        $(".mainheader li ul").fadeOut(0);
        $(this).find("ul").fadeIn();
      }, function(){
        $(".mainheader li ul").clearQueue();
        $(this).find("ul").delay(1000).fadeOut(0);
      });



      $("#godrej_group_link").click(function(){
        if ($(this).hasClass("change")) {
          $("#godrej_group_menus").slideToggle();
          $(".topspace55").animate({ height: '55px' });
          $(this).toggleClass("change");
          $(".menu ul li ul").removeClass('global_menu_open');
          return false;
        }
        $("#godrej_group_menus").slideToggle();
        $(this).toggleClass("change");
        $(".topspace55").animate({ height: '241px' });
        $(".menu ul li ul").addClass('global_menu_open');
      });

      $("#godrej_group_link_mo").click(function(){
        if ($(this).hasClass("change")) {
          $("#global_menus_mo").slideToggle();
          $(this).toggleClass("change");
          return false;
        }
        $("#global_menus_mo").slideToggle();
        $(this).toggleClass("change");
      });


      $(document).click(function(e){
        if( $('#search_popup').css('display')=='block') {
          if($(e.target).is('.mainheader div, .mainheader form, .mainheader .close, .mainheader input')) {
            return false;
          }
          else {
            // alert("Call");
            $("#search_popup").fadeOut();
          }
        }
      });

    $(".search").click(function(){
        $("#search_popup").fadeIn();
        return false;
    });
    $(".search_mo").click(function(){
        $("#search_popup_mo").fadeIn();
        return false;
    });
    $(".close").click(function(){
        $("#search_popup").fadeOut();
        $("#search_popup_mo").fadeOut();
    });

    $(".menu_icon").click(function(){
        if ($(this).hasClass("menu_active")) {
          $("#Mobile_Menu").fadeOut();
          $(".search_mo").fadeIn();
          $(this).removeClass('menu_active');
          return false;
        }
        $(this).toggleClass('menu_active');
        $("#Mobile_Menu").fadeIn();
        $(".search_mo").fadeOut();
    });


  if ($(".visible-xs").is(":visible")) {
    $(".arrow_client").click(function(){
      $(".client_box").find(".client_desc").animate({ opacity: 0 }, 200);
      $(".client_box").find(".arrow_client").animate({ opacity: 0 }, 200);
      return false;
    });
    $(".client_box").click(function(){
      $(".client_box").find(".client_desc").animate({ opacity: 0 }, 200);
      $(".client_box").find(".arrow_client").animate({ opacity: 0 }, 200);
      $(this).find(".client_desc").animate({ opacity: 1 }, 200);
      $(this).find(".arrow_client").animate({ opacity: 1 }, 200);
    });
  }


$("#disclaimer .arrow-popup-close").click(function(){
  $("#disclaimer").fadeOut();
});


  $(document).on('click', ".benefit_link", function() {
      href = $(this).data("href");
      $('html, body').stop().animate({
        scrollTop: $("#"+href).offset().top - 160
      });
  });



  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if(event.data === 0) {
      // alert('Finished');
      // news_slider.trigger('play.owl.autoplay',[8000]);
      if ($('#news_slider').length) {
        news_slider.trigger('play.owl.autoplay',[8000]);
      }
      if ($('.benefits_slider').length) {
        benefits_slider.trigger('play.owl.autoplay',[8000]);
      }
    }
    if(event.data === 1) {
      // alert('Playing');
      // news_slider.trigger('stop.owl.autoplay');
      if ($('#news_slider').length) {
        news_slider.trigger('stop.owl.autoplay');
      }
      if ($('.benefits_slider').length) {
        benefits_slider.trigger('stop.owl.autoplay');
      }
    }
    if(event.data === 2) {
      // alert('Paused');
      // news_slider.trigger('play.owl.autoplay',[8000]);
      if ($('#news_slider').length) {
        news_slider.trigger('play.owl.autoplay',[8000]);
      }
      if ($('.benefits_slider').length) {
        benefits_slider.trigger('play.owl.autoplay',[8000]);
      }
    }
  }




  if ($('.business_slider').length) {
    var business_slider = $('.business_slider');
    
    business_slider.owlCarousel({
        loop: false,
        margin:0,
        nav:false,
        dots: true,
        items: 4,
        slideBy: 4,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                dots: true,
                items: 3,
                slideBy: 4,
            },
            1000:{
                dots: true,
                items: 4,
                slideBy: 4
            }
        }
    });
  }


});


function onYouTubeIframeAPIReady() {
    var $ = jQuery;
    var players = [];
    $('iframe').filter(function() {
        return this.src.indexOf('https://www.youtube.com/') == 0
    }).each(function(k, v) {
        if (!this.id) {
            this.id = 'embeddedvideoiframe' + k
        }
        players.push(new YT.Player(this.id, {
            events: {
                'onStateChange': function(event) {
                    if (event.data == YT.PlayerState.PLAYING) {
                        $.each(players, function(k, v) {
                            if (this.getIframe().id != event.target.getIframe().id) {
                                $('#' + this.getIframe().id)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
                            }
                        });
                    }
                }
            }
        }))
    });
}


function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop - 150 + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}