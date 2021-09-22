<?php
// error_reporting(0);
session_start();
include('db_connection.php');
$name = $_SESSION['username'];
if (strlen($_SESSION['username']) == 0) {
  header('location: index.php');
}
$sql = mysqli_query($conn, "select * from admin where username = '$name' ");
$result = mysqli_fetch_array($sql);
$adminName = $result['name'];

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <meta name="description" content=""/>
  <meta name="author" content=""/>
  <title>Admin panel - Nutri Corn Silage</title>
  <!-- loader-->
  <link href="assets/css/pace.min.css" rel="stylesheet"/>
  <script src="assets/js/pace.min.js"></script>
  <link rel="icon" href="" type="image/x-icon">
  <link href="assets/plugins/vectormap/jquery-jvectormap-2.0.2.css" rel="stylesheet"/>
  <link href="assets/plugins/simplebar/css/simplebar.css" rel="stylesheet"/>
  <link href="assets/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="assets/css/animate.css" rel="stylesheet" type="text/css"/>
  <link href="assets/css/icons.css" rel="stylesheet" type="text/css"/>   
  <link href="assets/css/sidebar-menu.css" rel="stylesheet"/>
  <link href="assets/css/app-style.css" rel="stylesheet"/>     
  
</head>

<body class="bg-theme bg-theme1">
 
<!-- Start wrapper-->
 <div id="wrapper">
 
  <!--Start sidebar-wrapper-->
   <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
     <div class="brand-logo">
      <a href="main.php">
       <img src="" class="logo-icon" alt="logo icon">
       <h5 class="logo-text">Nutri Corn Silage</h5>
     </a>
   </div>
   <ul class="sidebar-menu do-nicescrol">
      <li class="sidebar-header">MAIN NAVIGATION</li>
      <li>
        <a href="main.php">
          <i class="zmdi zmdi-view-dashboard"></i> <span>Dashboard</span>
        </a>
      </li>

      <li>
        <a href="products.php">
          <i class="zmdi zmdi-view-dashboard"></i> <span>Products</span>
        </a>
      </li>

      <li>
        <a href="received_orders.php">
          <i class="zmdi zmdi-grid"></i> <span>Orders</span>
        </a>
      </li>
    </ul>
   
   </div>
   <!--End sidebar-wrapper-->

<!--Start topbar header-->
<header class="topbar-nav">
 <nav class="navbar navbar-expand fixed-top">
  <ul class="navbar-nav mr-auto align-items-center">
    <li class="nav-item">
      <a class="nav-link toggle-menu" href="javascript:void();">
       <i class="icon-menu menu-icon"></i>
     </a>
    </li>
    <li class="nav-item ml-4">
      <span><?php echo "Welcome to $adminName"; ?></span>
    </li>
  </ul>
     
  <ul class="navbar-nav align-items-center right-nav-link">

    <li class="nav-item">
      <a class="nav-link waves-effect" href="logout.php">
      Logout</a>
    </li>
  </ul>
</nav>
</header>
<!--End topbar header-->

