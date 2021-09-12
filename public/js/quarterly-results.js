$(document).ready(function() {

// Quater Updates - Investors page
$('#ddl_QR_years').on('change', function() {
	// AJAX request
	$('#QR_sectionDiv').html("<div style='text-align:center;'><img src='"+site_url+"/public/images/ajax-loader.gif' class='all_over_loader'></div>");
	ajaxQuaterUpdatesByYear();
});

// Quater Updates - Investors page
$('#ddl_QR_quarters').on('change', function() {
	// AJAX request
	$('#QR_sectionDiv').html("<div style='text-align:center;'><img src='"+site_url+"/public/images/ajax-loader.gif' class='all_over_loader'></div>");
	ajaxQuaterUpdatesByQuarter();
});

// AJAX request - Quater Updates - Investors page Year
function ajaxQuaterUpdatesByYear() {
	var fyear = $("#ddl_QR_years").val();
	var quarter = $("#ddl_QR_quarters").val();
	$.ajax({
		url: site_url+'/ajax/quarterly-updates-year',
		type: 'GET',
		data: { fyear : fyear, quarter : quarter},
		dataType: 'json',
		success: function(response){
			//console.log(response.cur_quarter);
			var quarters = response.quarters;
			var i;
			$("#ddl_QR_quarters").html("");
			$("#ddl_QR_quarters").selectBox('refresh');
			for (i = 0; i < quarters.length; i++)
			{
				$('#ddl_QR_quarters').append( '<option value="'+quarters[i].quarter_name+'">'+quarters[i].quarter_name+'</option>' );
			}
			$('#ddl_QR_quarters option').last().attr('selected','selected');
			$("#ddl_QR_quarters").selectBox('refresh');
			$("#QR_sectionDiv").html(response.html);
		}
	});
}

// AJAX request - Quater Updates - Investors page Quarter
function ajaxQuaterUpdatesByQuarter() {
	var fyear = $("#ddl_QR_years").val();
	var quarter = $("#ddl_QR_quarters").val();
	$.ajax({
		url: site_url+'/ajax/quarterly-updates-quarter',
		type: 'GET',
		data: { fyear : fyear, quarter : quarter},
		dataType: 'json',
		success: function(response){
			//console.log(response.quarters);
			//console.log(response.cur_quarter);
				$("#QR_sectionDiv").html(response.html);
			}
		});
}
	
});
