<?php
$servername="https://databases-auth.000webhost.com";
$username ="id18669442_feeds";
$password ="BilAchieng'9&";
$database ="id18669442_feedbacks";

$conn =new mysqli($servername, $username, $password, $database);
if($conn->connect_error){
    die("Connection failed:".$conn->connect_error);
}

?>