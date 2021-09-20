<?php
session_start();
error_reporting(0);
include('db_connection.php');

if (strlen($_SESSION['username']) == 0) {
  header('location: index.php');
}

// get data from previos form
 if (isset($_POST['updateItem'])) 
 {
      $p_id = $_POST['p_id'];
      $p_name = $_POST['p_name'];
      $p_descript = $_POST['p_descript']; 
      $p_price = $_POST['p_price'];
      $p_img = $_POST['p_img'];  

      if($p_name == null) header('location:products.php');   
}
// end

//  submit the data / update the data

if (isset($_POST['submit'])) {
  $PID = $_POST['PID'];
  $pname = $_POST['pname'];
  $pdescript = $_POST['pdescript'];
  $pprice = $_POST['pprice'];

  // $pimage = $_POST['pimage'];

  if (isset($_FILES['pimage']['name'])) {
    $imageName = $_FILES['pimage']['name'];
    $sourcePath = $_FILES['pimage']['tmp_name'];
    $destinationPath = "assets/images/products/".$imageName;

    $upload = move_uploaded_file($sourcePath,$destinationPath);

    if($upload == true)
    {
      echo "<script>Image inserted successfully</script>";
    }
  }

  else
    $imageName = "";

  $sql = mysqli_query($conn, "UPDATE `products` SET Name = '$pname', Description = '$pdescript', Image = '$imageName', Price = '$pprice' WHERE id = '$PID' ");
  if($sql){
   echo "<script>alert('Product updated');</script>";
   ?>
  <meta http-equiv="refresh" content="0,url=/avaniorganics-master/Admin/products.php">
   <?php
  }
  else echo "Error in submission";
}


?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
  <meta name="description" content=""/>
  <meta name="author" content=""/>
  <title>Admin panel - Avanni Organics</title>
  <!-- loader-->
  <link href="assets/css/pace.min.css" rel="stylesheet"/>
  <script src="assets/js/pace.min.js"></script>
  <!--favicon-->
  <link rel="icon" href="assets/images/logo.png" type="image/x-icon">
  <!-- Vector CSS -->
  <link href="assets/plugins/vectormap/jquery-jvectormap-2.0.2.css" rel="stylesheet"/>
  <!-- simplebar CSS-->
  <link href="assets/plugins/simplebar/css/simplebar.css" rel="stylesheet"/>
  <!-- Bootstrap core CSS-->
  <link href="assets/css/bootstrap.min.css" rel="stylesheet"/>
  <!-- animate CSS-->
  <link href="assets/css/animate.css" rel="stylesheet" type="text/css"/>
  <!-- Icons CSS-->
  <link href="assets/css/icons.css" rel="stylesheet" type="text/css"/>
  <!-- Sidebar CSS-->
  <link href="assets/css/sidebar-menu.css" rel="stylesheet"/>
  <!-- Custom Style-->
  <link href="assets/css/app-style.css" rel="stylesheet"/>
  
</head>

<body class="bg-theme bg-theme1">
 
<!-- Start wrapper-->
 <div id="wrapper">
 
  <!--Start sidebar-wrapper-->
   <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
     <div class="brand-logo">
      <a href="main.php">
       <img src="assets/images/logo.png" class="logo-icon" alt="logo icon">
       <h5 class="logo-text">Avanni Organics</h5>
     </a>
   </div>
   <ul class="sidebar-menu do-nicescrol">
      <li class="sidebar-header">MAIN NAVIGATION</li>
      <li>
        <a href="main.php">
          <i class="zmdi zmdi-view-dashboard"></i> <span>Dashboard</span>
        </a>
      </li>
<!--       <li>
        <a href="category.php">
          <i class="zmdi zmdi-format-list-bulleted"></i> <span>Category</span>
        </a>
      </li> -->

      <li>
        <a href="products.php">
          <i class="zmdi zmdi-view-dashboard"></i> <span>Products</span>
        </a>
      </li>

      <li>
        <a href="order.php">
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
    <li class="nav-item">
      <form class="search-bar">
        <input type="text" class="form-control" placeholder="Enter keywords">
         <a href="javascript:void();"><i class="icon-magnifier"></i></a>
      </form>
    </li>
  </ul>
     
  <ul class="navbar-nav align-items-center right-nav-link">

    <li class="nav-item">
      <a class="nav-link waves-effect" href="logout.php">
      <span>Logout</span></a>
    </li>
</ul>



  </ul>
</nav>
</header>
<!--End topbar header-->

<div class="clearfix"></div>
	
  <div class="content-wrapper">
    <div class="container-fluid">

        <div class="col-lg-6 default-padding">
         <div class="card">
           <div class="card-body">
           <div class="card-title text-center"  id="addProduct">Add new Product</div>
           <hr>
            <form action="" method="post" enctype="multipart/form-data">
           <div class="form-group mt-4">
            <label for="input-1">Product name</label>
            <input type="text" name="pname" value="<?php echo $p_name;?>" class="form-control" id="input-1" placeholder="Enter Product Name" required>
           </div>
           <div class="form-group mt-4">
            <label for="input-2">Product Description</label>
            <input type="text" name="pdescript" value="<?php echo $p_descript;?>" class="form-control" id="input-2" placeholder="Enter Product Description" required>
           </div>
           <div class="form-group mt-4">
            <label for="input-3">Producct Price</label>
            <input type="text" name="pprice" value="<?php echo $p_price;?>" class="form-control" id="input-3" placeholder="Enter Product Price in RS" required>
           </div>
           <div class="form-group mt-4">
            <label for="input-4">Product Image</label>
            <input type="file" name="pimage" value="<?php echo $p_img;?>" class="form-control" id="input-4" accept="image/*" required>
            <img src="assets/images/products/<?php echo $p_img;?>" width='70px' height='70px'>
           </div><br><hr>
           <div class="form-group mt-2" align="center">
            <input type="hidden" name="PID" value="<?php echo $p_id;?>">
            <button type="submit" name="submit" class="btn btn-light px-5"><i class="icon-lock"></i>  Submit</button>
          </div>
          </form>
         </div>
         </div>
      </div>

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
          Copyright © <?php echo date('Y')?> Avanni Organics
        </div>
      </div>
    </footer>
	<!--End footer-->
   
  </div><!--End wrapper-->

  <!-- Bootstrap core JavaScript-->
  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/popper.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
	
 <!-- simplebar js -->
  <script src="assets/plugins/simplebar/js/simplebar.js"></script>
  <!-- sidebar-menu js -->
  <script src="assets/js/sidebar-menu.js"></script>
  <!-- loader scripts -->
  <script src="assets/js/jquery.loading-indicator.js"></script>
  <!-- Custom scripts -->
  <script src="assets/js/app-script.js"></script>
  <!-- Chart js -->
  
  <script src="assets/plugins/Chart.js/Chart.min.js"></script>
 
  <!-- Index js -->
  <script src="assets/js/index.js"></script>

  
</body>
</html>
