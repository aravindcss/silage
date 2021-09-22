

<?php
// error_reporting(0);
session_start();
include("db_connection.php");
$Product_id = $_GET['id'];
// Session checking start
// if (strlen($_SESSION['email']) == 0) {
// ?>
   <script type="text/javascript">
//         alert("Please login your account");
//         setTimeout(function(){
//             window.location.href = "customer_login.php";
//         },0);
//     </script>
 <?php
//  } 
// Session checking end

// $email = $_SESSION['email'];
// $customer = $conn->prepare("select * from customer where email = ?");
// $customer->bind_param("s", $email);
// $customer->execute();
// $result = $customer->get_result();
// $customerresult = $result->fetch_assoc();
// $cust_id = $customerresult['cust_id'];
// Adding new Shipping Address

 if (isset($_POST['submit'])) {

    $name = $_POST["name"];
    $phone_number = $_POST["phone_number"];
    $door_number = $_POST["door_number"];
    $village = $_POST["village"];
    $landmark = $_POST["landmark"];
    $city = $_POST["city"];
    $pincode = $_POST["pincode"];

                // $sql = $conn->prepare("SELECT * FROM `cust_info` WHERE cust_id = ? AND name = ? AND phone_number = ? AND door_number = ? AND village = ? AND landmark = ? AND city = ? AND pincode = ? AND Product_id = ?"); 
                // $sql->bind_param("isssssssi", $cust_id, $name, $phone_number, $door_number, $village, $landmark, $city, $pincode, $Product_id);
                // $sql->execute();
                // $result = $sql->get_result();
                // $row = $result->fetch_assoc();
                // $cust_idd = $row['cust_id'];
                // $Product_idd = $row['Product_id'];
                // $phone_numberr = $row['phone_number'];
                // $namee = $row['name'];
                // $door_numberr = $row['door_number'];
                // $villagee = $row['village'];
                // $landmarkk = $row['landmark'];
                // $cityy = $row['city'];
                // $pincodee = $row['pincode'];

        // if ($cust_idd == $cust_id && $phone_numberr == $phone_number && $namee == $name && $door_numberr == $door_number && $villagee == $village && $landmarkk == $landmark && $cityy == $city && $pincodee == $pincode && $Product_idd == $Product_id) {
        //     # code...
            
        //      $stmts = $conn->prepare("UPDATE `cust_info` SET cust_id = ?, name = ?, phone_number = ?, door_number = ?, village = ?, landmark = ?, city = ?, pincode = ?, Product_id = ? WHERE cust_id = ? AND name = ? AND phone_number = ? AND door_number = ? AND village = ? AND landmark = ? AND city = ? AND pincode = ? AND Product_id = ?");
        //      $stmts->bind_param("isssssssiisssssssi", $cust_id, $name, $phone_number, $door_number, $village, $landmark, $city, $pincode, $Product_id, $cust_id, $name, $phone_number, $door_number, $village, $landmark, $city, $pincode, $Product_id);
        //      $stmts->execute();
        // if($stmts) header('location:payment_option.php');
        // }
    
        // else{

            $stmt = $conn->prepare("INSERT INTO `cust_info`(`name`, `phone_number`, `door_number`, `village`, `landmark`, `city`, `pincode`, `Product_id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->bind_param("sssssssi", $name, $phone_number, $door_number, $village, $landmark, $city, $pincode, $Product_id);
            $stmt->execute();

            if($stmt == true)
            {
             header('location:payment_option.php');
             $_SESSION['Product_id'] = $Product_id;
            }
            else echo "<center>errror</center>";
            // }
 }


 // Confirm Address

if (isset($_POST['confirm_address'])) {
  # code...
        $cust_id = $_POST['cust_id'];
        $phone_number = $_POST['phone_number'];
        $name = $_POST['name'];
        $door_number = $_POST['door_number'];
        $village = $_POST['village'];
        $landmark = $_POST['landmark'];
        $city = $_POST['city'];
        $pincode = $_POST['pincode'];

        $stmts = $conn->prepare("INSERT INTO `cust_info`(`cust_id`, `name`, `phone_number`, `door_number`, `village`, `landmark`, `city`, `pincode`, `Product_id`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmts->bind_param("isssssssi", $cust_id, $name, $phone_number, $door_number, $village, $landmark, $city, $pincode, $Product_id);
        $stmts->execute();
        if($stmts == true) header('location:payment_option.php');
    }


?>

<!DOCTYPE html>
<html>
<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
.logo{
	font-family: 'Oswald', sans-serif;
	/*color: white;*/
	/*font-size: 3em;*/
}
</style>
<!-- Mirrored from www.godrejagrovet.com/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 02 Sep 2021 09:48:59 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
    <title>Nutri Corn Silage</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
	<meta name="format-detection" content="telephone=no">

    <meta name="keywords" content="Agrovet, Godrej agrovet, Godrej agrovet limited, Godrej Agrovet ltd, Diversified agri-business company, agri-business, agri business, productivity of farmers, agricultural land in India, India&#39;s milk production, champion social responsibility, Good &amp; Green commitment, Vision 2020, Greener India, good and green products, Good &amp; Green, Nadir Godrej Centre for Animal Research &amp; Development, NGCARD, Balram Yadav, animal nutrition, agri inputs, Agriculture inputs, agricultural inputs, oil palm, oil palm plantations, oil palm plantation, hybrid seeds, hybrid seed, processed poultry, farmer training programme, future of agri-business in India, Brighter farming, Brighter farming blog, Indian Agri sector, innovative farm practice, innovative farm practices, agriculture industry, Agri business companies in India, Agriculture industry in India, Careers in agri business, Careers in godrej agrovet, Careers in GAVL" />
    
    <meta name="description" content="At GAVL, we aim to improve farm productivity and profitability of farmers" />

    <link rel="shortcut icon" type="image/ico" href="public/favicon.ico" />

    <link rel="stylesheet" type="text/css" href="public/css/column.css">
    	<link rel="stylesheet" type="text/css" href="public/css/owl.carousel.min.css">
	<link rel="stylesheet" type="text/css" href="public/css/common.css">
	<link rel="stylesheet" type="text/css" href="public/css/header.css">
	<link rel="stylesheet" type="text/css" href="public/css/footer.css">
	<link rel="stylesheet" type="text/css" href="public/css/animate.css">
	<link rel="stylesheet" type="text/css" href="public/css/home.css">

	     <script>
        var hostname = location.hostname;
        //console.log("Outside : "+hostname);
        if(hostname == "www.godrejagrovet.com" || hostname=="godrejagrovet.com"){
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','../www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-66560190-2', 'auto');
            ga('require', 'displayfeatures');
            ga('send', 'pageview');
        }
    </script>
	<style type="text/css">
		/*.menu ul li ul:after { background: #3fafaa; }*/
		.db{
			background: green;
			padding: 1em;
			border-radius: 20px;
			/*margin-top: -100em;*/
			color: white;
		}
		
        .btn-grad {
        	border: none;
        	padding: .5em;
            letter-spacing: 1px;
            text-align: center;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
            outline: none;
            background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%);
          }
         
          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
          
        .text-grad{background: linear-gradient(to bottom right, #A22FCE, #FF7000); -webkit-background-clip: text; -webkit-text-fill-color: transparent;}
        .module{position: relative;top: 50%;left: 50%;transform: translate(-50%);}
    .personalInfoBorder{
box-shadow: 4px 3px 14px 7px lightgray;
}
.personalInfoBorder:hover
{
  box-shadow: 4px 3px 14px 7px lightgray;transition: .4s;border-radius: 1em; 
}
.personalInfoBorder form input[type='text'],input[type='number']{
            border: none;
            outline: none;
            border-bottom: 1px solid lightgray;
            width: 100%;
            height: 2.5em;
            margin-top: 2px;
            background-color: white;
         }
.personalInfoBorder form p
{
  margin-bottom: -7px;
}

@media only screen and (max-width: 430px)
		{
			.db1{
				display: none;
			}
		}

	</style>

    

    <!-- analytics code here -->


     <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="assets/css/font-awesome.min.css" rel="stylesheet" />
    <link href="assets/css/themify-icons.css" rel="stylesheet" />
    <link href="assets/css/flaticon-set.css" rel="stylesheet" />
    <link href="assets/css/magnific-popup.css" rel="stylesheet" />
    <link href="assets/css/owl.carousel.min.css" rel="stylesheet" />
    <link href="assets/css/owl.theme.default.min.css" rel="stylesheet" />
    <link href="assets/css/animate.css" rel="stylesheet" />
    <link href="assets/css/bootsnav.css" rel="stylesheet" />
    <link href="styles.css" rel="stylesheet">
    <link href="assets/css/responsive.css" rel="stylesheet" />


    <script type="text/javascript">
        var site_url = "index.php";
    </script>
</head>
<body>

<?php include('header.php');?>

<?php include('mobile_nav.php');?>

<section class="seperator seperator_trans">&nbsp;</section>
<section class="seperator seperator_trans">&nbsp;</section>

     <!--  -->

  <div class="container personalInfoBox" id="billingAddress">
        <div class="default-padding  col-lg-6 col-md-8 col-sm-10 col-12 module" style="padding-top: 0em;">
            <div class="p-5 personalInfoBorder">
                <form action="" method="post" class="mb-4">
                    <center class="pb-5"><h4><b style="letter-spacing: 1px;" class="text-grad">BILLING ADDRESS</b></h4></center>
                    <div class="mb-4">
                        <p>Name</p>
                        <input type="text" name="name" required>
                    </div>
                    <div class="mb-4">
                        <p>Phone number</p>
                        <input type="number" name="phone_number" maxlength="10" minlength="10" required>
                    </div>
                    <div class="mb-4">
                        <p>flat number</p>
                        <input type="text" name="door_number" required>
                    </div>
                    <div class="mb-4">
                        <p>Colony / village</p>
                        <input type="text" name="village" required>
                    </div>
                    <div class="mb-4">
                        <p>Landmark</p>
                        <input type="text" name="landmark" required>
                    </div>
                    <div class="mb-4">
                        <p>City</p>
                        <input type="text" name="city" required>
                    </div>
                    <div class="mb-4">
                        <p>Pincode</p>
                        <input type="number" name="pincode" required>
                    </div>
                    <div class="pb-4">
                        
                        <input type="submit" name="submit" value="Next" class="float-right btn-grad btn-block">
                    </div>
                </form>  
              </div>
          </div>
  </div>

<section class="seperator seperator_trans">&nbsp;</section>

<?php include('footer.php');?>

    <script type="text/javascript">
        document.getElementById('billingAddress').style.display = "none";
        function displayBillingAddress()
        {
                document.getElementById('billingAddress').style.display = "block";
                document.getElementById('billingAddress').style.paddingTop = "13px";
                document.getElementById('confirmAddress').style.display = "none";
        }

        <?php

            $sql = $conn->prepare("SELECT * FROM `cust_info` WHERE cust_id = ?"); 
                $sql->bind_param("i", $cust_id);
                $sql->execute();
                $result = $sql->get_result();
                $result1 = $result->fetch_assoc();
                // $row = ;
                if(count($result1) < 1)
                {?>
                    document.getElementById('billingAddress').style.display = "block";
                    document.getElementById('confirmAddress').style.display = "none";
                    document.getElementById('billingAddress').style.paddingTop = "13px";
                <?php }
        ?>
</script>

    <script src="assets/js/jquery-1.12.4.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/equal-height.min.html"></script>
    <script src="assets/js/jquery.appear.js"></script>
    <script src="assets/js/jquery.easing.min.js"></script>
    <script src="assets/js/jquery.magnific-popup.min.js"></script>
    <script src="assets/js/modernizr.custom.13711.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/progress-bar.min.js"></script>
    <script src="assets/js/isotope.pkgd.min.js"></script>
    <script src="assets/js/imagesloaded.pkgd.min.js"></script>
    <script src="assets/js/count-to.js"></script>
    <script src="assets/js/YTPlayer.min.js"></script>
    <script src="assets/js/jquery.nice-select.min.js"></script>
    <script src="assets/js/bootsnav.js"></script>
    <script src="assets/js/main.js"></script>

<script type="text/javascript" src="public/js/jquery.min.js"></script>
<script src="http://www.youtube.com/iframe_api"></script>
<script type="text/javascript" src="public/js/owl.carousel.min.js"></script>
<script type="text/javascript" src="public/js/wow.min.js"></script>
<script type="text/javascript" src="public/js/jquery.visible.min.js"></script>

<!-- <script type="text/javascript" src="js/waypoint.js"></script> -->
<script type="text/javascript" src="public/js/home.js"></script>
<script type="text/javascript" src="public/js/common.js"></script>
<script type="text/javascript" src="public/js/youtube.js"></script>

</body>

<!-- Mirrored from www.godrejagrovet.com/ by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 02 Sep 2021 09:49:39 GMT -->
</html>