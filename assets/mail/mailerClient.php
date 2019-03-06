<?php 
require 'Mail.php';

$requestBody = file_get_contents('php://input'); // tar kun imot body'en til post requests fra validering.js. skal være Utilgjengelig for alt annet...

$toAdress = 'jonas.jore@gmail.com'; // verdien satt her vil være den mailadressen som mottar mails fra serveren...

$mail = new Mail($requestBody);

// TODO: dette skal trekkes ut av Mail.php
/*
  $this->requestBody = json_decode($requestBody, true); // true => json dekodes til assoc array
  $this->mail = $this->requestBody['mail'];
  $this->subject = $this->requestBody['subject'];
  $this->message = $this->requestBody['text'];
  $this->typeOfService = $this->requestBody['typeOfService'];
 */

$mail->sendMail($toAdress);
?>
