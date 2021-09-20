<?php
error_reporting(0);
session_start();
include('db_connection.php');
if (strlen($_SESSION['username']) == 0) {
  header('location: index.php');
}

// Delete item from the list

if (isset($_POST['deleteItem'])) {
  # code...
  $pid = $_POST['p_id'];
  $sql = $conn->prepare("DELETE FROM `products` WHERE id = ?");
  $sql->bind_param("i",$pid);
  $sql->execute();
  // $sql = mysqli_query($conn, "DELETE FROM `products` WHERE id = '$pid' ");
  if ($sql) {
    # code...
    echo "<script>alert('Item deleted');</script>";
  }
}

// Start update item

if (isset($_POST['updateItem'])) {
  # code...
  $pid = $_POST['p_id'];
  $sql = mysqli_query($conn, "DELETE FROM `products` WHERE id = '$pid' ");
  if ($sql) {
    # code...
    echo "<script>alert('Item deleted');</script>";
  }
}
// end update Item
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
	
  <div class="content-wrapper" style="background-color: none;">
    <div class="container-fluid">

  <!--Start Dashboard Content-->

  	<div class="card mt-3">
      <div class="card-content">
             
              <div class="col-12 col-lg-6 col-xl-3 border-light">
                  <div class="card-body">
                    <!-- <form action="" method="post"> -->
                        <a href="newProductAdd.php" class="btn btn-light btn-block">Add new Product</a>
                   <!-- </form> -->
                  </div>
              </div>
      </div>
   </div>  
	  
	
	<div class="row">
	 <div class="col-12 col-lg-12">
	   <div class="card">
       <div class="card-header p-4" align="center">Recently added Products
     
     </div> 
	       <div class="table-responsive">
                 <table class="table align-items-center table-flush table-borderless">
                  <thead>
                   <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Image</th>
                     <th>Description</th>
                     <th>Amount</th>
                     <th>Update</th>
                     <th>Delete</th>
                   </tr>
                   </thead>
                   <tbody>

                  <?php
                  $sql = mysqli_query($conn, "select * from products");
                  while($row = mysqli_fetch_array($sql)){
                    $id = $row['id'];
                    $name = $row['Name'];
                    $img = $row['Image'];
                    $descript = $row['Description'];
                    $price = $row['Price'];
                    

                    ?>

                    <tr>
                      <td><?php echo "$id";?></td>
                      <td><?php echo "$name";?></td>
                      <td><img src="assets/images/products/<?php echo $img; ?>" width="60px" height="60px"></td>
                      <td><?php echo "$descript";?></td>
                      <td><?php echo "RS. $price";?></td>
                      
                      <td>
                        <form action="updateProduct.php" method="post">
                          <input type="hidden" name="p_id" value="<?php echo "$id";?>">
                          <input type="hidden" name="p_name" value="<?php echo "$name";?>">
                          <input type="hidden" name="p_descript" value="<?php echo "$descript";?>">
                          <input type="hidden" name="p_price" value="<?php echo "$price";?>">
                          <input type="hidden" name="p_img" value="<?php echo $img; ?>">

                          <input type="submit" name="updateItem" class="btn btn-success" value="Update">
                        </form>
                      </td>
                      <td>
                        <form action="" method="post">
                          <input type="hidden" name="p_id" value="<?php echo "$id";?>">
                          <button type="submit" name="deleteItem" class="btn btn-danger">Delete</button>
                        </form>
                      </td>
                    </tr>

                    <?php
                  }
                  ?>
                   
                     
                   </tbody>
                 </table>
               </div>
	   </div>
	 </div>
	</div><!--End Row-->


	  
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
