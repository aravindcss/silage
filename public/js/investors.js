$(document).ready(function() {

/*$("#annual_report_yearwise").selectBox({
keepInViewport: false,
mobile: true
});

$("#annual_report_quarterlywise").selectBox({
keepInViewport: false,
mobile: true
});

$("#annual_report_type").selectBox({
keepInViewport: false,
mobile: true
});*/


$(".investors_selectbox").selectBox({
	keepInViewport: false,
	mobile: true
});

$("#investor_faqs_dropdown").change(function(){
	// alert("Call");
	val = $(this).val();
	$(".Investor_FAQ_accord").fadeOut();
	$("#"+val).fadeIn();
});

// Annual Report page
$('#ddl_report_years, #ddl_report_type').on('change', function() {
	// AJAX request
	$('#sectionDiv').html("<div style='text-align:center;'><img src='"+site_url+"/public/images/ajax-loader.gif' class='all_over_loader'></div>");
	ajaxReports();
});

// Quater Updates - Investors page
$('#ddl_qu_years').on('change', function() {
	// AJAX request
	$('#sectionDiv').html("<div style='text-align:center;'><img src='"+site_url+"/public/images/ajax-loader.gif' class='all_over_loader'></div>");
	ajaxQuaterUpdatesByYear();
});

// Quater Updates - Investors page
$('#ddl_qu_quarters').on('change', function() {
	// AJAX request
	$('#sectionDiv').html("<div style='text-align:center;'><img src='"+site_url+"/public/images/ajax-loader.gif' class='all_over_loader'></div>");
	ajaxQuaterUpdatesByQuarter();
});


// Performance Updates page - Year
$('#ddl_pu_years').on('change', function() {
	// AJAX request
	$('#sectionDiv').html("<div style='text-align:center;'><img src='"+site_url+"/public/images/ajax-loader.gif' class='all_over_loader'></div>");
	ajaxPerformanceUpdatesYear();
});
// Performance Updates page - Year
$('#ddl_pu_month').on('change', function() {
	// AJAX request
	$('#sectionDiv').html("<div style='text-align:center;'><img src='"+site_url+"/public/images/ajax-loader.gif' class='all_over_loader'></div>");
	ajaxPerformanceUpdatesYearAndMonth();
});
// Performance Updates page - Year
$('#ddl_pu_category').on('change', function() {
	// AJAX request
	$('#sectionDiv').html("<div style='text-align:center;'><img src='"+site_url+"/public/images/ajax-loader.gif' class='all_over_loader'></div>");
	ajaxPerformanceUpdatesYearAndMonthAndCat();
});

// Dividend Calculator page - Year
$('#ddDcYear').on('change', function() {
	var year = $(this).val();
	var yearSelect = $(this);

	$.get(site_url+'/ajax/dividend-calculator-months/', { year: year}, function(data)
	{
//$("#ddDcMonth").html("");
$('#ddDcMonth').html(data.months_options).selectBox('refresh');
//console.log(data.months_options);
}, "json");
});


});

// AJAX request - Annual Report page
function ajaxReports() {
	var fyear = $("#ddl_report_years").val();
	var type = $("#ddl_report_type").val();
	$.ajax({
		url: site_url+'/ajax/annual-reports',
		type: 'GET',
		data: { fyear: fyear ,type : type},
		dataType: 'json',
		success: function(response){
			//console.log(response.type);
			if(response.type == "sustainability_report")
			{
				if(response.sustainability == false)
				{
					//console.log(response.sustainability);
					$("#ddl_report_type")
					.html('<option value="annual_report">Annual Report</option>')
					.selectBox('refresh');
				}
			}
			else
			{
				$("#ddl_report_type").html("");
				if(response.sustainability == true)
				{
					//console.log(response.sustainability);
					$("#ddl_report_type")
					.html('<option value="annual_report">Annual Report</option><option value="sustainability_report">Sustainability Report</option>')
					.selectBox('refresh');
				}
				else
				{
					//console.log(response.sustainability);
					$("#ddl_report_type")
					.html('<option value="annual_report">Annual Report</option>')
					.selectBox('refresh');
				}
			}

			$('#sectionDiv').html(response.html);
			$(".hideshow").click(function(){
				$(this).toggleClass('active');
				$(".slidediv").slideToggle();
			});
		}
	});
}

