$(document).ready(function() {

    $(".investors_selectbox").selectBox({
        keepInViewport: false,
        mobile: true,
    });
    
    $('select.f_year').on('change', function() {
        var fyear = $(this).val();

        $('#SAsectionDiv').html("<div style='text-align:center;'><img src='" + site_url + "/public/images/ajax-loader.gif' class='all_over_loader'></div>");

        $.get(site_url+'/ajax/get-subsidiaries-accounts/', { fyear: fyear }, function(data) 
        {
            $("#SAsectionDiv").html(data.html);
            
        }, "json");
    });
});
