
<?php
error_reporting(0);
session_start();
include("db_connection.php");

$email = $_SESSION['email'];
$customer = $conn->prepare("select * from customer where email = ?");
$customer->bind_param("s", $email);
$customer ->execute();
$result = $customer->get_result();
$customerresult = $result->fetch_assoc();
$cust_id = $customerresult['cust_id'];

if (strlen($_SESSION['email']) == 0) {
?>
   <script type="text/javascript">
        alert("Please login your account");
        setTimeout(function(){
            window.location.href = "customer_login.php";
        },0);
    </script>
 <?php
 } 

// Remove Item from cart
 if (isset($_POST['cancelOrder'])) {
     # code...
    $product_id = $_POST['product_id'];
    $order_date = $_POST['order_date'];

    $sql = $conn->prepare("DELETE FROM `orders` WHERE  cust_id = ? AND product_id = ? AND order_date = ? ");
    $sql->bind_param("iis", $cust_id, $product_id, $order_date);
    $sql->execute();
    if($sql) echo "<script>alert('Product Canceled');</script>";
    else echo "<center>error with delete</center>";
 }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ========== Meta Tags ========== -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Farmi - Organic Farm Agriculture Template">

    <!-- ========== Page Title ========== -->
    <title>Avanni - Organic Farm Agriculture</title>

    <!-- ========== Favicon Icon ========== -->
    <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon">

    <!-- ========== Start Stylesheet ========== -->
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
    <style type="text/css">
        .btn-grad1,.btn-grad {
            letter-spacing: 1px;
            text-align: center;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }
         .btn-grad1 {background-image: linear-gradient(to right, #fc00ff 0%, #00dbde  51%, #fc00ff  100%)}
          .btn-grad1:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         .cart{font-size: 20px;color: red;}
         
         .btn-grad {background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%)}
          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
    </style>
</head>

<body>

    <!-- Preloader Start -->
    <div class="se-pre-con"></div>
    <!-- Preloader Ends -->

<?php include('header.php');?>
  
  <div class="container">
                    <?php

                    // Empty cart display start

                     $sql1 = $conn->prepare("SELECT count(cust_id) as cust_id FROM `orders` WHERE cust_id = ? ");
                     $sql1->bind_param("i", $cust_id);
                     $sql1->execute();
                     $result = $sql1->get_result();
                     $row = $result->fetch_assoc();
                    $count = $row['cust_id'];
                    if ($count < 1) {
                        # code...
                        echo "<div class='row default-padding'>";
                        echo "<div class='col-lg-6' align='center'><img src='assets/img/about/empty_cart.jpg' width='200px' height='200px'></div>";
                        echo "<div class='cart mt-4 col-lg-6' align='center'>Your cart is empty<br><br><a href='products.php' class='btn-grad1 btn-block p-2'>Shop now</a></div>";
                        echo "</div>";
                    }
                     // Empty cart display end


                    $sql = $conn->prepare("SELECT * FROM `orders` WHERE cust_id = ? ");
                    $sql->bind_param("i", $cust_id);
                     $sql->execute();
                     $result1 = $sql->get_result();
                    while ($sqlresult = $result1->fetch_assoc()) {
                        # code...
                        $p_id = $sqlresult['product_id'];
                        $pprice = $sqlresult['total_amount'];
                        $qty = $sqlresult['qty'];
                        $order_date = $sqlresult['order_date'];
                        $status = $sqlresult['status'];

                        $products = $conn->prepare("SELECT * FROM products WHERE id = ? ");
                        $products->bind_param("i", $p_id);
                        $products->execute();
                        $result2 = $products->get_result();
                        while ($row1 = $result2->fetch_assoc()) {
                            # code...
                            $pid = $row1['id'];
                            $pname = $row1['Name'];
                            $pdescription = $row1['Description'];
                            $pimage = $row1['Image'];

                            ?>
<div class="default-padding p-4">
    <div class="row p-4 imginc function">
        <div class="col-lg-6 col-md-6 col-sm-12 col-12" align="center" style="height: 150px;border-radius: 30%;">
            <img src="Admin/assets/images/products/<?php echo $pimage; ?>" width='150px' height='100%'  style="border-radius: 50%;">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 mt-4" align="left">
            <h3 class="ml-4 " style="text-transform: uppercase;letter-spacing: 1px;font-weight: bold;background: linear-gradient(to bottom right, #A22FCE, #FF7000); -webkit-background-clip: text; -webkit-text-fill-color: transparent;font-size: 20px;"><a href="view-product.php?id=<?php echo $pid; ?>"><?php echo "$pname";?></a></h3>
            <div>
                <p style="color: green;margin-top: 0px;" class="ml-4 mr-4">4<i class="fas fa-star" style="font-size: 12px;"></i> rating</p>
                <div style="margin-top: -70px;margin-right: -20px; border-radius: 50%;width: 60px;height: 60px;" class="float-right btn-grad1">
                    <p style="margin-top: 14px;" class="text-white"><i class="fas fa-rupee-sign" style="font-size: 13px;margin-left: -20px;"></i><?php echo " $pprice";?></p>
                </div>
            </div>
            <div class="mt-3 ml-4">
               <?php echo "$pdescription"; ?>
            </div>
            <div class="mt-1 ml-4 row mb-3">
                <h5 class="mt-4 mr-3" style="font-size: 17px;"><?php echo "Quantity:  $qty" ?></h5>
                <h5 class="mt-4 mr-3" style="font-size: 17px;"><?php echo "<span class = 'text-danger'>Status</span> :  <span class = 'text-success'>$status</span>" ?></h5>
                <h5 class="mt-4" style="font-size: 17px;color: gray;"><?php echo "$order_date" ?></h5>
                
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <form action="" method="post">
                    <input type="hidden" name="product_id" value="<?php echo($pid)?>">
                    <input type="hidden" name="order_date" value="<?php echo($order_date)?>">
                    <button type="submit" name="cancelOrder" class="btn-grad p-1 btn-block float-right">Cancel order</button>
                </form>
            </div>
        </div>  
      </div>
  </div>
                            <?php
                        }
                    }
                    ?>
  </div>
   

<?php include('footer.php');?>

    <!-- jQuery Frameworks
    ============================================= -->
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

</body>
</html>