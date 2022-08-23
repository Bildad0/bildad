<?php
$servername="localhost";
$username ="id18669442_feeds";
$password ="BilAchieng'9&";
$database ="id18669442_feedbacks";

$conn =new mysqli($servername, $username, $password, $database);
if($conn->connect_error){
    die("Connection failed:".$conn->connect_error);
}

?>