<?php 
$servername="localhost";
$username = "root";
$password="";

$conn = new mysqli($servername, $username, $password);

if($conn->connect_error){
    die("Connection failed: " .$conn->connect_error);
}

$firstname=$_POST["firstName"];
$lastname = $_POST["lastName"];
$message = $_POST["message"];

$query= "INSERT INTO Feedback values($firstname, $lastname,$message)";


//check if the table exist or not then create
// CREATE TABLE `feedback`.`messages` (`id` INT UNSIGNED NOT NULL , `date` DATE NOT NULL DEFAULT CURRENT_TIMESTAMP , `firstName` VARCHAR(255) NOT NULL , `lastName` VARCHAR(255) NOT NULL , `message` TEXT NOT NULL ) ENGINE = InnoDB;


if(mysqli_query($conn, $query)){
echo "Thank you for contacting me, I'll get back to you shortly.";
};
mysqli_close($conn);
?>