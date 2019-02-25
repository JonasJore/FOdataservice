<?php 
// TODO: ytterligere logikk for formulering av eposten som skal sendt.
// TODO: dette er en dto-klasse... hva gjør business logikk her?!
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
  
  private function getMail(): String {
    return $this->mail;
  }
  
  private function getSubject(): String {
    return $this->subject;
  }
  
  private function getMessage(): String {
    return $this->message;
  }
  
  private function getTypeOfService(): String {
    return $this->typeOfService;
  }
  
  public function sendMail($toAdress): void {
    mail(
      $toAdress,
      $this->getSubject(),
      $this->getMessage(),
      'From: Mail sendt kontaktskjema' . '\r\n'.
      'Reply-To: webmaster@fodataservice.com' . '\r\n'.
      'X-Mailer: PHP/' . phpversion()
    );
  }
}

final class MailClientException extends RuntimeException {}
