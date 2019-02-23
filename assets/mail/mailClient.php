<?php 
$requestBody = file_get_contents('php://input'); // tar kun imot body'en til post requests fra validering.js. skal være Utilgjengelig for alt annet...

class Mail {
  private $requestBody;
  private $mail;
  private $subject;
  private $message;
  private $typeOfService;
  
  public function __construct($requestBody) {
    $this->requestBody = json_decode($requestBody, true); // true betyr at json dekodes til assoc array
    $this->mail = $this->requestBody['mail'];
    $this->subject = $this->requestBody['subject'];
    $this->message = $this->requestBody['text'];
    $this->typeOfService = $this->requestBody['typeOfService'];
  }
  
  public function sendMail(): void {
    $to = 'jonas.jore@gmail.com';
    mail(
      $to,
      $this->subject,
      $this->message,
      'From: Mail sendt kontaktskjema' . '\r\n'.
      'Reply-To: webmaster@fodataservice.com' . '\r\n'.
      'X-Mailer: PHP/' . phpversion()
    );
  }
}

$instance = new Mail($requestBody);
$instance->sendMail();
