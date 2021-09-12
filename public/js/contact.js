$(document).ready(function(){
	$(".investors_selectbox").selectBox({
		keepInViewport: false,
		mobile: true
	});
  // $('select_radio').ezMark( [options] );
  $('input[type="radio"').ezMark();

  $("#comments").attr('maxlength', '1000');

  $('textarea').keyup(function() {
	  var maxLength = $(this).data("max");
	  var length = $(this).val().length;
	  var length = maxLength-length;
	  if (length == 1) {
	  	// alert(length);
	  	$(this).parent().find("small label").text("character");
	  }
	  else {
	  	$(this).parent().find("small label").text("characters");
	  }
	  $(this).parent().find("small span").text(length);
	 });

	// $('#category').change(function () {
  //           var val = $(this).val();
  //           if (val == "Investor Relations") {
  //               $('#folioNo').show();
  //               $('#folioNo').addClass('required');
  //           }
  //           else {
  //               $('#folioNo').removeClass('required');
  //               $('#folioNo-error').hide();
  //               $('#folioNo').hide();
  //           }
  // });
  
	var validator = $('#frmContactUs').validate({
	 	ignore: [],
	 	rules: {
	 		phone: {
	 			number: true
	 		},
	 	},
        submitHandler: submitForm
     });

    function submitForm(form) {
        var formData = $(form).serialize();
        var action = $(form).attr('action');
        var btnSubmit = $(form).find('input:submit');

        btnSubmit.attr('disabled', true);
        btnSubmit.val("SENDING...")
        $.post(action, formData, function(response) {
            btnSubmit.val("SEND")
            btnSubmit.attr('disabled', false);
	 			// console.log(response.name);
	 			// console.log(response.email);
	 			// console.log(response.phone);
	 			// console.log(response.gender);
	 			// console.log(response.comments);

            $('#frmContactUs')[0].reset();
            $('input[name="gender"]').prop('checked', false);
            $('select').prop('selected', false);

            $('#form_response').show();
            $('#form_response .inside_page_titles').html(response.message);

        }, "json")
        .fail(function(response) {
            btnSubmit.val("SEND")
            btnSubmit.attr('disabled', false);

            
                // if(response.responseJSON.errors.name) {
                //     validator.showErrors({
                //       "name": response.responseJSON.errors.name[0]
                //     });
                // }

                // if(response.responseJSON.errors.email) {
                //     validator.showErrors({
                //       "email": response.responseJSON.errors.email[0]
                //     });
                // }

                // if(response.responseJSON.errors.phone) {
                //     validator.showErrors({
                //       "phone": response.responseJSON.errors.phone[0]
                //     });
                // }

                // if(response.responseJSON.errors.gender) {
                //     validator.showErrors({
                //       "gender": response.responseJSON.errors.gender[0]
                //     });
                // }

                // if(response.responseJSON.errors.comments) {
                //     validator.showErrors({
                //       "comments": response.responseJSON.errors.comments[0]
                //     });
                // }
            });
        }
});
