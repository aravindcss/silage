$(document).ready(function() {
    $('#financialYearSelectbox').on('change', function() {
        var year = $(this).find('option:selected').val();
        var type = $('#mediaType').val();
        $.get(site_url+'/ajax/media/months/'+year+"/"+type, function(data) {
            $('#monthsSelectbox').html(data.months_options).val("").selectBox('refresh').trigger('change');
        }, "json");
    });

    $('#monthsSelectbox').on('change', function() {
        fetchMediaList();
    });

    function fetchMediaList()
    {
        var year = $('#financialYearSelectbox').find('option:selected').val();
        var month = $('#monthsSelectbox').find('option:selected').val();
        var type = $('#mediaType').val();

        $('#mediaListContent').html("<div style='text-align:center;'><img src='"+site_url+"/public/images/ajax-loader.gif' class='all_over_loader'></div>");

        $.get(site_url+'/ajax/media/list', {year: year, month: month, type: type }, function(data) {
            $('#mediaListContent').html(data.html);
        }, "json");
    }
});
