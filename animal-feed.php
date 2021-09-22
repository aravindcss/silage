<!DOCTYPE html>
<html>

<!-- Mirrored from www.godrejagrovet.com/businesses/animal-feed by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 02 Sep 2021 09:51:14 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <title>Nutri Corn Silage - Products</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
	<meta name="format-detection" content="telephone=no">

    <meta name="keywords" content="Godrej Animal Feeds business, Largest Compound feed manufacturer in India, Nadir Godrej Centre for Animal Research and Development in Nashik, animal husbandry research centre, Cattle Feed, Cattle feed in India, Poultry Feed, Poultry Feed in India, Aqua Feed, Aqua Feed in India, Specialty Feed, Specialty Feed in India, Indian feeding practices, increase milk production, better cattle reproductive ability, Broiler Feeds, Layer Feeds, optimising the egg production, Indian Aquaculture industry, Aqua Feed products, fish and shrimps reared in Indian farming conditions, better pond management, increase wool production" />
    
    <meta name="description" content="At GAVL, our Animal Feed business aims to provide solutions to India’s protein crisis with our diverse product portfolio in Cattle, Poultry, Aqua and Specialty Feed." />

    <link rel="shortcut icon" type="image/ico" href="public/favicon.ico" />

    <link rel="stylesheet" type="text/css" href="public/css/column.css">
    	<link rel="stylesheet" type="text/css" href="public/css/owl.carousel.min.css">
	<link rel="stylesheet" type="text/css" href="public/css/common.css">
	<link rel="stylesheet" type="text/css" href="public/css/header.css">
	<link rel="stylesheet" type="text/css" href="public/css/footer.css">
	<link rel="stylesheet" type="text/css" href="public/css/animate.css">
	<link rel="stylesheet" type="text/css" href="public/css/sustainability_common.css">
	<link rel="stylesheet" type="text/css" href="public/css/csr.css">
	<link rel="stylesheet" type="text/css" href="public/css/animal-feed.css">

    

    <!-- analytics code here -->
     <script>
        var hostname = location.hostname;
        //console.log("Outside : "+hostname);
        if(hostname == "www.godrejagrovet.com" || hostname=="godrejagrovet.com"){
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','../../www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-66560190-2', 'auto');
            ga('require', 'displayfeatures');
            ga('send', 'pageview');
        }
    </script>

    
    <script type="text/javascript">
        var site_url = "index.php";
    </script>
</head>

<body>
<?php include('header.php');?>
<?php include('mobile_nav.php');?>

<section class="seperator">&nbsp;</section>

<!-- Product start -->

				<?php

				include('db_connection.php');
                $sql = $conn->prepare("select * from products");
                $sql->execute();
                $result = $sql->get_result();
                while ($row = $result->fetch_assoc()) {
                        
                        $id = $row['id'];
                        $pname = $row['Name'];
                        $pdescription = $row['Description'];
                        $pimage = $row['Image'];
                        $pprice = $row['Price'];
                        $pdescription2 = $row['Description2'];
	
	                ?>


<section class="fw">
	<div class="container title_desc_left">
		<div class="row wow animated fadeInUp">
			<div class="col-md-12 col-xs-12 pd">
				<div class="initiatives_box_container fw" id="Livelihood">
					
					<div class="initiatives_box pr fw">
						<div class="seperator fw hidden-xs">&nbsp;</div>
						<div class="col-md-7 col-xs-12 pd">
							<div class="fw txc visible-xs">
								<h3><?php echo $pname;?></h3>
							</div>
							<img src="admin/assets/images/products/<?php echo($pimage);?>" alt="Livelihood" width="100%" class="fw">
						</div>
						<div class="fw fwpx txcm pxy_mo">
							<div class="col-md-5 col-md-offset-7">
								<div class="col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
									<h3 class="hidden-xs"><?php echo $pname;?></h3>
									<p class="blk60"><?php echo $pdescription; ?></p>
									<!-- <a href="javascript:void(0);" class="learnmore show_initiatives pr" rel="Livelihood_Data" data-parent="Livelihood">More<span class="arrow-down-close"></span></a> -->
									<button class="btn-grad"><a href="customer_address.php?id=<?php echo "$id";?>" style="display: block;">Order now</a></button>
								</div>
							</div>
						</div>
						<div class="seperator fw hidden-xs">&nbsp;</div>
						<div class="seperator_right left hidden-xs">&nbsp;</div>
						<div class="seperator_right hidden-xs">&nbsp;</div>
					</div>


					<div class="fw initiatives_boxdesc" id="Livelihood_Data">

						<div class="col-md-10 col-xs-12 col-xs-offset-0">
							<div class="col-md-5 col-xs-12">
								<div class="fw">
									<p class="blk60 txcm"><?php echo "$pdescription2" ?></p>
								</div>
							</div>
							<!-- <div class="col-md-5 col-md-offset-1 col-xs-12">
								<div class="fw">
									<p class="blk60 txcm">We offer a variety of Cattle Feed to enhance milk production, reproductive ability and the overall health of cattle. We also work closely with farmers and offer on-site assistance to help them achieve higher yields.</p>
								</div>
							</div> -->

							<!-- <div class="fw h50 h50m">&nbsp;</div> -->

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<?php  
     }