// AJAX request - Quater Updates - Investors page Year
function ajaxQuaterUpdatesByYear() {
	var fyear = $("#ddl_qu_years").val();
	var quarter = $("#ddl_qu_quarters").val();
	$.ajax({
		url: site_url+'/ajax/quarterly-updates-year',
		type: 'GET',
		data: { fyear : fyear, quarter : quarter},
		dataType: 'json',
		success: function(response){
			//console.log(response.cur_quarter);
			var quarters = response.quarters;
			var i;
			$("#ddl_qu_quarters").html("");
			$("#ddl_qu_quarters").selectBox('refresh');
			for (i = 0; i < quarters.length; i++)
			{
				$('#ddl_qu_quarters').append( '<option value="'+quarters[i].quarter_name+'">'+quarters[i].quarter_name+'</option>' );
			}
			$('#ddl_qu_quarters option').last().attr('selected','selected');
			$("#ddl_qu_quarters").selectBox('refresh');
			$('#sectionDiv').html(response.html);
		}
	});
}

// AJAX request - Quater Updates - Investors page Quarter
function ajaxQuaterUpdatesByQuarter() {
	var fyear = $("#ddl_qu_years").val();
	var quarter = $("#ddl_qu_quarters").val();
	$.ajax({
		url: site_url+'/ajax/quarterly-updates-quarter',
		type: 'GET',
		data: { fyear : fyear, quarter : quarter},
		dataType: 'json',
		success: function(response){
//console.log(response.quarters);
//console.log(response.cur_quarter);
				$('#sectionDiv').html(response.html);
			}
		});
}

// AJAX request - Performance Updates Page
function ajaxPerformanceUpdatesYear() {
	var fyear = $("#ddl_pu_years").val();
	var month = $("#ddl_pu_month").val();
	var category = $("#ddl_pu_category").val();
	//console.log(site_url+'/ajax/performance-updates-year');
	$.ajax({
		url: site_url+'/ajax/performance-updates-year',
		type: 'GET',
		data: { fyear : fyear, month : month, category : category},
		dataType: 'json',
		success: function(response){
			// console.log('years: '+ response.years);
			// console.log('months: '+ response.months);
			// console.log('categories: '+ response.categories);

			var months = response.months;
			var i;
			$("#ddl_pu_month").html("");
			$('#ddl_pu_month').append( '<option value="">Month</option>');
			$("#ddl_pu_month").selectBox('refresh');
			for (i = 0; i < months.length; i++)
			{
				$('#ddl_pu_month').append( '<option value="'+months[i].month_name+'">'+months[i].month_name+'</option>' );
			}
			$("#ddl_pu_month").selectBox('refresh');

			var categories = response.categories;
			var j;
			$("#ddl_pu_category").html("");
			$('#ddl_pu_category').append( '<option value="">Type</option>');
			$("#ddl_pu_category").selectBox('refresh');
			for (j = 0; j < categories.length; j++)
			{
				$('#ddl_pu_category').append( '<option value="'+categories[j].pk_category_id+'">'+categories[j].news_category+'</option>' );
			}
			$("#ddl_pu_category").selectBox('refresh');

			$('#sectionDiv').html(response.html);
		}
	});
}
// AJAX request - Performance Updates Page
function ajaxPerformanceUpdatesYearAndMonth() {
	var fyear = $("#ddl_pu_years").val();
	var month = $("#ddl_pu_month").val();
	var category = $("#ddl_pu_category").val();
	//console.log(site_url+'/ajax/performance-updates-year-month');
	$.ajax({
		url: site_url+'/ajax/performance-updates-year-month',
		type: 'GET',
		data: { fyear : fyear, month : month, category : category},
		dataType: 'json',
		success: function(response){
			// console.log('years: '+ response.years);
			// console.log('months: '+ response.months);
			// console.log('categories: '+ response.categories);

			var categories = response.categories;
			var i;
			$("#ddl_pu_category").html("");
			$('#ddl_pu_category').append( '<option value="">Type</option>');
			$("#ddl_pu_category").selectBox('refresh');
			for (i = 0; i < categories.length; i++)
			{
				$('#ddl_pu_category').append( '<option value="'+categories[i].pk_category_id+'">'+categories[i].news_category+'</option>' );
			}
			$("#ddl_pu_category").selectBox('refresh');

			$('#sectionDiv').html(response.html);
		}
	});
}
// AJAX request - Performance Updates Page
function ajaxPerformanceUpdatesYearAndMonthAndCat() {
	var fyear = $("#ddl_pu_years").val();
	var month = $("#ddl_pu_month").val();
	var category = $("#ddl_pu_category").val();
	$.ajax({
		url: site_url+'/ajax/performance-updates-year-month-category',
		type: 'GET',
		data: { fyear : fyear, month : month, category : category},
		dataType: 'json',
		success: function(response){
	// console.log('years: '+ response.years);
	// console.log('months: '+ response.months);
	// console.log('categories: '+ response.categories);

			$('#sectionDiv').html(response.html);
			}
		});
}
