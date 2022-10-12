<?php 
include("dbconnection.php");

if(isset($_POST['Submit'])){
  $name = $_REQUEST['name'];
  $email = $_REQUEST['email'];
  $subject = $_REQUEST['subject'];
  $message = $_REQUEST['message'];

$sql1 ="UPDATE feedbacks SET `name`=`$name`, `email`=$email, `subject`=$subject, `message`=$message";
$update= mysqli_query($conn, $sql1);
if($update==true){
  echo "Thank you";
}

mysqli_close($conn);
}
?>