
<?php
error_reporting(0);
session_start();
include("db_connection.php");
// $Pid = $_SESSION['Pid'];
$Product_id = $_SESSION['$Product_id'];
// $product_name = $_SESSION['product_name'];
// $product_image = $_SESSION['product_image'];
// $product_price = $_SESSION['product_price'];

// echo "<script>alert('$Product_id');</script>";

$product = $conn->prepare("select * from products where id = ?");
$product->bind_param("i", $Product_id);
$product->execute();
$result = $product->get_result();
$productresult = $result->fetch_assoc();
  // $id = $productresult['id'];
  $pname = $productresult['Name'];
  $pdescription = $productresult['Description'];
  $pimage = $productresult['Image'];
  $pprice = $productresult['Price'];
  $pdescription2 = $productresult['Description2'];


// $email = $_SESSION['email'];
// $customer = $conn->prepare("select * from customer where email = ?");
// $customer->bind_param("s", $email);
// $customer->execute();
// $result = $customer->get_result();
// $customerresult = $result->fetch_assoc();
// $cust_id = $customerresult['cust_id'];

        // Billing address

// $address = $conn->prepare("select * from cust_info where cust_id = ? ");
// $address->bind_param("i", $cust_id);
// $address->execute();
// $result = $address->get_result();
// $addressresult = $result->fetch_assoc();

// $customer_name = $addressresult['name'];
// $customer_phone_number = $addressresult['phone_number'];
// $customer_door_number = $addressresult['door_number'];
// $customer_village = $addressresult['village'];
// $customer_landmark = $addressresult['landmark'];
// $customer_city = $addressresult['city'];
// $customer_pincode = $addressresult['pincode'];

        // end finding address



// Start submitting data
 if (isset($_POST['submit'])) {
     # code...

    $status = "Ordered";
    $qty = $_POST["qty"];
    $total_amount = $_POST["total_amount"];

    $stmt = $conn->prepare("INSERT INTO `orders`(`cust_id`, `product_id`, `status`, `qty`, `total_amount`) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("iisis", $cust_id, $Pid, $status, $qty, $total_amount);
    $stmt->execute();

    if($stmt == true) 
      {
        echo "<script>alert('Ordered Successfully');</script>";

        ?>

<script>
  setTimeout(function(){
    window.location.href = "index.php";
  },0);
</script>

        <?php
        // echo "<script>alert('Ordered Successfully');</script>";
      }
    else echo "<center>errror</center>";
 }         




?>

<script src="assets/js/jquery.js"></script>

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

<script>
    $(document).ready(function(){
        
        $("#qty").keyup(function(){
            
            var total = <?php echo "$pprice";?>;
            var price = <?php echo "$pprice";?>;
            var qty = Number($('#qty').val());
            if(qty >= 1)
            {
                var total = price * qty;
                $("#total").val(total);
                $("#ttl").val(total);
            } 
            else $("#total").val(total);$("#ttl").val(total);
            
        });
        
    });
</script>
    <style type="text/css">
        .btn-grad {
            letter-spacing: 1px;
            text-align: center;
            transition: 0.5s;
            padding: .5em;
            border: none;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }
         .btn-grad {background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%)}
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
@media only screen and(max-width: 1050px)
{
  
}
    </style>
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
  <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">

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
		@media only screen and (max-width: 430px)
		{
			.db1{
				display: none;
			}
		}
	</style>

    

    <!-- analytics code here -->


    
    <script type="text/javascript">
        var site_url = "index.php";
    </script>
</head>
<body>

<?php include('header.php');?>

<?php include('mobile_nav.php');?>

<section class="seperator seperator_trans">&nbsp;</section>
<section class="seperator seperator_trans">&nbsp;</section>

<div class="container personalInfoBox">
        <div class="default-padding text-center col-lg-6 col-md-8 col-sm-10 col-12 module" style="padding-top: 2em;">
            <div class="p-5 personalInfoBorder">
                <form action="" method="post">
               <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6" style="height: 80px;">
                        <img src="Admin/assets/images/products/<?php echo $pimage; ?>" width='80px' height='100%'>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6 productDetails">
                        <h6 class="ml-4" style="text-transform: uppercase;letter-spacing: 1px;font-weight: bold;background: linear-gradient(to bottom right, #A22FCE, #FF7000); -webkit-background-clip: text; -webkit-text-fill-color: transparent;font-size: 14px;text-align: left;"><?php echo "$pname";?></h6>
                        <div class="ml-4 product-rating text-success" style="font-size: 12px;text-align: left;">
                                <span>5 </span><i class="far fa-star"></i> <span>Rating</span>
                                
                        </div>
                    </div>
               </div>
               <div class="row mt-4">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                       <p style="color: gray;">Quantity</p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6" align="left">
                       <input type="number" name="qty" class="col-lg-6 col-md-6 col-sm-10 col-6" id="qty" value="1" style="font-size: 14px;margin-top: -10px;">
                    </div>
               </div>
               <div class="row mt-4">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                       <p style="color: gray;">Item price</p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6" align="left" style="margin-top: 7px;">
                       <h5 style="font-size: 14px;"><i class="fas fa-rupee-sign" style="font-size: 12px;"></i><?php echo " $pprice"; ?></h5>
                    </div>
               </div>
               <div class="row mt-4">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                       <p style="color: gray;">Total</p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6" style="margin-top: -8px;" align="left">
                       
                       <h5 style="font-size: 14px;"><i class="fas fa-rupee-sign" style="font-size: 12px;margin-top: 1.5em;"></i><input type="number" style="font-size: 14px;border: none;margin-top: -1.7em;margin-left: 1em;" id="total" value="<?php echo($pprice)?>" disabled></h5>
                       <input type="hidden" id="ttl" name="total_amount">
                    </div>
               </div>
               <hr class="mt-3">
               <h4 class="mt-4" style="text-transform: uppercase;font-weight: bold;font-size: 20px;color: gray;letter-spacing: 1px;">Payment Mode</h4>
               <div class="paymentType mb-4" align="center">
                   
                    <table>
                        
                            <tr><label for="cod">
                                <td><input type="radio" name="cards" style="width: 1.2em;" id="cod" required></td>
                                <!-- <td><input type="checkbox" name=""></td> -->
                                <td><h5 style="font-size: 17px;" class="ml-3 mt-3">Cash on Delivery</h5></td>
                            </label>
                            </tr>
                       
                    </table>
                  
               </div>
               <input type="submit" name="submit" value="CONFIRM ORDER" class="btn-grad btn-block">
               </form>
              </div>
          </div>
  </div>

<section class="seperator seperator_trans">&nbsp;</section>

<?php include('footer.php');?>

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