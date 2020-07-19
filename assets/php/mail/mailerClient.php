<?php

require_once 'Mail.php';
require_once 'SendMailController.php';

$requestBody = file_get_contents('php://input');
$mailRequest = json_decode($requestBody, true);
$fromMail = $mailRequest['mail'];
$subject = $mailRequest['subject'];
$typeOfService = $mailRequest['typeOfService'];
$mailBody = $mailRequest['text'];

// mailadressen, mail fra kontaktskjema skal sendes til
const ADRESS = 'tekniker@fodataservice.com';

$mail = new Mail($fromMail, $subject, $typeOfService, $mailBody);
$mailController = new SendMailController($mail);
$mailController->sendTo(ADRESS);

echo 'forespørsel til mail sendt uten problemer';

?>
