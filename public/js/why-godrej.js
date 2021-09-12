$(document).ready(function(){

	new fullpage('#fullpage', {
		scrollBar: true,
		licenseKey: 'F375E67C-7AFC4AA7-AB3778DD-77B4DD14',
		normalScrollElements: '#Why_Godrej_12',
		afterLoad: function(origin, destination, direction){
			var loadedSection = this;
			//using index
			if(origin.index == 10 && direction=="down"){
				// alert("Section 11 ended loading");
				fullpage_api.setAutoScrolling(false);
				// fullpage_api.setFitToSection(false);
			}
			if(origin.index == 11 && direction=="up"){
				// alert("Section 11 ended loading");
				// fullpage_api.setAutoScrolling(true);
				// fullpage_api.setFitToSection(true);
			}
		}
		// scrollOverflow: true
	});	


	$(".scroll_to").click(function(){
		to_scroll = $(this).attr("rel");
		$('html, body').animate({
			scrollTop: $("#"+to_scroll).offset().top
		}, 500);
	});
});