$(document).ready(function() {

	/*$('.YearsWiseStory').scrollFix({
		side: 'top',
		topPosition: 64
	});*/

	$(".scroll_to").click(function(){
		$('html, body').animate({
			scrollTop: $("#Year_1897").offset().top
		}, 500);
	});



	/*var our_story_sliders = $('.our_story_sliders');
	if ($('.our_story_sliders').length) {
	  our_story_sliders.owlCarousel({
	          loop: true,
	          margin:0,
	          nav:false,
	          items:1,
	          dots: true,
	          dotsContainer: '.our_story_sliders_dots',
	          autoplay:true,
	          autoplayTimeout: 3500,
	          animateIn: 'fadeIn',
	          animateOut:'fadeOut'
	  });
	}


	var our_story_sliders = $('.our_story_sliders_mo');
	if ($('.our_story_sliders_mo').length) {
	  our_story_sliders.owlCarousel({
	          loop: true,
	          margin:0,
	          nav:false,
	          items:1,
	          dots: true,
	          dotsContainer: '.our_story_sliders_dots_mo',
	          autoplay:true,
	          autoplayTimeout: 3500,
	          animateIn: 'fadeIn',
	          animateOut:'fadeOut'
	  });
	}*/




	var aircareslider = $('#Air_Care_Slider');
	if ($('#Air_Care_Slider').length) {
	  aircareslider.owlCarousel({
	          loop: true,
	          margin:0,
	          nav:false,
	          items:1,
	          dots: true,
	          dotsContainer: '.aircareslider_dots',
	          autoplay:true,
	          autoplayTimeout: 3500,
	          animateIn: 'fadeIn',
	          animateOut:'fadeOut'
	  });
	}

	var aircareslider_mo = $('#Air_Care_Slider_mo');
	if ($('#Air_Care_Slider_mo').length) {
	  aircareslider_mo.owlCarousel({
	          loop: true,
	          margin:0,
	          nav:false,
	          items:1,
	          dots: true,
	          dotsContainer: '.aircareslider_dots_mo',
	          autoplay:true,
	          autoplayTimeout: 3500,
	          animateIn: 'fadeIn',
	          animateOut:'fadeOut'
	  });
	}


	var loudslider = $('#Loud_Slider');
	if ($('#Loud_Slider').length) {
	  loudslider.owlCarousel({
	          loop: true,
	          margin:1,
	          nav:false,
	          items:1,
	          dots: true,
	          dotsContainer: '.loudslider_dots',
	          autoplay:true,
	          autoplayTimeout: 3500,
	          animateIn: 'fadeIn',
	          animateOut:'fadeOut'
	  });
	}


	var loudslider_mo = $('#Loud_Slider_mo');
	if ($('#Loud_Slider_mo').length) {
	  loudslider_mo.owlCarousel({
	          loop: true,
	          margin:1,
	          nav:false,
	          items:1,
	          dots: true,
	          dotsContainer: '.loudslider_dots_mo',
	          autoplay:true,
	          autoplayTimeout: 3500,
	          animateIn: 'fadeIn',
	          animateOut:'fadeOut'
	  });
	}

	var Godrej_soaps_Slider = $('#Godrej_soaps_Slider');
	if ($('#Godrej_soaps_Slider').length) {
	  Godrej_soaps_Slider.owlCarousel({
	          loop: true,
	          margin:1,
	          nav:false,
	          items:1,
	          dots: true,
	          dotsContainer: '.godrej_soaps_slider_dots',
	          autoplay:true,
	          autoplayTimeout: 3500,
	          animateIn: 'fadeIn',
	          animateOut:'fadeOut'
	  });
	}


	var Godrej_soaps_Slider_mo = $('#Godrej_soaps_Slider_mo');
	if ($('#Godrej_soaps_Slider_mo').length) {
	  Godrej_soaps_Slider_mo.owlCarousel({
	          loop: true,
	          margin:1,
	          nav:false,
	          items:1,
	          dots: true,
	          dotsContainer: '.godrej_soaps_slider_dots_mo',
	          autoplay:true,
	          autoplayTimeout: 3500,
	          animateIn: 'fadeIn',
	          animateOut:'fadeOut'
	  });
	}

	var Hygiene_Slider = $('#Hygiene_Slider');
	if ($('#Hygiene_Slider').length) {
	  Hygiene_Slider.owlCarousel({
	          loop: true,
	          margin:0,
	          nav:false,
	          items:1,
	          dots: true,
	          dotsContainer: '.hygiene_slider_dots',
	          autoplay:true,
	          autoplayTimeout: 3500,
	          animateIn: 'fadeIn',
	          animateOut:'fadeOut'
	  });
	}


	var Hygiene_Slider_mo = $('#Hygiene_Slider_mo');
	if ($('#Hygiene_Slider_mo').length) {
	  Hygiene_Slider_mo.owlCarousel({
	          loop: true,
	          margin:0,
	          nav:false,
	          items:1,
	          dots: true,
	          dotsContainer: '.hygiene_slider_dots_mo',
	          autoplay:true,
	          autoplayTimeout: 3500,
	          animateIn: 'fadeIn',
	          animateOut:'fadeOut'
	  });
	}

	new fullpage('#fullpage', {
		scrollBar: true,
		licenseKey: 'F375E67C-7AFC4AA7-AB3778DD-77B4DD14',
		// normalScrollElements: '#Year_2019',
		bigSectionsDestination: top,
		afterLoad: function(origin, destination, direction, anchorLink){
			var loadedSection = this;

			// alert(destination);
			active_slide = fullpage_api.getActiveSection().anchor;

			//using index
			$(".YearsWiseStory a").removeClass("current");
			$(".YearsWiseStory a."+active_slide).addClass("current");
			if(origin.index == 0 && direction=="down"){
      			$(".YearsWiseStory").fadeIn(200);
			}

			console.log(origin.index);
			if(origin.index > 0 && origin.index != 31){
				menu_positin = $(".YearsWiseStory a."+active_slide).position().top;
				var activeItem = $(".YearsWiseStory a.current").parent().index() - 1;
				// console.log( "Index: " + activeItem );
				// console.log(menu_positin);
				$('.YearsWiseStory').animate({
					scrollTop: menu_positin
				});
				$('.YearsWiseStory ul').animate({
					scrollLeft: 43*activeItem
				});
				// $('.YearsWiseStory ul').scrollLeft(58*activeItem);

			}

			// Godrej_soaps_Slider.trigger('stop.owl.autoplay');
			// Godrej_soaps_Slider_mo.trigger('stop.owl.autoplay');

			if(origin.index == 1 && direction=="up"){
      			$(".YearsWiseStory").fadeOut(200);
			}
			if(active_slide == "1922_2"){
				Godrej_soaps_Slider.trigger('to.owl.carousel', 0);
				Godrej_soaps_Slider_mo.trigger('to.owl.carousel', 0);
			    // Godrej_soaps_Slider.trigger('play.owl.autoplay');
			    // Godrej_soaps_Slider_mo.trigger('play.owl.autoplay');
			}
			if(active_slide == "2020"){
				Hygiene_Slider.trigger('to.owl.carousel', 0);
				Hygiene_Slider_mo.trigger('to.owl.carousel', 0);
			} 

			// console.log(active_slide);
			if(active_slide == "2017" || active_slide == "2011_4"){
      			$(".YearsWiseStory").addClass("black_years");
			} else{
				// alert("Call");
      			$(".YearsWiseStory").removeClass("black_years");

			}
		}
		// scrollOverflow: true
	});

  /*var sections = $('.our_story_section'), nav = $('.YearsWiseStory'), nav_height = nav.outerHeight();
   
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    var win_h = $(window).height();
    var win_h_half = win_h / 2;
    console.log(cur_pos);
    sections.each(function() {
      var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();
      if (cur_pos >= top - win_h_half && cur_pos <= bottom - win_h_half) {
      	id = $(this).attr('id');
      	if ( id == "Our_Story_Landing") {
      		$(".YearsWiseStory").fadeOut(200);
      	}
      	else {
      		$(".YearsWiseStory").fadeIn(200);
      	}
      	console.log("Id: "+ $(this).attr('id'));
        nav.find('a').removeClass('current');
        sections.removeClass('current');       
        $(this).addClass('current');
        nav.find('a[rel="'+$(this).attr('id')+'"]').addClass('current');
      }
    });
  });*/

	/*$(".YearsWiseStory a").click(function(){
		year = $(this).attr("rel");
		if ($(this).hasClass("current")) {
			$('html, body').animate({
				// scrollTop: $("#"+year).offset().top-64
				scrollTop: $("#"+year).offset().top
			}, 500);
			return false;
		}

		if (year!="Our_Story_Landing") {
			// alert("No");
			$(".Link_Our_Story_Landing").fadeIn(0);
		}
		if (year=="Our_Story_Landing") {
			// alert("Yes");
			$(".Link_Our_Story_Landing").fadeOut(0);
		}

		$(".YearsWiseStory a").removeClass("current");
		$(this).addClass("current");
		$("#"+year).fadeIn();
		$('html, body').animate({
			// scrollTop: $("#"+year).offset().top-64
			scrollTop: $("#"+year).offset().top
		}, 500);
	});*/


});