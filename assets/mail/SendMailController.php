<?php 

class SendMailController {
  private $mailClient;

  public function __construct($mail) {
    $this->mailClient = $mail;
  }
  
  // metode for testing av utvikler
  public function printStuff(): String {
    return $this->mailClient->getTypeOfService();
  }
  
  private function setHeaders() {
    $headers = 'From: ' . $this->mailClient->getFromMail() . "\r\n";
    $headers .= 'Reply-To: ' . $this->mailClient->getFromMail() . "\r\n";
    $headers .= 'CC: jonas.jore@gmail.com' . "\r\n";
    $headers .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    
    return $headers;
  }
  
  private function setSubject(): String {
    return $this->mailClient->getSubject();
  }
  
  private function formatMailMessage(): String {
    return "herro";
  }
  
  // mail blir sendt ved kall til denne metoden.
  public function sendTo($toAdress): void {
    mail(
      $toAdress,
      $this->setSubject(),
      $this->formatMailMessage(),
      $this->setHeaders()
    );
  }
}