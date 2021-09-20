
<?php 

session_start();

?>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
.logo{
	font-family: 'Oswald', sans-serif;
	color: white;
	font-size: 3.5em;
}
</style>

<header class="hidden-xs" style="background: orange;">
	<div class="fw topheader">
		<div class="container-fluid">
			<div class="row">
				
				<div class="col-lg-5 col-md-5 col-sm-5">
					<div id="logo" class="txc" style="margin-top: 4px;"><a href="index.php" class="logo">Nutri Corn Silage</a></div>
				</div>
				<div class="col-lg-7 col-md-6">
					<div class="col-lg-6 col-md-6 col-sm-6">
						<h2 style="color: white;float: right; margin-top: 0px;" class="logo">Call</h2>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-12 col-12">
						<p style="color: white;font-size: 1.5em;">Toll Free &nbsp;1&nbsp;800&nbsp;102&nbsp;2386</p>
						<p style="color: white;font-size: 1.5em;">6309132111&nbsp;|&nbsp;333&nbsp;|&nbsp;444&nbsp;|&nbsp;555&nbsp;|&nbsp;666</p>
					</div>
				</div>
			</div>
		</div>

	</div>

	<div class="fw bg_white" id="godrej_group_menus">
		<div class="fw">
			<div class="col_gg_menu">
				<h6 class="black"><a href="index.html">GLOBAL</a></h6>
				<p>You are now on the<br>Global website<br><br></p>
				<p class="blk60">Select the region</p>
			</div>
			<div class="col_gg_menu" id="country_menus">
				<ul>
					<li>
						<a href="javascript:void(0);" data-title="GLOBAL" class="active"><span>GLOBAL</span></a>
					</li>
					<li>
						<a href="http://www.godrejafrica.com/" target="_blank" data-title="AFRICA, USA <br>& MIDDLE EAST"><span class="grey_line">AFRICA, USA <br>& MIDDLE EAST</span></a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="http://www.godrejindonesia.com/" target="_blank" data-title="ASEAN"><span class="grey_line">ASEAN</span></a>
					</li>
					<li>
						<a href="https://www.godrejindiasaarc.com/" target="_blank" data-title="INDIA & SAARC"><span class="grey_line">INDIA & SAARC</span></a>
					</li>
					<li class="child_site" style="padding-top: 0">
						<a href="https://www.godrejindiasaarc.com/" target="_blank" data-title="India"><span class="grey_line">India</span></a>
					</li>
					<li class="child_site">
						<a href="http://www.godrejbangladesh.com/" target="_blank" data-title="Bangladesh"><span class="grey_line">Bangladesh</span></a>
					</li>
					<li class="child_site">
						<a href="http://www.godrejsrilanka.com/" target="_blank" data-title="Sri Lanka"><span class="grey_line">Sri Lanka</span></a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="javascript:void(0);" data-title="LATIN AMERICA" style="cursor: default;">LATIN AMERICA</a>
					</li>
					<li class="child_site" style="padding-top: 0">
						<a href="http://www.godrejargentina.com/" target="_blank" data-title="Argentina"><span class="grey_line">Argentina</span></a>
					</li>
					<li class="child_site">
						<a href="http://www.godrejchile.com/" target="_blank" data-title="Chile"><span class="grey_line">Chile</span></a>
					</li>
				</ul>
				<div id="country_menus_devider">&nbsp;</div>
			</div>
			<div class="col_gg_menu" id="exports_links">
				<h6><a href="https://godrejcp.com/exports/" target="_blank" class="blk60" data-title="EXPORTS">EXPORTS</a></h6>
				<p class="blk60">Explore our products<br>in over 90 countries</p>
				<!-- <div class="menus_devider">&nbsp;</div> -->
			</div><!-- 
			<div class="col_gg_menu" id="godrej_links">
				<h6><a href="https://godrej.com/" target="_blank" class="blk60" data-title="GODREJ">GODREJ</a></h6>
				<p class="blk60">Lorem ipsum dolor,<br>consectetur elit.</p>
			</div> -->
		</div>
	</div>

	<div class="mainheader fw pr header_home">
		<div class="fw">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<nav class="menu txc fw">
						<ul>
							<li class="has_sub_menu">
								<a href="index.php" data-title="Home" >Home</a>
							</li>
							<li class="has_sub_menu">
								<a href="#" data-title="About Us" >About Us</a>
								<ul>
									<li><a href="who-we-are.php" title="Who We Are" >Who We Are</a></li>
									<li><a href="our-story.php" title="Our Story" >Our Story</a></li>
									<!-- <li><a href="know-us/the-godrej-way.html" title="The Godrej Way" >The Godrej Way</a></li> -->
									<!-- <li><a href="board-of-directors.php" title="Board of Directors" >Board of Directors</a></li> -->
									<li><a href="leadership-teams.php" title="Leadership Team">Team</a></li>
									
								</ul>
							</li>
							<li class="has_sub_menu">
								<a href="#" data-title="Businesses" >Businesses</a>
								<ul>
									<li><a href="animal-feed.php" title="Products" >Products</a></li>
									<li><a href="services.php" title="Services" >Services</a></li>
									
								</ul>
							</li>
						
							<li class="has_sub_menu">
								<a href="#">Media</a>
								<ul>
									<li><a href="photos.php" title="Photos">Photos</a></li>
									<li><a href="videos.php" title="Videos">Videos</a></li>
									<li><a href="testimonials.php" title="Testimonials">Testimonials</a></li>
								</ul>
							</li>
							<li class="has_sub_menu">
								<a href="careers.php" data-title="Careers" >Careers</a>
							</li>
							<!-- <li class="has_sub_menu">
								<a href="animal-feed.php" data-title="Careers" >Buy Now</a>
							</li> -->
						</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>

		<div id="search_popup" class="search_popup">
			<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="fw search_form" id="search_form">
												<form action="https://www.godrejagrovet.com/search-results" method="GET">
							<input type="text" value="" name="q" placeholder="What can we help you find?">
						</form>
						<div class="close"></div>
					</div>
				</div>
			</div>
			</div>
		</div>

		<!-- <div id="menu_divider">&nbsp;</div> -->

	</div>
</header>

<style type="text/css">
	.support{
		position: fixed;
		top: 95%;
		left: 95%;
		transform: translate(-95%, -95%);
		z-index: 50;
	}
</style>


<div class="support">
	<a href="https://web.whatsapp.com/"><img src="public/images/whatsup2.jpg" height="50" width="50"></a>
</div>