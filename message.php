<?php
   $Name = $_POST['name'];
   $Email = $_POST['email'];
   $Phone = $_POST['phone'];
   $Web = $_POST['website'];
   $Message = $_POST['message'];

   $conn = new mysqli('localhost', 'root', '', 'script');
   if($conn->connect_error) {
        die('Connection Failed: '.$conn->connect_error);
   }
   else {
       $stmt = $conn->prepare("INSERT INTO `info` (`Name`, `Email`, `Phone`, `Website`, `Message`) VALUES(?,?,?,?,?)");
       $stmt->bind_param("ssiss",$Name, $Email, $Phone, $Web, $Message);
       $stmt->execute();
       echo "We got your information....";
       $stmt->close();
       $conn->close();
   }
?>