<?php

$name ="";
$email = "";
$title ="";
$message = "";
$concatMsg = "";

if (isset($_POST['formSubmit'])){
  $name = $_POST['Name'];
  $email = $_POST['Email'];
  $title = $_POST['Title'];
  $message = $_POST['message'];
}
  
 
$concatMsg = "\nName: " .$name . "| Email: " . $email . "| Title: " .$title . "|Message: " .$message;

$f = fopen('messages.txt', "a");

fwrite($f, $concatMsg);

fclose($f);
echo $concatMsg;
echo "<script type ='text/javascript'>alert('Thanks for contacting me! I'll get back to you in the shortest possible time')</script>";
echo "<script type='text/javascript>'document.location='index.html'</script>";