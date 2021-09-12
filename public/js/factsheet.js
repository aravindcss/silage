$(window).on("load", function(){
	$('html,body').animate({ scrollTop: 0 }, 400);
	$(".fixed_elmnt").fadeOut(0);
	// $('#gcpl').fadeIn();
});


	$(document).ready(function(){

		/*$('.counter').counterUp({
		  delay: 50,
		  time: 4000
		});*/


		var hasBeenChanged = false;


		new fullpage('#fullpage', {
			scrollBar: true,
			licenseKey: 'F375E67C-7AFC4AA7-AB3778DD-77B4DD14',
			// easingcss3:"ease-in-out",
			slidesNavigation: false,
			scrollingSpeed: 800,
			autoScrolling:true,
			fitToSection:true,

			// dragAndMove: true,
			// dragAndMoveKey: 'Z29kcmVqY3AuY29tXzFqblpISmhaMEZ1WkUxdmRtVT1FSUM=',

			// scrollOverflow: true,

			css3: false,

			/*afterRender: function(){
				$('#gcpl').delay(1100).fadeIn();
			},*/

			onLeave: function(origin, destination, direction){
				console.log("Index : " + origin.index + ", Direction : " + direction);

				if (origin.index == 0 && direction == "down") {
					$('#factsheet_count').delay(3000).fadeIn(0);
					$('#gcpl').delay(3000).fadeOut(0);
					$('.fact_num_full').delay(3000).fadeOut(0);
					// $('#factsheet_count').animate({ top: "0px" }, 800);
					if (!$("#factsheet_count").hasClass('loaded')) {
						$('.counter').counterUp({
							delay: 50,
							time: 2000
						});
						$("#factsheet_count").addClass('loaded');
					}
				}

				if (origin.index == 1 && direction == "up") {
					$('.fact_num_full').fadeIn(0);
					$('#gcpl').fadeIn(0);
					$('#factsheet_count').fadeOut(0);
					/*$('#factsheet_count').animate({ top: "100vh" }, 800, function(){
						$('#factsheet_count').fadeOut(0);
					});*/
				}

				if (origin.index == 2 && direction == "up") {
					$('.fact_num_full').fadeOut(0);
					$('#gcpl').delay(1200).fadeIn(0);
					$('#factsheet_count').fadeIn(0);
					$('#factsheet_count').animate({ top: "0vh" }, 0);
					/*$('#gcpl_123_years').animate({ top: "100vh" }, 800, function(){
						$('#gcpl_123_years').fadeOut(0);
					});*/
				}

				if (origin.index == 1 && direction == "down") {
					/*$('#gcpl_123_years').fadeIn(0);
					$('#gcpl_123_years').animate({ top: "0px" }, 800);
					$('#gcpl').fadeOut(0);
					$('#factsheet_count').delay(1300).fadeOut(0);
					$('#factsheet_count').delay(1300).animate({ top: "100vh" }, 0, function(){
						$('#gcpl_123_years .wow').removeClass('wow');
					});*/
					$('.fact_num_full').delay(1000).fadeIn(0);
				}

				if (origin.index == 2 && direction == "down") {
					$('#factsheet_count').fadeOut(0);
					$('#gcpl').fadeOut(0);
					// $('#gcpl_123_years').fadeOut(0);
					// $('#gcpl_123_years').animate({ top: "100vh" }, 0);					
					$("#our_purpose_container").delay(1400).fadeIn(0);
					$("#our_purpose_container").addClass('topper');
					
					$(".our_purpose_full").delay(1400).fadeOut(0);

				}

				if (origin.index == 3 && direction == "down") {
					$("#our_purpose_container").removeClass('topper');
					$("#our_purpose_container .hidden_txt").fadeIn();
					$("#our_purpose_container .to_be_hidden").fadeOut();
					$("#our_purpose_container .to_be_faded").animate({ opacity: 0.3 });
					$("#btn_watch_purpose").animate({ opacity: 0 });
					$("#btn_watch_purpose_mo").animate({ opacity: 0 });
				}

				if (origin.index == 3 && direction == "up") {
					$('#gcpl_123_years').delay(1400).fadeIn(0);
					$('#gcpl_123_years').animate({ top: "0px" }, 0);
					$("#our_purpose_container").fadeOut(0);
					$("#our_purpose_container .hidden_txt").fadeOut();
					$("#our_purpose_container .to_be_hidden").fadeIn();
					$("#our_purpose_container .to_be_faded").animate({ opacity: 1 });
					$("#btn_watch_purpose").animate({ opacity: 1 });
					$("#btn_watch_purpose_mo").animate({ opacity: 1 });
				}

				if (origin.index == 4 && direction == "down") {
					// $("#our_purpose_container .to_be_hidden_values").slideUp(600);
					// $("#our_purpose_container .to_be_shown_values").fadeIn();
					// $("#our_purpose_container .to_be_fadedin_values").animate({ opacity: 1 });
					$("#our_values_container").fadeIn();
					$(".our_purpose_full_02").delay(1500).animate({ opacity: 1 }, 0);
				}

				if (origin.index == 5 && direction == "down") {
					$("#our_values_container").fadeOut(0);
					$("#our_purpose_container").fadeOut(0);
					if (!$("#strong_portfolio").hasClass('loaded')) {
						$("#strong_portfolio").addClass('loaded');
						$("#strong_portfolio").delay(2000).fadeIn(0);
						$(".portfolio").delay(2000).fadeOut(400);

					} else {
						$("#strong_portfolio").delay(800).fadeIn();
					}
				}

				if (origin.index == 4 && direction == "up") {
					$("#our_purpose_container").addClass('topper');
					$("#our_purpose_container .hidden_txt").fadeOut();
					$("#our_purpose_container .to_be_hidden").fadeIn();
					$("#our_purpose_container .to_be_faded").animate({ opacity: 1 });
					$("#btn_watch_purpose").animate({ opacity: 1 });
					$("#btn_watch_purpose_mo").animate({ opacity: 1 });
				}

				if (origin.index == 5 && direction == "up") {
					/*$("#purpose_logos").fadeOut();
					$("#txt_to_live, #title_values").fadeIn();
					$("#value_left_hide, #purpose_desc_btn").fadeIn();
					$("#our_purpose_container #title_purpose").fadeIn();
					$("#our_purpose_container #title_purpose").animate({ opacity: 0.3 }, 800);
					$("#our_purpose_container #title_our").animate({ opacity: 0.3 }, 800);
					$("#our_purpose_container #purpose_desc").animate({ opacity: 0.3 }, 800);
					$("#our_purpose_container #purpose_space").fadeIn();
					$("#our_purpose_container #purpose_top_space").slideDown();
					$("#explore_value").fadeOut();*/
					$("#our_values_container").fadeOut();
				}

				if (origin.index == 2 && direction == "up") {
					$("#our_purpose_container").fadeOut(0);
				}

				if (origin.index == 6 && direction == "down") {

					$('.product_full').delay(2100).animate({opacity: 1}, 0);

				    if(window.matchMedia("(max-width: 767px)").matches){
				        // The viewport is less than 768 pixels wide
				        // alert("This is a mobile device.");
						$("#product_portfolio").fadeIn(0);
						$("#product_portfolio .bg").animate({
							height: "100vh"
						}, 1000, function(){
							if (!$("#product_02").hasClass('loaded')) {
								$("#product_02").addClass('loaded');
								$("#product_02 .animated").addClass('fadeInUp');
							}
							$("#product_container").fadeIn(0);
						});
				    } else{
				        // The viewport is at least 768 pixels wide
				        // alert("This is a tablet or desktop.");
						$("#product_portfolio").fadeIn(0);
						$("#product_portfolio .bg").animate({
							width: "100%"
						}, 1000, function(){
							if (!$("#product_02").hasClass('loaded')) {
								$("#product_02").addClass('loaded');
								$("#product_02 .animated").addClass('fadeInUp');
							}
							$("#product_container").fadeIn(0);
						});
				    }
				}

				if (origin.index == 7 && direction == "up") {

				    if(window.matchMedia("(max-width: 767px)").matches){
						$("#product_container").delay(300).fadeOut();
						$("#product_portfolio .bg").animate({
							height: "0vh"
						}, 1000, function(){
							$("#product_portfolio").fadeOut(0);
						});

				    } else{
						$("#product_container").delay(300).fadeOut();
						$("#product_portfolio .bg").animate({
							width: "0%"
						}, 1000, function(){
							$("#product_portfolio").fadeOut(0);
						});
				    }
				}

				if (origin.index == 6 && direction == "up") {
					$("#strong_portfolio").fadeOut(0);
					$("#our_values_container").delay(1000).fadeIn(0);
					$(".our_purpose_full_02").delay(1000).animate({ opacity: 0 }, 0);
					$("#our_purpose_container").delay(1200).fadeIn(0);
				}

				if (origin.index == 7 && direction == "down") {
					$("#product_container").fadeOut(0);
					$("#product_portfolio").fadeOut(0);
					$("#strong_portfolio").fadeOut(0);
				}

				if (origin.index == 8 && direction == "up") {
					$("#strong_portfolio").delay(800).fadeIn();
					$("#product_container").delay(800).fadeIn(0);
					$("#product_portfolio").delay(800).fadeIn(0);
				}

				

				if (origin.index == 9 && direction == "down") {

					$("#philosophy_boxes").addClass('topper');

					$("#philosophy_boxes").delay(800).fadeIn();
					$("#philosophy_01").delay(800).animate({
						top: "0px"
					}, 500);

					$("#philosophy_02").delay(1200).animate({
						top: "0px"
					}, 500);

					$("#philosophy_03").delay(1600).animate({
						top: "0px"
					}, 500, function(){
						$("#philosophy_boxes .hide_btn").animate({ opacity: 1 });
					});

				}

				if (origin.index == 10 && direction == "down") {
					$("#philosophy_boxes").fadeOut();
					$("#its_core_title").delay(2500).animate({ opacity: 1 });
				}

				if (origin.index == 10 && direction == "up") {
					$("#philosophy_boxes").fadeOut();
					$("#philosophy_01").animate({
						top: "100vh"
					}, 500);
					$("#philosophy_02").animate({
						top: "100vh"
					}, 500);
					$("#philosophy_03").animate({
						top: "100vh"
					}, 500);
					$("#philosophy_boxes .hide_btn").animate({ opacity: 1 });
				}


				if (origin.index == 11 && direction == "up") {
					$("#philosophy_boxes").delay(800).fadeIn();
				}

				if (origin.index == 12 && direction == "up") {
					$("#sustainability_boxes").removeClass('topper');
					$("#sustainability_01").animate({
						top: "100vh"
					}, 500);
					$("#sustainability_02").animate({
						top: "100vh"
					}, 500);
					$("#sustainability_03").animate({
						top: "100vh"
					}, 500);
					$("#sustainability_boxes").fadeOut();
					$("#sustainability_boxes .hide_btn").animate({ opacity: 0 });
				}

				if (origin.index == 13 && direction == "up") {
					$("#sustainability_boxes").delay(800).fadeIn();

				}

				if (origin.index == 11 && direction == "down") {
					$("#sustainability_boxes").addClass('topper');
					$("#sustainability_boxes").fadeIn();
					$("#sustainability_01").delay(800).animate({
						top: "0px"
					}, 500);
					$("#sustainability_02").delay(1200).animate({
						top: "0px"
					}, 500);
					$("#sustainability_03").delay(1600).animate({
						top: "0px"
					}, 500, function(){
						$("#sustainability_boxes .hide_btn").animate({ opacity: 1 });
					});
				}

				if (origin.index == 12 && direction == "down") {
					$("#sustainability_boxes").fadeOut();
				}


			}


		});



		var op_touch;
		var india_touch;
		var indo_touch;
		var africa_touch;
		var latam_touch;
		var philosophy_touch;
		var sustainability_touch;
		
		$("#our_purpose_container").bind('touchstart', function (e){
		   op_touch = e.originalEvent.touches[0].clientY;
		   // console.log(fullpage_api.getActiveSection());
		});

		$("#our_purpose_container").bind('touchend', function (e){
		   var te = e.originalEvent.changedTouches[0].clientY;
		   var index = fullpage_api.getActiveSection().index;
		   // alert(index);
		   if(op_touch > te+5){
		      // alert("Down");
		      fullpage_api.moveTo(5, 1);
		   } else if(op_touch < te-5){
		      // alert("Up");
		      fullpage_api.moveTo(3, 1);

		   }
		});

		$("#india").bind('touchstart', function (e){
		   india_touch = e.originalEvent.touches[0].clientY;
		});
		$("#india").bind('touchend', function (e){
		   var te = e.originalEvent.changedTouches[0].clientY;
		   if(india_touch > te+5){
		      fullpage_api.moveTo(13, 1);
		   } else if(india_touch < te-5){
		      fullpage_api.moveTo(11, 1);
		   }
		});

		$("#indonesia").bind('touchstart', function (e){
		   indo_touch = e.originalEvent.touches[0].clientY;
		});
		$("#indonesia").bind('touchend', function (e){
		   var te = e.originalEvent.changedTouches[0].clientY;
		   if(indo_touch > te+5){
		      fullpage_api.moveTo(14, 1);
		   } else if(indo_touch < te-5){
		      fullpage_api.moveTo(12, 1);
		   }
		});

		$("#africa").bind('touchstart', function (e){
		   africa_touch = e.originalEvent.touches[0].clientY;
		});
		$("#africa").bind('touchend', function (e){
		   var te = e.originalEvent.changedTouches[0].clientY;
		   if(africa_touch > te+5){
		      fullpage_api.moveTo(15, 1);
		   } else if(africa_touch < te-5){
		      fullpage_api.moveTo(13, 1);
		   }
		});

		$("#latin-america").bind('touchstart', function (e){
		   latam_touch = e.originalEvent.touches[0].clientY;
		});
		$("#latin-america").bind('touchend', function (e){
		   var te = e.originalEvent.changedTouches[0].clientY;
		   if(latam_touch > te+5){
		      fullpage_api.moveTo(16, 1);
		   } else if(latam_touch < te-5){
		      fullpage_api.moveTo(14, 1);
		   }
		});


		$("#philosophy_boxes").bind('touchstart', function (e){
		   philosophy_touch = e.originalEvent.touches[0].clientY;
		});
		$("#philosophy_boxes").bind('touchend', function (e){
		   var te = e.originalEvent.changedTouches[0].clientY;
		   if(philosophy_touch > te+5){
		      fullpage_api.moveTo(18, 1);
		   } else if(philosophy_touch < te-5){
		      fullpage_api.moveTo(17, 1);
		   }
		});


		$("#sustainability_boxes").bind('touchstart', function (e){
		   sustainability_touch = e.originalEvent.touches[0].clientY;
		});
		$("#sustainability_boxes").bind('touchend', function (e){
		   var te = e.originalEvent.changedTouches[0].clientY;
		   if(sustainability_touch > te+5){
		      fullpage_api.moveTo(21, 1);
		   } else if(sustainability_touch < te-5){
		      fullpage_api.moveTo(19, 1);
		   }
		});










	});