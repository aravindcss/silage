
<?php
error_reporting(0);
session_start();
include("db_connection.php");
$error = "";
# User Credentials
if(isset($_POST['submit']))
{
    $uname = $_POST['username'];
    $password = $_POST['password'];
    

    $sql1 = mysqli_query($conn,"select * from admin where username = '$uname'");
    $result = mysqli_fetch_array($sql1);
    $Dbuname = $result['username'];
    $Dbpassword = $result['password'];

        if($Dbuname == $uname && $Dbpassword == $password){
        $_SESSION['username'] = $uname;
        header('location:main.php');
        }
        else echo "<script>alert('Invalid username or password');</scrpt>";                 
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
  <!-- Bootstrap core CSS-->
  <link href="assets/css/bootstrap.min.css" rel="stylesheet"/>
  <!-- animate CSS-->
  <link href="assets/css/animate.css" rel="stylesheet" type="text/css"/>
  <!-- Icons CSS-->
  <link href="assets/css/icons.css" rel="stylesheet" type="text/css"/>
  <!-- Custom Style-->
  <link href="assets/css/app-style.css" rel="stylesheet"/>
  
</head>

<body class="bg-theme bg-theme1">

<!-- start loader -->
   <div id="pageloader-overlay" class="visible incoming"><div class="loader-wrapper-outer"><div class="loader-wrapper-inner" ><div class="loader"></div></div></div></div>
   <!-- end loader -->

<!-- Start wrapper-->
<br><br>
 <div id="wrapper">

 <div class="loader-wrapper"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
	<div class="card card-authentication1 mx-auto my-5">
		<div class="card-body">
		 <div class="card-content p-2">
		 	<div class="text-center">
		 		<img src="assets/images/logo.png" alt="logo icon">
		 	</div>
		  <div class="card-title text-uppercase text-center py-3">Sign In</div>
		    <form action="#" method="post">
    			  <div class="form-group mb-4">
    			  <label for="exampleInputUsername" class="sr-only">Username</label>
    			   <div class="position-relative has-icon-right">
    				  <input type="text" id="exampleInputUsername" name="username" class="form-control input-shadow" placeholder="Enter Username" required>
    				  <div class="form-control-position">
    					  <i class="icon-user"></i>
    				  </div>
    			   </div>
    			  </div>
    			  <div class="form-group mb-4">
    			  <label for="exampleInputPassword" class="sr-only">Password</label>
    			   <div class="position-relative has-icon-right">
    				  <input type="password" id="exampleInputPassword" name="password" class="form-control input-shadow" placeholder="Enter Password" required>
    				  <div class="form-control-position">
    					  <i class="icon-lock"></i>
    				  </div>
    			   </div>
    			  </div>
    			 <button type="submit" class="btn btn-light btn-block" name="submit">Sign In</button>
			 </form>
		   </div>
		  </div>
	     </div>
    
     <!--Start Back To Top Button-->
    <a href="javaScript:void();" class="back-to-top"><i class="fa fa-angle-double-up"></i> </a>
    <!--End Back To Top Button-->
	
	</div><!--wrapper-->
	
  <!-- Bootstrap core JavaScript-->
  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/popper.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
	
  <!-- sidebar-menu js -->
  <script src="assets/js/sidebar-menu.js"></script>
  
  <!-- Custom scripts -->
  <script src="assets/js/app-script.js"></script>
  
</body>
</html>
