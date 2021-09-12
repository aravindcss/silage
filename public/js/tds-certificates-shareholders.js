$(document).ready(function () {

    //File Download Count
    $("#download_btn").click(function () {
        $.get(site_url+'/ajax/tds-certificates-download', function(data) {
        }, 'json');
    });
    
    //Send OTP code
    var validator = $("#form_validation").validate({
        ignore: [],
        submitHandler: submitForm,
    });

    function submitForm(form) {
        $('.section-loader').show();
        var formData = $(form).serialize();
        var action = $(form).attr("action");
        var btnSubmit = $(form).find("input:submit");
        btnSubmit.attr("disabled", true);
        
        $.post(
            action,
            formData,
            function (response) {
                //btnSubmit.val("SUBMIT");
                btnSubmit.attr("disabled", false);

                if(response.status == true)
                {
                    window.location = response.url

                }
                else
                {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $("#msg_note").offset().top
                    }, 500);
                    $("#msg_note").html(response.message);
                    $("#msg_note").show();
                }

                $("#form_validation")[0].reset();
                $('.section-loader').hide();
            },
            "json"
        ).fail(function (response) {
            //btnSubmit.val("SUBMIT");
            btnSubmit.attr("disabled", false);
            $('.section-loader').hide();

            if (response.responseJSON.errors.pan_number) {
                validator.showErrors({
                    pan_number: response.responseJSON.errors.pan_number[0],
                });
            }
        });
    }
    

    //Check OTP Code

    var validator = $("#frmOTPVerification").validate({
        ignore: [],
        submitHandler: submitFormOTPVerification,
    });

    function submitFormOTPVerification(form) {
        $(".section-loader").show();
        var formData = $(form).serialize();
        var action = $(form).attr("action");
        var btnSubmit = $(form).find("input:submit");
        btnSubmit.attr("disabled", true);

        $.post(
            action,
            formData,
            function (response) {
                //btnSubmit.val("SUBMIT");
                btnSubmit.attr("disabled", false);

                console.log(response);

                if (response.status == true) {
                    window.location = response.url;
                } else {
                    $([document.documentElement, document.body]).animate(
                        {
                            scrollTop: $("#msg_note").offset().top,
                        },
                        500
                    );
                    $("#msg_note").html(response.message);
                    $("#msg_note").show();
                }

                $("#frmOTPVerification")[0].reset();
                $(".section-loader").hide();
            },
            "json"
        ).fail(function (response) {
            //btnSubmit.val("SUBMIT");
            $(".section-loader").hide();
            btnSubmit.attr("disabled", false);

            if (response.responseJSON.errors.otp) {
                validator.showErrors({
                    otp: response.responseJSON.errors.otp[0],
                });
            }
        });
    }
    

    //Resend OTP Code

    var validator = $("#frmResendOTPCode").validate({
        submitHandler: submitFormResendOTPCode,
    });

    function submitFormResendOTPCode(form) {
        $(".section-loader").show();
        var formData = $(form).serialize();
        var action = $(form).attr("action");
        var btnSubmit = $(form).find("input:submit");

        $.post(
            action,
            formData,
            function (response) {
                //btnSubmit.val("SUBMIT");
                //btnSubmit.attr("disabled", false);

                if (response.status == true) {
                    window.location = response.url;
                } else {
                    $([document.documentElement, document.body]).animate(
                        {
                            scrollTop: $("#msg_note").offset().top,
                        },
                        500
                    );
                    $("#msg_note").html(response.message);
                    $("#msg_note").show();
                    setTimeout(function(){ btnSubmit.attr("disabled", true)}, 60000);
                }
                $(".section-loader").hide();
            },
            "json"
        ).fail(function (response) {
            //btnSubmit.val("SUBMIT");
            $(".section-loader").hide();
            btnSubmit.attr("disabled", false);
        });
    }
});
