<?php 

class SendMailController {
  private $mail;

  public function __construct($mail) {
    $this->mail = $mail;
  }
  
  // metode for testing av utvikler
  public function printStuff(): String {
    return $this->mail->getTypeOfService();
  }
  
  private function setHeaders() {
    $headers = 'From: ' . $this->mail->getFromMail() . "\r\n";
    $headers .= 'Reply-To: ' . $this->mail->getFromMail() . "\r\n";
    $headers .= 'CC: jonas.jore@gmail.com' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    
    return $headers;
  }

  // mail blir sendt ved kall til denne metoden.
  public function sendTo($toAdress): void {
    mail(
      $toAdress,
      $this->mail->getSubject(),
      $this->mail->getMessage(),
      $this->setHeaders()
    );
  }
}
