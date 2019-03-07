<?php 
require 'Mail.php';
require 'SendMailController.php';
// tar kun imot body'en til post requests fra validering.js. skal være Utilgjengelig for alt annet...
$requestBody = file_get_contents('php://input');
$mailRequest = json_decode($requestBody, true);
$fromMail = $mailRequest['mail'];
$subject = $mailRequest['subject'];
$typeOfService = $mailRequest['typeOfService'];
$mailBody = $mailRequest['text'];

// adresse, mailen fra kontaktskjema skal sendes til
// const TOADRESS = 'jonas.jore@gmail.com';
const ADRESS = 'jonas.jore@gmail.com';

$mail = new Mail($fromMail, $subject, $typeOfService, $mailBody);

$mailController = new SendMailController($mail);

// TODO: dette metode kallet er under konstruksjon
// $mailController->sendTo(ADRESS);
echo ADRESS;
echo $mailController->setMailMessage();

echo 'koden kjørte uten problemer 👨‍💻💩';
?>