<div class="clearfix"></div>
	
  <div class="content-wrapper">
    <div class="container-fluid">


  <?php
  
      $total_amount = 0;
      $total_orders = 0;
      $sqll = mysqli_query($conn, " SELECT * FROM orders");
      while ($row = mysqli_fetch_array($sqll)) {
        # code...
        $total_orders = $total_orders + $row['qty'];
        $total_amount = $total_amount + $row['total_amount'];
      }




  ?>
  <!--Start Dashboard Content-->

	<div class="card mt-3">
    <div class="card-content">
        <div class="row row-group m-0">
            <div class="col-12 col-lg-6 border-light">
                <div class="card-body">
                  <h5 class="text-white mb-0"><?php echo "$total_orders";?> <span class="float-right"><i class="fa fa-shopping-cart"></i></span></h5>
                    <div class="progress my-3" style="height:3px;">
                       <div class="progress-bar" style="width:55%"></div>
                    </div>
                  <p class="mb-0 text-white small-font">Total Orders <span class="float-right"><i class="zmdi zmdi-long-arrow-up"></i></span></p>
                </div>
            </div>
            <div class="col-12 col-lg-6 border-light">
                <div class="card-body">
                  <h5 class="text-white mb-0"><?php echo "$total_amount";?> <span class="float-right">₹</span></h5>
                    <div class="progress my-3" style="height:3px;">
                       <div class="progress-bar" style="width:55%"></div>
                    </div>
                  <p class="mb-0 text-white small-font">Total Revenue <span class="float-right"><i class="zmdi zmdi-long-arrow-up"></i></span></p>
                </div>
            </div>
        </div>
    </div>
 </div>  

	<div class="row">
	 <div class="col-12 col-lg-12">
	   <div class="card">
	     <div class="card-header text-center"><h5>RECEIVED ORDERS</h5>
		 </div>
	       <div class="table-responsive">
          <table class="table align-items-center table-flush table-borderless">
                  <thead>
                   <tr>
                     <th>Customer ID</th>
                     <th>Product ID</th>
                     <th>Order Date</th>
                     <th>Status</th>
                     <th>Quantity</th>
                     <th>ttl_amount</th>
                   </tr>
                   </thead>
                    <?php
                    $sql = mysqli_query($conn, " SELECT * FROM orders");
                    while($result = mysqli_fetch_array($sql))
                    {
                      $cust_id = $result['cust_id'];
                      $product_id = $result['product_id'];
                      $order_date = $result['order_date'];
                      $status = $result['status'];
                      $qty = $result['qty'];
                      $ttl_amount = $result['total_amount'];
                      ?>
                 
                   <tbody>
                      <tr>
                        <td><?php echo "$cust_id";?></td>
                        <td><?php echo "$product_id";?></td>
                        <td><?php echo "$order_date";?></td>
                        <td><?php echo "$status";?></td>
                        <td><?php echo "$qty";?></td>
    					         <td>₹<?php echo " $ttl_amount";?></td>
                    </tr>
                 </tbody>
                 <?php
                  }
                    ?>
                  </table>
               </div>
	   </div>
	 </div>
	</div><!--End Row-->

      <!--End Dashboard Content-->
	  
	<!--start overlay-->
		  <div class="overlay toggle-menu"></div>
		<!--end overlay-->
		
    </div>
    <!-- End container-fluid-->
    
    </div><!--End content-wrapper-->
   <!--Start Back To Top Button-->
    <a href="javaScript:void();" class="back-to-top"><i class="fa fa-angle-double-up"></i> </a>
    <!--End Back To Top Button-->
	
	<!--Start footer-->
	<footer class="footer">
      <div class="container">
        <div class="text-center">
          Copyright © <?php echo date('Y')?> Nurti Corn Silage
        </div>
      </div>
    </footer>
	<!--End footer-->
	
  <!--start color switcher-->
   <div class="right-sidebar">
    <div class="switcher-icon">
      <i class="zmdi zmdi-settings zmdi-hc-spin"></i>
    </div>
    <div class="right-sidebar-content">

      <p class="mb-0">Gaussion Texture</p>
      <hr>
      
      <ul class="switcher">
        <li id="theme1"></li>
        <li id="theme2"></li>
        <li id="theme3"></li>
        <li id="theme4"></li>
        <li id="theme5"></li>
        <li id="theme6"></li>
      </ul>

      <p class="mb-0">Gradient Background</p>
      <hr>
      
      <ul class="switcher">
        <li id="theme7"></li>
        <li id="theme8"></li>
        <li id="theme9"></li>
        <li id="theme10"></li>
        <li id="theme11"></li>
        <li id="theme12"></li>
		<li id="theme13"></li>
        <li id="theme14"></li>
        <li id="theme15"></li>
      </ul>
      
     </div>
   </div>
  <!--end color switcher-->
   
  </div>
  <!--End wrapper-->

  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/popper.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
  <script src="assets/plugins/simplebar/js/simplebar.js"></script>
  <script src="assets/js/sidebar-menu.js"></script>
  <script src="assets/js/jquery.loading-indicator.js"></script>
  <script src="assets/js/app-script.js"></script>
  <script src="assets/plugins/Chart.js/Chart.min.js"></script>
  <script src="assets/js/index.js"></script>
</body>
</html>
