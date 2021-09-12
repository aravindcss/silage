$(document).ready(function() {	
	$(window).scroll(function() {
	    if ($(window).scrollTop() > 100) {
	    	$(".underline_animation_mask").delay(800).animate({left: '110%'}, 1000);
	    }
	});
});