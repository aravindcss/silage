$(document).ready(function() {

    $(".investors_selectbox").selectBox({
        keepInViewport: false,
        mobile: true,
    });
    
    $('select.sef_year').on('change', function() {
        var year = $(this).val();
        var type = $(this).data('category');
        var yearSelect = $(this);
        console.log("ddl_" + type + "_month");
        
        $("#" + type + "Section").html("<div style='text-align:center;'><img src='" + site_url + "/public/images/ajax-loader.gif' class='all_over_loader'></div>");
        
        $.get(site_url+'/ajax/shareholding-pattern-months/', { year: year, type: type }, function(data) 
        {
            $('#ddl_' + type + '_month').html(data.months_options).val("").selectBox('refresh').trigger('change');
            
        }, "json");
    });

    $('select.sef_month').on('change', function() {
        var type = $(this).data('category');
        var month = $(this).val();
        var monthSelect = $(this);
        var year = $("." + type + ".sef_year").val();//$("#ddl_pu_years").val();
        
        $("#" + type + "Section").html("<div style='text-align:center;'><img src='"+site_url+"/public/images/ajax-loader.gif' class='all_over_loader'></div>");

        $.get(site_url+'/ajax/shareholding-pattern', {year: year, month: month, type: type }, function(data) 
        {
            $("#" + type + "Section").html(data.html);
        }, "json");
    });
});