$(document).ready(function() {
 
var Bod_mobile_slider = $('#Bod_mobile_slider');

Bod_mobile_slider.children().each( function( index ) {
  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

Bod_mobile_slider.owlCarousel({
        loop: true,
        margin:0,
        nav:false,
        items:1,
        stagePadding: 80,
        dots:false,
        onDragged: callback,
        onChanged: callback
});

function callback(event) {
    // alert("Call");
    $("#mobile_bod_data").fadeOut(400, function(){
        $("#mobile_bod_data").html("");
    });
    $("a.profile_bod").removeClass("shown");
    $("a.arrow-down-close").removeClass("open");
}

function scroll_to_section() {
    scroll_position = Bod_mobile_slider.position().top;
    $('html,body').delay(500).animate({
        scrollTop: scroll_position - 50
    }, 'slow');
}

$(document).on('click', '.owl-item>div', function() {
    $("#bod_hint").remove();  
  if ($(this).parent().find("a.profile_bod").hasClass("shown")) {
    scroll_to_section();
    // alert("Already Shown");
    $("#mobile_bod_data").slideUp(400, function(){
        $("#mobile_bod_data").html("");
    });
    $("a.profile_bod").removeClass("shown");
    $("a.arrow-down-close").removeClass("open");
    return false;
  }
  if ($(this).parent().hasClass("active")) {
    // alert("Call");
    scroll_to_section();
    info = $(this).find("a.profile_bod").attr("rel");
    data = $("#" + info).html();
    $("#mobile_bod_data").html(data);
    $("#mobile_bod_data").slideDown();
    $("a.profile_bod").removeClass("shown");
    $("a.arrow-down-close").removeClass("open");
    $(this).find("a.profile_bod").addClass("shown");
    $(this).find("a.arrow-down-close").addClass("open");
    return false;
  }
  Bod_mobile_slider.trigger('to.owl.carousel', $(this).data('position'));

});

$(document).on('click', '.left_right_directors a', function(){
    pos = $(this).data("position");
    info = $(this).attr("rel");
    scroll_position = Bod_mobile_slider.position().top;
    
    $('html,body').animate({
        scrollTop: scroll_position - 50
    }, 'slow', function(){
        Bod_mobile_slider.trigger('to.owl.carousel', pos);
        // $("div[data-position='"+pos+"']").trigger("click");
        // console.log("div[data-position='"+pos+"']");
        // alert(info);
        data = $("#" + info).html();
        $("#mobile_bod_data").fadeOut().promise().done(function () {
            // alert("Done");
            $("#mobile_bod_data").html(data);
            $("#mobile_bod_data").fadeIn();
            $("a.profile_bod").removeClass("shown");
            $("a.arrow-down-close").removeClass("open");
            $("div[data-position='"+pos+"']").find("a.profile_bod").addClass("shown");
            $("div[data-position='"+pos+"']").find("a.arrow-down-close").addClass("open");
        });
        /*$("#mobile_bod_data").slideUp(0, function(){
            $("#mobile_bod_data").delay(500).html(data);
            $("#mobile_bod_data").delay(500).slideDown(400);
            $("a.profile_bod").removeClass("shown");
            $("a.arrow-down-close").removeClass("open");
            $("div[data-position='"+pos+"']").find("a.profile_bod").addClass("shown");
            $("div[data-position='"+pos+"']").find("a.arrow-down-close").addClass("open");
        });*/

    });

});




    $(document).mouseup(function (e) { 
      if ($(e.target).closest(".boddesc").length === 0 && $(e.target).closest("#Board_of_Directors .col-md-4").length === 0 && $(e.target).closest("#Bod_mobile_slider").length === 0) {
        $(".hiddenrow").slideUp(500, function(){
            $(".hiddenrow").remove();
        });
        $("#mobile_bod_data").slideUp(500, function(){
            $("#mobile_bod_data").html("");
        });
        $(".profile_bod").removeClass("shown");
        $(".profile_bod").removeClass("disabled");
      }
    });

    var row_div_pos = "";

    $('.bod_info_link').click(function() {
        rel = $(this).attr("rel");
        row_div = $(this).parent().parent("div.row");
        row_div_pos = row_div.position().top;
        data = $("#" + rel).html();

		$('html,body').delay(500).animate({
			scrollTop: row_div_pos + 200
		}, 'slow');

        if ($(this).hasClass("shown")) {
        	$(".hiddenrow").slideUp(500, function(){
        		$(".hiddenrow").remove();
        	});
        	$(".profile_bod").removeClass("shown");
            $(".profile_bod").removeClass("disabled");
        	return false;
        }
        if ($(".hiddenrow").length) {
        	$(".profile_bod").removeClass("shown");
            $(".profile_bod").addClass("disabled");
        	$(this).addClass("shown");
        	$(".hiddenrow").slideUp(500, function(){
        		$(".hiddenrow").remove();
				$("<div class='col-md-12 hiddenrow'></div>").insertAfter(row_div).html(data);
				$(".hiddenrow").slideDown(500);
        	});
        	return false;
        }

        $(".profile_bod").addClass("disabled");
        $(this).addClass("shown");
        $("<div class='col-md-12 hiddenrow'></div>").insertAfter(row_div).html(data);
        $(".hiddenrow").slideDown(500);

    });

    $(document).on('click', '.closebtn', function(){

        $(".hiddenrow").slideUp(500, function(){
            $(".hiddenrow").remove();
        });

        if($('#Mobile_Header').is(':visible')) {
            scroll_position = Bod_mobile_slider.position().top;
            $('html,body').animate({
                scrollTop: scroll_position - 50
            }, 'slow');
        }

        $("#mobile_bod_data").slideUp(500, function(){
            // $("#mobile_bod_data").html();
            $("a.profile_bod").removeClass("shown");
            $("a.arrow-down-close").removeClass("open");
        });
        $(".profile_bod").removeClass("shown");
        $(".profile_bod").removeClass("disabled");
    });

});
