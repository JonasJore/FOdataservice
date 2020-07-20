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

  private function mailContent(): String {
    $message = '<b>'.$this->mail->getTypeOfService().'</b>'.'<br/>';
    $message .= $this->mail->getMessage();
    return $message;
  }

  private function setHeaders() {
    $headers = 'From: ' . $this->mail->getFromMail() . "\r\n";
    $headers .= 'Reply-To: ' . $this->mail->getFromMail() . "\r\n";
    $headers .= 'CC:' . $this->mail->getFromMail() . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    return $headers;
  }

  // mail blir sendt ved kall til denne metoden.
  public function sendTo($toAdress): void {
    mail(
      $toAdress,
      $this->mail->getSubject(),
      $this->mailContent(),
      $this->setHeaders()
    );
  }
}
