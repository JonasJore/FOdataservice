<?php 
require 'Mail.php';

$requestBody = file_get_contents('php://input'); // tar kun imot body'en til post requests fra validering.js. skal være Utilgjengelig for alt annet...

$toAdress = 'jonas.jore@gmail.com'; // verdien satt her vil være den mailadressen som mottar mails fra serveren...

$mail = new Mail($requestBody);

$mail->sendMail($toAdress);
?>
