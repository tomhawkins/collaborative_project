<?php
 $recieveremail="coldcalltaskforce@gmail.com";
 $subject=$_POST["subject"];
 $email=$_POST["email"];
 $message=$_POST["message"];
 $name=$_POST["name"];


 $emailsubject = "Message from Portfolio: " .$subject;
 $mailheader = "From:" .$email. "\r\n";
 $mailheader .= "Senders Email:" .$email."\r\n";
 $messagebody .= "Name:" .$name. "\r\n";
 $messagebody .= "Message: \r\n" .$message. "\r\n";
 
 
 mail($recieveremail,$emailsubject,$messagebody,$mailheader,$mail_message);
 header("location: contact.html");
 
 ?>