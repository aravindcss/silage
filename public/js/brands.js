$(document).ready(function() {

	$('#brands_slider').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots: false,
		items:1,
		autoplay:true,
		autoplayTimeout: 1500,
		animateOut:'fadeOut',
		smartSpeed:0,
		touchDrag  : false,
		mouseDrag  : false
	});

	$('#brands_slider_mobile').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots: false,
		items:1,
		autoplay:true,
		autoplayTimeout: 1500,
		animateOut:'fadeOut',
		smartSpeed:0,
		touchDrag  : false,
		mouseDrag  : false
	});


	/*$('#brands_slider').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dotsContainer: '#landingdots',
		items:1,
		autoplay:true,
		autoplayTimeout: 8000
	});*/


	if ($('#Filter_Innovations').length) {
		$("#Filter_Innovations").selectBox({
			keepInViewport: false,
			mobile: true
		});

	    $('#Filter_Innovations').on('change', function() {
	        var Innovations = $(this).val();
	        // alert(Innovations);
	        $(".innovations_data").fadeOut();
	        $("#"+Innovations).fadeIn();
	    });

	}

	$('#Latest_Ad_Campaigns_Slider').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots: true,
		items:4,
		autoplay:true,
		autoplayTimeout: 5000,
		autoplayHoverPause:true
	});

	$('#categories').multiSelect({
		noneText: 'All categories'
	});
	$('#regions').multiSelect({
		noneText: 'All regions'
	});
	$('#ad_regions').multiSelect({
		noneText: 'All regions'
	});
	
	$('input[type="checkbox"]').ezMark();

	$(".multi-select-menuitem").on("click", function() {
		if ($(this).hasClass("disabled")) {
			return false;
		}
		if($(this).find('.ez-checkbox').hasClass("ez-checked")){
			$(this).removeClass('current');
		}
		else {
			$(this).addClass('current');
		}
		// $(this).addClass('current');
	});

	if(window.Shuffle) {
		var Shuffle = window.Shuffle;
		var jQuery = window.jQuery;
		var handler = '';
		$("#no-brands").hide();

		var brandShuffle = new Shuffle(document.querySelector('.brands-container'), {
			itemSelector: '.brand-item',
			sizer: '.my-sizer-element',
			filterMode: Shuffle.FilterMode.ANY,
			buffer: 1 
		});

		brandShuffle.on(Shuffle.EventType.LAYOUT, function (data) {
			var regionValues = [];
			var catValues = [];
			$("#no-brands").hide();
			if (data.shuffle.visibleItems === 0) {
				$("#no-brands").fadeIn();
			}
			$('.shuffle-item--visible').each(function(index, el) {
				if(jQuery.inArray($(el).data("region"), regionValues) == -1) {
					regionValues.push($(el).data("region"));
				    console.log("NOT in array :::" + $(el).data("region"));
					$('.ez-checkbox input').parent(".ez-checkbox").parent(".multi-select-menuitem").removeClass('disabled');
				} 
				if(jQuery.inArray($(el).data("category"), catValues) == -1) {
					catValues.push($(el).data("category"));
				    console.log("NOT in array :::" + $(el).data("category"));
					$('.ez-checkbox input').parent(".ez-checkbox").parent(".multi-select-menuitem").removeClass('disabled');
				} 

				$('select[name="regions"] option').each(function(index, el) {
					$(el).removeAttr('disabled');
					if(jQuery.inArray($(el).attr("value"), regionValues) == -1) {
						// console.log($(el));
						$(el).attr("disabled", "disabled");
						console.log($(el).attr("value"));
					    $('input[value="'+$(el).attr("value")+'"]').parent(".ez-checkbox").parent(".multi-select-menuitem").addClass('disabled');
					}
				});
				$('select[name="categories"] option').each(function(index, el) {
					$(el).removeAttr('disabled');
					if(jQuery.inArray($(el).attr("value"), catValues) == -1) {
						// console.log($(el));
						$(el).attr("disabled", "disabled");
						console.log($(el).attr("value"));
					    $('input[value="'+$(el).attr("value")+'"]').parent(".ez-checkbox").parent(".multi-select-menuitem").addClass('disabled');
					}
				});
			});


			// if(handler=='categories')
			// {
			// 	$('.shuffle-item--visible').each(function(index, el) {
			// 		$(el).removeAttr('disabled');
			// 		if(jQuery.inArray($(el).data("region"), regionValues) == -1) {
			// 			regionValues.push($(el).data("region"));
			// 		    console.log("NOT in array :::" + $(el).data("region"));
			// 			$('.ez-checkbox input').parent(".ez-checkbox").parent(".multi-select-menuitem").removeClass('disabled');
			// 		    // $('input[value="'+$(el).data("region")+'"]').parent(".ez-checkbox").parent(".multi-select-menuitem").addClass('disabled');
			// 		} 
			// 	});
			// 	$('select[name="regions"] option').each(function(index, el) {
			// 		$(el).removeAttr('disabled');
			// 		if(jQuery.inArray($(el).attr("value"), regionValues) == -1) {
			// 			// console.log($(el));
			// 			$(el).attr("disabled", "disabled");
			// 			console.log($(el).attr("value"));
			// 		    $('input[value="'+$(el).attr("value")+'"]').parent(".ez-checkbox").parent(".multi-select-menuitem").addClass('disabled');
			// 			// $('select[name="regions"] option [value="'+ $(el).attr("value") +'"]').not(this).prop('disabled', true);
			// 			// $('select[name="regions"] .multi-select-container option [value="'+ $(el).attr("value") +'"]').not(this).prop('disabled', true);
			// 		}
			// 	});
			// }
			// else if(handler=='regions')
			// {
			// 	$('.shuffle-item--visible').each(function(index, el) {
			// 		if(jQuery.inArray($(el).data("category"), catValues) == -1) {
			// 			catValues.push($(el).data("category"));
			// 		    console.log("Categories NOT in array :::" + $(el).data("category"));
			// 			$('.ez-checkbox input').parent(".ez-checkbox").parent(".multi-select-menuitem").removeClass('disabled');
			// 		} 
			// 	});
			// 	$('select[name="categories"] option').each(function(index, el) {
			// 		$(el).removeAttr('disabled');
			// 		if(jQuery.inArray($(el).attr("value"), catValues) == -1) {
			// 			$(el).attr("disabled", "disabled");
			// 			//console.log($(el).attr("value"));
			// 		    $('input[value="'+$(el).attr("value")+'"]').parent(".ez-checkbox").parent(".multi-select-menuitem").addClass('disabled');
			// 		} 
			// 	});
			// }
			$('#categories').multiSelect({
				noneText: 'All categories'
			});
			$('#regions').multiSelect({
				noneText: 'All regions'
			});
			handler='';
		});

		jQuery('select.brand-shuffle').on('change', function (evt) {
			var input = evt.currentTarget;
			var values = [];
			var catValues = [];
			var regionValues = [];
			handler = $(input).attr('id');
			$('select[name="categories"]').each(function(index, el) {
				if($(el).val().length > 0) {
					$.each($(el).val(), function(strIndx, strVal) {
						 catValues.push(strVal);
					});
				}
			});
			$('select[name="regions"]').each(function(index, el) {
				if($(el).val().length > 0) {
					$.each($(el).val(), function(strIndx, strVal) {
						 regionValues.push(strVal);
					});
				}
			});
			if (catValues.length == 0 || regionValues.length == 0) {
				values = $.merge(catValues, regionValues);
			} else {
				$.each(regionValues, function(strRegionIndx, strRegionVal) {
					$.each(catValues, function(strCatIndx, strCatVal) {
						values.push(strCatVal+"_"+strRegionVal);
					});
				});
			}

			if (values) {
				brandShuffle.filter(values);
			}
		});
	} 

});
