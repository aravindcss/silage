$(document).ready(function() {
    $("select").selectBox({keepInViewport:false,mobile:true});
    if ($("#results_found").length) {
    	// alert("Results Found!");
        $('html, body').stop().animate({
          scrollTop: $("#Press_Release_Boxes").offset().top - 220
        });
    }
});
