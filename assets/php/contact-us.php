<?php 

 	$name = $_POST['name'];
 	$email = $_POST['email'];
 	$message = $_POST['message'];

 	$mail_body = "
 		Name : ".$name."<br>
 		Email : ".$email."<br><br>
 		Message : <p>".$message."</p>
 	";

 	$header_information = "From:".$email." \r\nMIME-Version:1.0 \r\nContent-Type:text/html;charset=ISO-8859-1 \r\n";

 	mail("info@hermitlabs.in","Message from hermitlabs website's contact form",$mail_body,$header_information);

 ?>