?>
<!-- Product end -->



<section class="fw" id="our_strategy_csr">
	<div class="fw title_desc_left">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 col-md-8 col-md-offset-2">
					<div class="fw desc txc wow fadeInUp animated">
						<h3 class="animal_page_titles">What is Silage</h3>
					</div>
				</div>
		<!-- <div class="fw h50 h50m">&nbsp;</div> -->
				<div class="col-md-12 col-xs-12">
					<div class="fw desc wow fadeInUp animated">
						<p class="blk60 txcm" style="text-align: justify;">Corn Silage is one of the best green fodders used in the dairy industry across the world. It is a very nutrious animal fodder with 8-9% protein and 3000kcal/kg digestible energy. The quality of corn silage is superior to any available green grass with more dry matter and long shelf life.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="seperator" style="margin-top: -2em;">&nbsp;</section>

<section class="fw" id="our_strategy_csr" style="margin-top: -8em;">
	<div class="fw title_desc_left">
		<div class="container">
			<div class="row">
				<!-- <div class="col-md-8 col-md-offset-2 col-md-8 col-md-offset-2">
					<div class="fw desc txc wow fadeInUp animated">
						<h3 class="animal_page_titles">How we make silage</h3>
					</div>
				</div> -->

		<!-- <div class="fw h50 h50m">&nbsp;</div> -->
	
<div class="container">
	<div class="col-lg-12 col-md-12 col-sm-12" >
<img src="public/images/silage/make-silage.jpg" alt=""  style="margin-top:50px;width:100%;">
</div>
</div>

				
			</div>
		</div>
	</div>
</section>

<section class="seperator">&nbsp;</section>


<section class="fw" id="our_strategy_csr" style="margin-top: -8em;">
	<div class="fw title_desc_left">
		<div class="container">
			<div class="row">
				<!-- <div class="col-md-8 col-md-offset-2 col-md-8 col-md-offset-2">
					<div class="fw desc txc wow fadeInUp animated">
						<h3 class="animal_page_titles">Corn silage Benefits</h3>
					</div>
				</div> -->
		<!-- <div class="fw h50 h50m">&nbsp;</div> -->
					
					<div class="container">
<img src="public/images/silage/silage-benifits.jpg" alt=""  style="margin-top:50px;width:100%;">
					</div>					
				
			</div>
		</div>
	</div>
</section>

<section class="seperator">&nbsp;</section>


<section class="fw" id="our_strategy_csr" style="margin-top: -8em;">
	<div class="fw title_desc_left">
		<div class="container">
			<div class="row">
				<!-- <div class="col-md-8 col-md-offset-2 col-md-8 col-md-offset-2">
					<div class="fw desc txc wow fadeInUp animated">
						<h3 class="animal_page_titles">How to use silage</h3>
					</div>
				</div> -->
		<!-- <div class="fw h50 h50m">&nbsp;</div> -->
				
				<div class="container">
<img src="public/images/silage/use-silage.jpg" alt=""  style="margin-top:50px;width:100%;">
				</div>
			</div>
		</div>
	</div>
</section>


<section class="seperator">&nbsp;</section>

<style type="text/css">
	
         .btn-grad {background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%);}
         .btn-grad {
           
            text-align: center;
            /*text-transform: uppercase;*/
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            /*display: block;*/
            padding: 12px;
            margin-left: 20px;

          }

          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }

          .btn-grad a{
          	color: white;
          	display: block;
          }
          ul li{
          	list-style-type: circle;
          	line-height: 1.5em;
          }
          .howMakeSilage{
          	transition: .3s;
          	border: 1px solid lightgray;
          }
          .howMakeSilage:hover{
          	transition: .5s;
          	box-shadow: 2px 2px 7px 2px lightgray;
          	border-top-left-radius: 30px;
          	border-bottom-left-radius: 30px;
          }
          table{
          	border: 1px solid lightgray;
          	width: 100%;
          	height: auto;
          }
</style>

<!-- <section class="ourstorydib seperator">&nbsp;</section> -->
<?php include('footer.php');?>

<script type="text/javascript" src="public/js/jquery.min.js"></script>
<script type="text/javascript" src="public/js/owl.carousel.min.js"></script>
<script type="text/javascript" src="public/js/wow.min.js"></script>
<script type="text/javascript" src="public/js/common.js"></script>
<!-- <script type="text/javascript" src="https://www.godrejagrovet.com/public/js/people.js"></script> -->

</body>

<!-- Mirrored from www.godrejagrovet.com/businesses/animal-feed by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 02 Sep 2021 09:52:06 GMT -->
</html>